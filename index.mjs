// 1. Block Data Structure
import Block from './blockClass';

// 2. Initiate Blockchain
import {
	getGenesisBlock,
	blockchain,
	getLatestBlock,
} from './initiateBlockchain';

// 3. Calculate Hash
import {
	calculateHash,
	calculateHashForBlock,
} from './calculateHash';

// 4. Validate New Block
import isValidNewBlock from './validateNewBlock';

// 5. Generate Next Block
import {
	generateNextBlock,
	addBlock,
} from './generateNextBlock';

// 6. Validate Blockchain
import replaceChain  from './validateBlockchain';

// 7. Setup HTTP Server
import initHttpServer from './initiateHttpServer';

// 8. Setup P2P Server
import { connectToPeers, initP2PServer } from './initiateP2PServer';

const initialPeers = process.env.PEERS ? process.env.PEERS.split(',') : [];

connectToPeers(initialPeers);
initHttpServer();
initP2PServer();