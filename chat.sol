pragma solidity >=0.8.9;

contract Chat {
    // event when a user write a new message
    event newMessage(string message, address owner);

    // Message object
    struct Message {
        uint id;
        string message;
        address owner;
    }

    // this contract has many messages
    Message[] public messages;

    // given the id, return the user
    mapping(uint => address) public messageToOwner;
    // given the address, return how messages has written
    mapping(address => uint) ownerMessageCount;
}
