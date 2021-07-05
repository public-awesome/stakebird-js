export const alice = {
	mnemonic:
		'enlist hip relief stomach skate base shallow young switch frequent cry park',
	pubkey0: {
		type: 'tendermint/PubKeySecp256k1',
		value: 'A9cXhWb8ZpqCzkA8dQCPV29KdeRLV3rUYxrkHudLbQtS',
	},
	address0: 'wasm14qemq0vw6y3gc3u3e0aty2e764u4gs5lndxgyk',
	address1: 'wasm1hhg2rlu9jscacku2wwckws7932qqqu8xm5ca8y',
	address2: 'wasm1xv9tklw7d82sezh9haa573wufgy59vmwnxhnsl',
	address3: 'wasm17yg9mssjenmc3jkqth6ulcwj9cxujrxxg9nmzk',
	address4: 'wasm1f7j7ryulwjfe9ljplvhtcaxa6wqgula3nh873j',
};

export const wasmd = {
	blockTime: 1_000, // ms
	chainId: 'testing',
	endpoint: 'http://localhost:26659',
	prefix: 'wasm',
	validator: {
		address: 'wasmvaloper1m4vhsgne6u74ff78vf0tvkjq3q4hjf9vjfrmy2',
	},
};
