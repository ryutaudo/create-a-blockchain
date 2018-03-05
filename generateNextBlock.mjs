/*******************************************
************* GENERATE NEXT BLOCK **********
********************************************/
import Block from './blockClass';
import { calculateHash } from './calculateHash';
import { blockchain, getLatestBlock } from './initiateBlockchain';
import isValidNewBlock from './validateNewBlock';


// Create new Block with previous Block hash value
const generateNextBlock = (blockData) => {
	const previousBlock = getLatestBlock();
	const nextIndex = previousBlock.index + 1;
	const nextTimestamp = new Date().getTime() / 1000;
	const nextHash = calculateHash(
		nextIndex,
		previousBlock.hash,
		nextTimestamp,
		blockData
	);
	return new Block(
		nextIndex,
		previousBlock.hash,
		nextTimestamp,
		blockData,
		nextHash
	);
};

const addBlock = (newBlock) => {
	if (isValidNewBlock(newBlock, getLatestBlock())) {
		blockchain.push(newBlock);
	}
};

export {
	generateNextBlock,
	addBlock,
};