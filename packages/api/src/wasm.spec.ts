import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

import {
	alice,
	defaultUploadFee,
	getHackatom,
	wasmd,
} from './testutils.spec';

import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';

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
			// const { codeId } = await client.upload(
			// 	alice.address0,
			// 	getHackatom().data,
			// 	defaultUploadFee
			// );
		});
	});
});
