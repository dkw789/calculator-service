'use strict';

describe('service Service', function () {

    var service;
   // var a;
   // var b;

    beforeEach(function () {
        service = new CalculatorService();
    });

    it('should display 0 when loaded', function () {
        expect(service.getDisplay()).toEqual('0');
    });

    //this test case will always fail
    it('should display 12345 when loaded', function () {
        expect(service.getDisplay()).toEqual('12345');
    });


    it('can add two positive numbers', function () {
        

        service.enterDigit('two');
        service.enterOperation('+');
        service.enterDigit('three');
        expect(service.enterEquals()).toEqual(5);

   });

    it('can handle negative number addition', function () {
        
        service.enterDigit('minus_five');
        service.enterOperation('+');
        service.enterDigit('two');
        expect(service.enterEquals()).toEqual(-3);
        
   });

    it('can subtract two positive numbers', function () {

        service.enterDigit('nine');
        service.enterOperation('-');
        service.enterDigit('six');
        expect(service.enterEquals()).toEqual (3);
        
        
   });

    it('can handle negative number subtraction', function () {

        service.enterDigit('four');
        service.enterOperation('-');
        service.enterDigit('six');
        expect(service.enterEquals()).toEqual (-2);
        
 
   });

        it('can multiply two positive numbers', function () {

        service.enterDigit('one');
        service.enterOperation('*');
        service.enterDigit('six');
        expect(service.enterEquals()).toEqual (6);

        });

        it('can multiply two negative numbers', function () {

        service.enterDigit('minus_five');
        service.enterOperation('*');
        service.enterDigit('minus_six');
        expect(service.enterEquals()).toEqual (30);

        });

        it('can multiply one negative number and one positive number', function () {

        service.enterDigit('five');
        service.enterOperation('*');
        service.enterDigit('minus_six');
        expect(service.enterEquals()).toEqual (-30);

        });

    it('can handle multiplication by zero', function () {

        service.enterDigit('zero');
        service.enterOperation('*');
        service.enterDigit('six');
        expect(service.enterEquals()).toEqual (0);
        
 
   });

    it('can divide two positive numbers', function () {

        service.enterDigit('six');
        service.enterOperation('/');
        service.enterDigit('one');
        expect(service.enterEquals()).toEqual (6);

    });

    it('can handle division by zero', function () {

        service.enterDigit('nine');
        service.enterOperation('/');
        service.enterDigit('zero');
        expect(service.enterEquals()).toEqual (Infinity);
   
 
   });

        it('can handle zero divide by any number', function () {

        service.enterDigit('zero');
        service.enterOperation('/');
        service.enterDigit('two');
        expect(service.enterEquals()).toEqual (0);
   
 
   });



  });



