var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('number clicks should update the display of the running total', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number3')).click();
   element(by.css('#number2')).click();
   element(by.css('#number1')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('321')
 })

 it('should add multiple numbers together and display total', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number3')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number1')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('6')
 })

 it('should use multiple operators together and display total', function(){
   running_total = element(by.css('#running_total'))
   element(by.css('#number3')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_subtract')).click();
   element(by.css('#number1')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('4')
 })

 it('should work with negative numbers', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })

  it('should work with decimal point numbers', function () {
     running_total = element(by.css('#running_total'))
     element(by.css('#number6')).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number8')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('0.75')
   })

   it('should work with very large numbers', function () {
      running_total = element(by.css('#running_total'))
      element(by.css('#number6')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number8')).click();
      element(by.css('#number9')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('95000')
    })

  });
