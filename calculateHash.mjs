/*******************************************
*************** CALCULATE HASH *************
********************************************/

// Hash function
// https://en.wikipedia.org/wiki/Hash_function
// (data1, data2, data3, data4) => hash value
// 
// crypto-js
// https://github.com/brix/crypto-js

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