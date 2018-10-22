var Envio = artifacts.require("./Envio.sol");
var account_one = web3.eth.accounts[0]; // an address
var account_two = web3.eth.accounts[1]; // another address

var meta;
web3.eth.sendTransaction({from:account_one, to:account_two, value: 10})
Envio.deployed().then(function(instance) {
  meta = instance;
  return meta.sendCoin(account_two, 10, {from: account_one});
}).then(function(result) {
  // If this callback is called, the transaction was successfully processed.
  alert("Transaction successful!")
}).catch(function(e) {
})