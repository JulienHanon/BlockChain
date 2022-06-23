pragma solidity ^0.5.7;

contract Hello {

    uint private number;

    constructor(uint _number) public { // initiate number in constructor
        number = _number;
    }

    function getNumber() public view returns(uint _number) { // function that return the number
        return number;
    }

    function setNumber (uint _number) public { // function that set a new number
        number = _number;
    }
}
