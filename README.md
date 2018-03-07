# Meetup: Create Your First Simple Blockchain

## About this repository

This repository is for [this meetup event](https://www.meetup.com/CodeChrysalis/events/247572273/).

## Requirements

- Node.js (Confirmed working on version 9.5.0.)
- Yarn (Confirmed working on version 1.3.2)
- Postman (Optional)

## How to install libraries
```
yarn install
```

## Quick start
Working code is already prepared in `solution` directory.
(set up two connected nodes and mine 1 block)
To run solution directory:

```
yarn quickstart-solution
```

## HTTP API
### Get blockchain
```
curl http://localhost:3001/blocks
```
### Create block
```
curl -H "Content-type:application/json" --data '{"data" : "Some data to the first block"}' http://localhost:3001/mineBlock
``` 
### Add peer
```
curl -H "Content-type:application/json" --data '{"peer" : "ws://localhost:6001"}' http://localhost:3001/addPeer
```
#### Query connected peers
```
curl http://localhost:3001/peers
```
