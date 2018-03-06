/***********************************
 * 1. Block Data Structure 
 * 2. Initiate Blockchain
 * 3. Calculate Hash
 * 4. Validate New Block
 * 5. Generate Next Block
 * 6. Validate Blockchain
 * 7. Setup HTTP Server
 * 8. Setup P2P Server
 ***********************************/

import initHttpServer from './initiateHttpServer';
import { connectToPeers, initP2PServer } from './initiateP2PServer';

const initialPeers = process.env.PEERS ? process.env.PEERS.split(',') : [];

connectToPeers(initialPeers);
initHttpServer();
initP2PServer();