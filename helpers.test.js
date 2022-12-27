describe('helper function tests',function(){

    beforeEach(function(){
        tipAmtInput.value = 20;
        billAmtInput.value = 100;
        submitPaymentInfo();
    })

    it('should sum the total of tip amounts on sumPaymentTotal',function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    })

    it('should sum the total bill amount on sumPaymentTotal',function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100);
    })
    
    afterEach(function(){
        tipAmt = '';
        billAmt = '';
        tipPercent = '';
    })

})