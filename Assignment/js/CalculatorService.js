'use strict';

function CalculatorService() {
    var display = '';
    var result =0;
    var a ='';
    var b ='';
    var operation_flag =0;
    var equal_flag =0;
    var op_sign;  


    var digits = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'zero': 0,
        'minus_one': -1,
        'minus_two': -2,
        'minus_three':-3,
        'minus_four': -4,
        'minus_five': -5,
        'minus_six': -6,
        'minus_seven': -7,
        'minus_eight': -8,
        'minus_nine': -9
       
    };

    this.enterDigit = function (stringDigit) {
       
       if (operation_flag==0)	{

       	a += digits[stringDigit];

 				display=a;		
 			}
        
 		else{
 			 
 			 if (equal_flag ==0) {

 			 	b += digits[stringDigit];

 			 	display=b;
 			 }

 			else {

 				return 0;
 			}
 			return 0;
 		}
 		
    };

    this.getDisplay = function () {
        return display || '0';
        //2
    };

this.enterOperation = function(op){
       operation_flag=1;
       op_sign=op;
       //console.log(op);
        //return op_sign;
    };
           

    this.enterEquals = function() {
    equal_flag =1;

/*  for some reason this part doesn't work if I use switch case
  switch(op_sign){
            case '+': result = parseInt(a + b); break;
            case '-': result = parseInt(a - b); break;
            case '*': result = parseInt(a * b); break;
            case '/': result = parseInt(a / b); break;
        }
        return result;
        };
*/


    if (op_sign == '+') {

            result = parseInt(a) + parseInt(b);
            return result;
       } 

        else if (op_sign =='-') {

            result = parseInt(a) - parseInt(b);
            return result;
        }

        else if (op_sign =='*') {
            result = parseInt(a) * parseInt(b);
            return result;
            }

        else {

            result = parseInt(a) / parseInt(b);
            return result;
         }

        };


this.enterClear = function() {  

    display = '';
    result =0;
    a ='';
    b ='';
    operation_flag = 0;
    equal_flag = 0;
    op_sign = null; 

/* Can't not clear... using this method
    display.clear;
    result.clear ;
     a.clear ;
     b.clear;
    equal_flag.clear ;
    op_sign.clear; 

*/
 };


}


var calc = new CalculatorService();


//calc.enterClear();

calc.enterDigit('one'); 
console.log(calc.getDisplay()); 


calc.enterDigit('two');
console.log(calc.getDisplay());


//calc.enterClear();

calc.enterOperation('+');
console.log(calc.getDisplay());

calc.enterDigit('three');
console.log(calc.getDisplay());
//console.log(calc.enterOperation(op));

calc.enterEquals();
console.log(calc.enterEquals());

calc.enterClear();

