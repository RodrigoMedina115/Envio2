
var Boleta = artifacts.require("./Boleta.sol");
module.exports = function(deployer) {
	deployer.deploy(Boleta);
};