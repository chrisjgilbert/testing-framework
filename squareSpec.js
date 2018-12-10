function test_square_area(callback, expected) {
  result = callback;
  if (result === expected) {
    document.getElementById("result").innerHTML = "Test passed!";
  } else {
    document.getElementById("result").innerHTML = "Test failed!";
  }
};

test_square_area(square(3), 9); // passing test
test_square_area(square(3), 2345); // failing test
