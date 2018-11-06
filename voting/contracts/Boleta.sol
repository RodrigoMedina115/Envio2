pragma solidity ^0.4.0;
contract Boleta{
    address Comprador;
    address Vendedor;
    string Juego;
    mapping (address => uint) public balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Sent(address from, address to, int value);
function boleta(address a,address b,string j){
    Comprador = a;
    Vendedor = b;
    Juego = j;
}
function mostrarboletaComprador() constant returns (address){
    return Comprador;

}
function sendCoin(address receiver, uint amount) returns(bool sufficient) {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Transfer(msg.sender, receiver, amount);
        return true;
    }
function send(address Comprador) payable { 

}
}