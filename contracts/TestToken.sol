pragma solidity 0.6.12;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Ownable.sol";


contract TestToken is ERC20,Ownable {
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals
    ) public ERC20(name, symbol) {
        _setupDecimals(decimals);
    }

    function mint(uint256 _amount, address _to) public onlyOwner{
        _mint(_to, _amount);
    }
}