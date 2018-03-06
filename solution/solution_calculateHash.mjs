/*******************************************
*************** CALCULATE HASH *************
********************************************/

import CryptoJS from 'crypto-js';

// Calculate hash value with SHA256( Secure Hash Algorithm 256-bit )
const calculateHash = (
	index,
	previousHash,
	timestamp,
	data
) => {
	return CryptoJS.SHA256(
		index
    + previousHash
    + timestamp
    + data
	).toString();
};

// Calculate hash value for a block
const calculateHashForBlock = (block) => {
	return calculateHash(
		block.index,
		block.previousHash,
		block.timestamp,
		block.data
	);
};

export {
	calculateHash,
	calculateHashForBlock,
};
