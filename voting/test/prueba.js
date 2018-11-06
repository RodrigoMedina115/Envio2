var Boleta = artifacts.require("./Boleta.sol");
var account_one = "0x5c81DF4F0d088394B8d7b83549d6488c6F135684";
var account_two = "0x4822d8061491129Dc4f3E68283738c1eaEe1c7b0"; // another address

var meta;
Boleta.deployed().then(function(instance) {
  meta = instance;
  return meta.boleta(account_one, account_two, "juego");
}).then(function(result) {
  // If this callback is called, the transaction was successfully processed.
  console.log("boleta creada")
}).catch(function(e) {
  // There was an error! Handle it.
})
Boleta.deployed().then(function(instance) {
    meta = instance;
    return meta.mostrarboletaComprador();
  }).then(function(result) {
    // If this callback is called, the transaction was successfully processed.
    console.log(result)
  }).catch(function(e) {
    // There was an error! Handle it.
})
Boleta.deployed().then(function(instance) {
    meta = instance;
    return meta.sendCoin(account_one, web3.toWei("10",'ether'), {from: account_two});
  }).then(function(result) {
    // If this callback is called, the transaction was successfully processed.
    console.log("transaccion realizada")
  }).catch(function(e) {
    // There was an error! Handle it.
  })
  console.log(web3.eth.getBalance(account_one))
  console.log(web3.eth.getBalance(account_two))
/*Boleta.deployed().then(function(instance) {
    meta = instance;
    return meta.send(account_two, {from:account_one, value:web3.toWei("1",'ether')}
  ).then(function(result) {
    // If this callback is called, the transaction was successfully processed.
    console.log("transaccion realizada")
  }).catch(function(e) {
    console.log(e)
  })
})*/