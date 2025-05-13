import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  myDiagnosticData: [],
  benchmarkData: [],
  clientKPIData: [],
  kpiResults: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MY_DIAGNOSTIC_DATA":
      return { ...state, myDiagnosticData: action.payload };
    case "SET_BENCHMARK_DATA":
      return { ...state, benchmarkData: action.payload };
    case "SET_CLIENT_KPI_DATA":
      return { ...state, clientKPIData: action.payload };
    case "SET_KPI_RESULTS":
      return { ...state, kpiResults: action.payload };
    default:
      return state;
  }
}

const store = configureStore({ reducer: rootReducer });

export default store;
