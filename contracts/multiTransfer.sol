// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "./Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";


contract MultiTransfer is Ownable {
   using SafeMath for uint256;

     ERC20 public tokenToTansfer;
     address[] public addresses;
     uint256[] public amounts;
     uint256 public queuepassed;


    constructor(ERC20 _address) public{
       tokenToTansfer = _address;
       owner = msg.sender;
    }

    function setAddresses(address[] memory _addresses)public{
        uint256 index;
        while(index < _addresses.length){
            addresses.push(_addresses[index]);
            index++;
        }
    }
    function setAmounts(uint256[] memory _amounts)public{
        uint256 index;
        while(index < _amounts.length){
            amounts.push(_amounts[index]);
            index++;
        }
    }
    function distribute(uint256 numberOfTranfersInThisTx) external onlyOwner{
        uint256 i;
        while(i <= numberOfTranfersInThisTx){
            if(queuepassed < amounts.length){
                safeTokenTransfer(addresses[queuepassed], amounts[queuepassed]);
                 queuepassed += 1;
            }
            i++;
        }
        //numberOfTranfersInThisTx;
    }

    function getAddressesLength()public view returns(uint256){
        return addresses.length;

    }

    function getAmountsLength()public view returns(uint256){
        return amounts.length;

    }

    function safeTokenTransfer(address _to, uint256 _amount) internal {
        bool transferSuccess = false;
        transferSuccess = tokenToTansfer.transfer(_to, _amount);
        require(transferSuccess, "safeTokenTransfer: transfer failed");
    }


   }
