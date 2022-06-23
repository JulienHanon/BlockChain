
pragma solidity ^0.5.7;

contract Hello {
    string private message;
    constructor(string memory _message) public { // initiate number in constructor
        message = _message;
    }
    function getMessage() public view returns (string memory){ // function that return the message
        return message;
    }
    function setMessage(string memory _message) public { // function that set a new message
        message = _message;
    }
}

