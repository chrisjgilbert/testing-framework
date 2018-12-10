function test(description, assertion) {
  printDescription(description);
  assertion();
};

function assertEquals(result, expected) {
  return (result === expected ? passTest() : failTest(result, expected));
};

function printResult(result, color) {
  document.getElementById("result").innerHTML = "Test "+ result +"!";
  document.getElementById("result").style.color = color
}

function printDescription(description) {
  document.getElementById("description").innerHTML = description;
}

function passTest() {
  printResult('passed', 'green');
}

function failTest(result, expected) {
  printResult('fail', 'red');
  throw new Error('Expect result: ' + expected + ' Actual result: ' + result)
}


test('a passing test', function() {
    var square = new Square(10);
    assertEquals(square.area(), 100);
});

test('a failing test', function() {
    var square = new Square(10);
    assertEquals(square.area(), 3);
});
