/*******************************************
************* SETUP HTTP SERVER ************
********************************************/
import express from 'express';
import bodyParser from 'body-parser';

import { blockchain } from './initiateBlockchain';
import { generateNextBlock, addBlock } from './generateNextBlock';
import {
	sockets,
	broadcast,
	connectToPeers,
	responseLatestMsg,
} from './initiateP2PServer';

const http_port = process.env.HTTP_PORT || 3001;

// Setting HTTP server
const initHttpServer = () => {
	const app = express();
	app.use(bodyParser.json());

	// GET current blockchain
	app.get('/blocks', (req, res) => res.send(JSON.stringify(blockchain)));

	// Post create new block
	app.post('/mineBlock', (req, res) => {
		const newBlock = generateNextBlock(req.body.data);
		addBlock(newBlock);
		broadcast(responseLatestMsg());
		console.log('block added: ' + JSON.stringify(newBlock));
		res.send();
	}); 

	// GET list of peers participating P2P network
	app.get('/peers', (req, res) => {
		res.send(sockets.map(s => s._socket.remoteAddress + ':' + s._socket.remotePort));
	});

	// POST new peer to P2P network
	app.post('/addPeer', (req, res) => {
		connectToPeers([req.body.peer]);
		res.send();
	});
	app.listen(http_port, () => console.log('Listening http on port: ' + http_port));
};

export default initHttpServer;