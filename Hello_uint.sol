pragma solidity ^0.5.7;

contract Hello {

    uint private number;

    constructor(uint _number) public {
        number = _number;
    }

    function getNumber() public view returns(uint _number) {
        return number;
    }

    function setNumber (uint _number) public {
        number = _number;
    }
}
