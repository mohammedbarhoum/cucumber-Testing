const {Given ,When , Then} =require('@cucumber/cucumber'); 
const {isPostive}=require('../../../src/app');
const assert = require('assert');


Given('number 5' , function(){

this.number =5;

});

When(' i ask if number 5 is postive ', function(){


 thise.actualAnswer= isPostive(5);

});

Then('i should receive "Postive', function(expecteAnswer){

   
    assert.equal(this.actualAnswer, expecteAnswer);
   
   });
