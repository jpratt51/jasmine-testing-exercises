
it('should calculate the monthly rate correctly', function() {
  expect(calculateMonthlyPayment({amount : 100000, years : 30, rate : 5}).toEqual(536.82))
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
