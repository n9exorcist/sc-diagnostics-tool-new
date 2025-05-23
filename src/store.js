import { configureStore } from "@reduxjs/toolkit";
import benchmarkReducer from "./slices/benchmarkSlice";
import clientReducer from "./slices/clientSlice";

// Initial state
const initialState = {
  myDiagnosticData: [],
  benchmarkData: [], // Will be managed by benchmarkSlice.reducer
  clientKPIData: [], // Will be managed by clientSlice.reducer
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MY_DIAGNOSTIC_DATA":
      return {
        ...state,
        myDiagnosticData: action.payload,
      };

    default:
      // Let each slice handle its own key
      return {
        ...state,
        benchmarkData: benchmarkReducer(state.benchmarkData, action),
        clientKPIData: clientReducer(state.clientKPIData, action),
      };
  }
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;
