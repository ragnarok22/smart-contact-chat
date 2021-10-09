pragma solidity >=0.5.16;

contract Chat {
    // event when a user write a new message
    event newMessage(uint id, string message, address owner);

    // Message object
    struct Message {
        string message;
        address owner;
    }

    // this contract has many messages
    Message[] public messages;

    // given the id, return the user
    mapping(uint => address) public messageToOwner;
    // given the address, return how messages has written
    mapping(address => uint) ownerMessageCount;

    function addMessage(string memory _message) public {
        uint id = messages.push(Message(_message, msg.sender));
        messageToOwner[id] = msg.sender;
        ownerMessageCount[msg.sender]++;
        emit newMessage(id, _message, msg.sender);
    }
}
