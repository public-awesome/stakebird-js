import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

import { alice, defaultExecuteFee, wasmd } from './testutils.spec';

describe('CW20BondingClient', () => {
	describe('buy', () => {
		it('works', async () => {
			const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
				alice.mnemonic,
				{ prefix: wasmd.prefix }
			);
			const options = { prefix: wasmd.prefix };
			const client = await SigningCosmWasmClient.connectWithSigner(
				wasmd.endpoint,
				wallet,
				options
			);
			const contractAddress = 'adsf';
			const result = await client.execute(
				alice.address0,
				contractAddress,
				{ buy: {} },
				defaultExecuteFee
			);
		});
	});
});
