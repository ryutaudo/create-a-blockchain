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
	// return new Block(
	// 	0,
	// 	'0',
	// 	1465154705,
	// 	'my genesis block!!',
	// 	'816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7'
	// );
};

// Initialte blockchain
let blockchain = [getGenesisBlock()];

// Get the Latest Block
const getLatestBlock = () => blockchain[blockchain.length - 1];

export { getGenesisBlock, blockchain, getLatestBlock };