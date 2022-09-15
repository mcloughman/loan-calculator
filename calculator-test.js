
describe('Calculate Monthly Payment', () => {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 200000, years: 30, rate: 5.5})).toEqual('1135.58')
  });
  it("should return a result with 2 decimal places", function() {
    // use split to convert monthly mp into an array. splitting on the "." will cause whatever is after the decimal to be at index 1 of the array created. and it's length should always be 2
    expect(calculateMonthlyPayment({amount: 200000, years: 30, rate: 5.5}).split(".")[1].length).toBe(2)
  });
})






