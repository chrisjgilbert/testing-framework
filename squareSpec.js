var testjs = {

  test: function(description, assertion) {
    this.printDescription(description);
    assertion();
  },

  assertEquals: function(result, expected) {
    return (result === expected ? this.passTest() : this.failTest(result, expected));
  },

  printResult: function(result, color) {
    document.getElementById("result").innerHTML = "Test "+ result +"!";
    document.getElementById("result").style.color = color
  },

  printDescription: function(description) {
    document.getElementById("description").innerHTML = description;
  },

  passTest: function() {
    this.printResult('passed', 'green');
  },

  failTest: function(result, expected) {
    this.printResult('fail', 'red');
    throw new Error('Expect result: ' + expected + ' Actual result: ' + result)
  }
}

testjs.test('a passing test', function() {
    var square = new Square(10);
    testjs.assertEquals(square.area(), 100);
});

testjs.test('a failing test', function() {
    var square = new Square(10);
    testjs.assertEquals(square.area(), 1);
});
