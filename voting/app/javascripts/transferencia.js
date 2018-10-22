function apretar(){
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

/*
 * When you compile and deploy your Voting contract,
 * truffle stores the abi and deployed address in a json
 * file in the build directory. We will use this information
 * to setup a Voting abstraction. We will use this abstraction
 * later to create an instance of the Voting contract.
 * Compare this against the index.js from our previous tutorial to see the difference
 * https://gist.github.com/maheshmurthy/f6e96d6b3fff4cd4fa7f892de8a1a1b4#file-index-js
 */

import envio_artifacts from '../../build/contracts/Envio.json'

var Envio = contract(envio_artifacts);	
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
var Envio = contract(Envio_artifacts);
var account_one = document.getElementById("cuenta_1").value;; // an address
var account_two = document.getElementById("cuenta_2").value;; // another address
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
}