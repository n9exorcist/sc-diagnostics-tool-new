export const theme = {
  primary: {
    main: "#3f51b5",
    text: "#fff",
    margin: "10px",
  },
  secondary: {
    main: "#f50057",
    text: "#fff",
    margin: "10px",
  },
};

// Closure

function outer() {
  var b = 10;
  // The function outer cannot able to access the variable a
  function inner() {
    // The function inner can able to access the variable b
    // scope starts
    var a = 20;

    console.log(a + b);
    // scope ends
  }
  return inner;
}
let someFn = outer();
// we can access the inner funtion like this. Answer is 30
someFn();
