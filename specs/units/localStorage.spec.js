const { expect } = require("chai");

describe('localStorage', () => {

 subject(() => window.localStorage);

 it( () => is.expected.to.respondTo("getItem"));
 it( () => is.expected.to.respondTo("setItem"));
 it( () => is.expected.to.respondTo("removeItem"));
 it( () => is.expected.to.respondTo("clear"));
 it( () => is.expected.to.have.property("data"));

 const entry_1 ={
  name: 'Miyesier',
  phone:'1234567',
  email:'miyesier@fakemail.com'
 }

 describe("#setItem", () => {
  let storedData;

  before(() => {
    $subject.setItem("entries", JSON.stringify(entry_1));
    storedData = $subject.data;
  });

  it("is expected to store data in the chosen key", () => {
    expect(storedData).to.have.own.property("entries");
  });

  it("is expected to store the data as a string", () => {
    expect(typeof storedData.entries).to.equal("string");
  });
 }); 

 describe('#getItem', () => {
  context('existing key',() =>{
    def('response',() => $subject.getItem('entries'))

    before(() => {
      $subject.setItem('entries',JSON.stringify(entry_1))
    });
    it('is expected to return a string',()=> {
      expect(typeof $response).to.equal('string')
    })
    it('is expected to contain the data', () => {
      expect(JSON.parse($response)).to.eql(entry_1)
    });
  })
  context('non existing key',()=> {
    
  })   
 })
 
});

