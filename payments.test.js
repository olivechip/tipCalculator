describe('payments test',function(){

    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    })

    it('should not add a new payment obj w/ empty bill amount',function(){
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(allPayments).toEqual({});
    });

    it('should add a new payment obj w/ a bill amount and an empty tip amount',function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 0;

        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('0');
        expect(allPayments['payment1'].tipPercent).toEqual(0);
    });

    it('should add a new payment obj with specified values',function(){
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should create a table row element and append with input value',function(){
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$20');
        expect(curTdList[2].innerText).toEqual('20%');
    })

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    })
});




// Create table row element and pass to appendTd with input value
function appendPaymentTable(curPayment) {
    let newTr = document.createElement('tr');
    newTr.id = 'payment' + paymentId;
  
    appendTd(newTr, '$' + curPayment.billAmt);
    appendTd(newTr, '$' + curPayment.tipAmt);
    appendTd(newTr, curPayment.tipPercent + '%');
  
    paymentTbody.append(newTr);
  }





