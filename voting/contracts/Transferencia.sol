pragma solidity >=0.4.22 <0.6.0;
contract Transferencia{
    uint public value= 10;
    address public Vendedor= 0x2f9c8D2367aC65e8C55C604E59499464e75bBe85;
    address public  Comprador= 0x7fBc7D96F8f307CdFaaC6C14701Ed5a7E80c750C;
 
 function transaccion(){
    Comprador.transfer(value);
    Vendedor.transfer(address(this).balance);
 }
}