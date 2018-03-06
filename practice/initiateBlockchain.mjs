/*******************************************
************* INITIATE BLOCKCHAIN **********
********************************************/
import Block from './blockClass';


/* THE BLOCK CLASS YOU DEFINED
 * 
 * class Block {
 * 	constructor(index, previousHash, timestamp, data, hash) {
 * 		this.index = index;
 * 		this.previousHash = previousHash.toString();
 * 		this.timestamp = timestamp;
 * 		this.data = data;
 * 		this.hash = hash.toString();
 * 	}
 * }
 */


// Create a genesis block
const getGenesisBlock = () => {
	// YOUR CODE HERE
};

// Initialte blockchain
let blockchain = [getGenesisBlock()];

// Get the Latest Block
const getLatestBlock = () => blockchain[blockchain.length - 1];

export { getGenesisBlock, blockchain, getLatestBlock };