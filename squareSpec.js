function test(description, assertion) {
  assertion();
};

function assertEquals(functionUnderTest, expected) {
  result = functionUnderTest;
  if (result === expected) {
    document.getElementById("result").innerHTML = "Test passed!";
  } else {
    document.getElementById("result").innerHTML = "Test failed!";
    throw new Error ('Expect result: ' + expected + ' Actual result: ' + result)
  }
};

test('a passing test', function() {
    var square = new Square(10);
    assertEquals(square.area(), 100);
});

// test('a failing test', function() {
//     var square = new Square(10);
//     assertEquals(square.area(), 3);
// });
