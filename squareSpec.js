function test(description, assertion) {
  printDescription(description);
  assertion();
};

function assertEquals(result, expected) {
  if (result === expected) {
    printResult('passed', 'green');
  } else {
    printResult('fail', 'red');
    throw new Error('Expect result: ' + expected + ' Actual result: ' + result)
  }
};

function printResult(result, color) {
  document.getElementById("result").innerHTML = "Test "+ result +"!";
  document.getElementById("result").style.color = color
}

function printDescription(description) {
  document.getElementById("description").innerHTML = description;
}

test('a passing test', function() {
    var square = new Square(10);
    assertEquals(square.area(), 100);
});

test('a failing test', function() {
    var square = new Square(10);
    assertEquals(square.area(), 3);
});
