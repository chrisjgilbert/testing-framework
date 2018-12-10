function test(description, callback) {
  callback();
};

function assertEquals(functionUnderTest, expected) {
  result = functionUnderTest;
  if (result === expected) {
    printResult('passed');
  } else {
    printResult('fail');
    throw new Error ('Expect result: ' + expected + ' Actual result: ' + result)
  }
};

function printResult(result) {
  document.getElementById("result").innerHTML = "Test "+ result +"!";
}

test('a passing test', function() {
    var square = new Square(10);
    assertEquals(square.area(), 100);
});

test('a failing test', function() {
    var square = new Square(10);
    assertEquals(square.area(), 3);
});
