var Voting = artifacts.require("./Voting.sol");
var Envio = artifacts.requiere("./Envio.sol");
module.exports = function(deployer) {
  deployer.deploy(Voting, ['Sebastian Piñera', 'Alejandro Guillier', 'Beatriz Sanchez','Jose Antonio Kast','Carolina Goic','Marco Enriquez-Ominami','Eduardo Artes','Alejandro Navarro']);
  deployer.deploy(Envio);
};