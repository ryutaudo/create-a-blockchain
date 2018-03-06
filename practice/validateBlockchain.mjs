/*******************************************
******* CHOOSE THE LONGEST BLOCKCHAIN ******
********************************************/
import { blockchain, getGenesisBlock } from './initiateBlockchain';
import isValidNewBlock from './validateNewBlock';
import { broadcast, responseLatestMsg } from './initiateP2PServer';

// Validate blockchain
const isValidChain = (blockchainToValidate) => {
	if (JSON.stringify(blockchainToValidate[0]) !== JSON.stringify(getGenesisBlock())) {
		return false;
	}
	const tempBlocks = [blockchainToValidate[0]];
	for (let i = 1; i < blockchainToValidate.length; i++) {
		if (isValidNewBlock(blockchainToValidate[i], tempBlocks[i - 1])) {
			tempBlocks.push(blockchainToValidate[i]);
		} else {
			return false;
		}
	}
	return true;
};

// Choose the longest blockchain
const replaceChain = (newBlocks) => {
	if (isValidChain(newBlocks) && newBlocks.length > blockchain.length) {
		console.log('Received blockchain is valid. Replacing current blockchain with received blockchain');
		blockchain = newBlocks;
		broadcast(responseLatestMsg());
	} else {
		console.log('Received blockchain invalid');
	}
};


export default replaceChain;