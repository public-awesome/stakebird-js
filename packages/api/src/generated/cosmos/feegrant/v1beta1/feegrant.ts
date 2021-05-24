/* eslint-disable */
import { Any } from '../../../google/protobuf/any';
import { Timestamp } from '../../../google/protobuf/timestamp';
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Duration as Duration1 } from '../../../google/protobuf/duration';

export const protobufPackage = 'cosmos.feegrant.v1beta1';

/**
 * BasicFeeAllowance implements FeeAllowance with a one-time grant of tokens
 * that optionally expires. The delegatee can use up to SpendLimit to cover fees.
 */
export interface BasicFeeAllowance {
	/**
	 * spend_limit specifies the maximum amount of tokens that can be spent
	 * by this allowance and will be updated as tokens are spent. If it is
	 * empty, there is no spend limit and any amount of coins can be spent.
	 */
	spendLimit: Coin[];
	/** expiration specifies an optional time when this allowance expires */
	expiration?: ExpiresAt;
}

/**
 * PeriodicFeeAllowance extends FeeAllowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicFeeAllowance {
	/** basic specifies a struct of `BasicFeeAllowance` */
	basic?: BasicFeeAllowance;
	/**
	 * period specifies the time duration in which period_spend_limit coins can
	 * be spent before that allowance is reset
	 */
	period?: Duration;
	/**
	 * period_spend_limit specifies the maximum number of coins that can be spent
	 * in the period
	 */
	periodSpendLimit: Coin[];
	/** period_can_spend is the number of coins left to be spent before the period_reset time */
	periodCanSpend: Coin[];
	/**
	 * period_reset is the time at which this period resets and a new one begins,
	 * it is calculated from the start time of the first transaction after the
	 * last period ended
	 */
	periodReset?: ExpiresAt;
}

/** AllowedMsgFeeAllowance creates allowance only for specified message types. */
export interface AllowedMsgFeeAllowance {
	/** allowance can be any of basic and filtered fee allowance. */
	allowance?: Any;
	/** allowed_messages are the messages for which the grantee has the access. */
	allowedMessages: string[];
}

/**
 * Duration is a span of a clock time or number of blocks.
 * This is designed to be added to an ExpiresAt struct.
 */
export interface Duration {
	duration?: Duration1 | undefined;
	blocks: Long | undefined;
}

/**
 * ExpiresAt is a point in time where something expires.
 * It may be *either* block time or block height
 */
export interface ExpiresAt {
	time?: Date | undefined;
	height: Long | undefined;
}

/** FeeAllowanceGrant is stored in the KVStore to record a grant with full context */
export interface FeeAllowanceGrant {
	granter: string;
	grantee: string;
	allowance?: Any;
}

const baseBasicFeeAllowance: object = {};

export const BasicFeeAllowance = {
	encode(
		message: BasicFeeAllowance,
		writer: Writer = Writer.create()
	): Writer {
		for (const v of message.spendLimit) {
			Coin.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.expiration !== undefined) {
			ExpiresAt.encode(
				message.expiration,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): BasicFeeAllowance {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseBasicFeeAllowance
		) as BasicFeeAllowance;
		message.spendLimit = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.spendLimit.push(
						Coin.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.expiration = ExpiresAt.decode(
						reader,
						reader.uint32()
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): BasicFeeAllowance {
		const message = globalThis.Object.create(
			baseBasicFeeAllowance
		) as BasicFeeAllowance;
		message.spendLimit = [];
		if (object.spendLimit !== undefined && object.spendLimit !== null) {
			for (const e of object.spendLimit) {
				message.spendLimit.push(Coin.fromJSON(e));
			}
		}
		if (object.expiration !== undefined && object.expiration !== null) {
			message.expiration = ExpiresAt.fromJSON(object.expiration);
		} else {
			message.expiration = undefined;
		}
		return message;
	},

	fromPartial(object: DeepPartial<BasicFeeAllowance>): BasicFeeAllowance {
		const message = { ...baseBasicFeeAllowance } as BasicFeeAllowance;
		message.spendLimit = [];
		if (object.spendLimit !== undefined && object.spendLimit !== null) {
			for (const e of object.spendLimit) {
				message.spendLimit.push(Coin.fromPartial(e));
			}
		}
		if (object.expiration !== undefined && object.expiration !== null) {
			message.expiration = ExpiresAt.fromPartial(object.expiration);
		} else {
			message.expiration = undefined;
		}
		return message;
	},

	toJSON(message: BasicFeeAllowance): unknown {
		const obj: any = {};
		if (message.spendLimit) {
			obj.spendLimit = message.spendLimit.map((e) =>
				e ? Coin.toJSON(e) : undefined
			);
		} else {
			obj.spendLimit = [];
		}
		message.expiration !== undefined &&
			(obj.expiration = message.expiration
				? ExpiresAt.toJSON(message.expiration)
				: undefined);
		return obj;
	},
};

const basePeriodicFeeAllowance: object = {};

export const PeriodicFeeAllowance = {
	encode(
		message: PeriodicFeeAllowance,
		writer: Writer = Writer.create()
	): Writer {
		if (message.basic !== undefined) {
			BasicFeeAllowance.encode(
				message.basic,
				writer.uint32(10).fork()
			).ldelim();
		}
		if (message.period !== undefined) {
			Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
		}
		for (const v of message.periodSpendLimit) {
			Coin.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		for (const v of message.periodCanSpend) {
			Coin.encode(v!, writer.uint32(34).fork()).ldelim();
		}
		if (message.periodReset !== undefined) {
			ExpiresAt.encode(
				message.periodReset,
				writer.uint32(42).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): PeriodicFeeAllowance {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			basePeriodicFeeAllowance
		) as PeriodicFeeAllowance;
		message.periodSpendLimit = [];
		message.periodCanSpend = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.basic = BasicFeeAllowance.decode(
						reader,
						reader.uint32()
					);
					break;
				case 2:
					message.period = Duration.decode(reader, reader.uint32());
					break;
				case 3:
					message.periodSpendLimit.push(
						Coin.decode(reader, reader.uint32())
					);
					break;
				case 4:
					message.periodCanSpend.push(
						Coin.decode(reader, reader.uint32())
					);
					break;
				case 5:
					message.periodReset = ExpiresAt.decode(
						reader,
						reader.uint32()
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): PeriodicFeeAllowance {
		const message = globalThis.Object.create(
			basePeriodicFeeAllowance
		) as PeriodicFeeAllowance;
		message.periodSpendLimit = [];
		message.periodCanSpend = [];
		if (object.basic !== undefined && object.basic !== null) {
			message.basic = BasicFeeAllowance.fromJSON(object.basic);
		} else {
			message.basic = undefined;
		}
		if (object.period !== undefined && object.period !== null) {
			message.period = Duration.fromJSON(object.period);
		} else {
			message.period = undefined;
		}
		if (
			object.periodSpendLimit !== undefined &&
			object.periodSpendLimit !== null
		) {
			for (const e of object.periodSpendLimit) {
				message.periodSpendLimit.push(Coin.fromJSON(e));
			}
		}
		if (
			object.periodCanSpend !== undefined &&
			object.periodCanSpend !== null
		) {
			for (const e of object.periodCanSpend) {
				message.periodCanSpend.push(Coin.fromJSON(e));
			}
		}
		if (object.periodReset !== undefined && object.periodReset !== null) {
			message.periodReset = ExpiresAt.fromJSON(object.periodReset);
		} else {
			message.periodReset = undefined;
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<PeriodicFeeAllowance>
	): PeriodicFeeAllowance {
		const message = { ...basePeriodicFeeAllowance } as PeriodicFeeAllowance;
		message.periodSpendLimit = [];
		message.periodCanSpend = [];
		if (object.basic !== undefined && object.basic !== null) {
			message.basic = BasicFeeAllowance.fromPartial(object.basic);
		} else {
			message.basic = undefined;
		}
		if (object.period !== undefined && object.period !== null) {
			message.period = Duration.fromPartial(object.period);
		} else {
			message.period = undefined;
		}
		if (
			object.periodSpendLimit !== undefined &&
			object.periodSpendLimit !== null
		) {
			for (const e of object.periodSpendLimit) {
				message.periodSpendLimit.push(Coin.fromPartial(e));
			}
		}
		if (
			object.periodCanSpend !== undefined &&
			object.periodCanSpend !== null
		) {
			for (const e of object.periodCanSpend) {
				message.periodCanSpend.push(Coin.fromPartial(e));
			}
		}
		if (object.periodReset !== undefined && object.periodReset !== null) {
			message.periodReset = ExpiresAt.fromPartial(object.periodReset);
		} else {
			message.periodReset = undefined;
		}
		return message;
	},

	toJSON(message: PeriodicFeeAllowance): unknown {
		const obj: any = {};
		message.basic !== undefined &&
			(obj.basic = message.basic
				? BasicFeeAllowance.toJSON(message.basic)
				: undefined);
		message.period !== undefined &&
			(obj.period = message.period
				? Duration.toJSON(message.period)
				: undefined);
		if (message.periodSpendLimit) {
			obj.periodSpendLimit = message.periodSpendLimit.map((e) =>
				e ? Coin.toJSON(e) : undefined
			);
		} else {
			obj.periodSpendLimit = [];
		}
		if (message.periodCanSpend) {
			obj.periodCanSpend = message.periodCanSpend.map((e) =>
				e ? Coin.toJSON(e) : undefined
			);
		} else {
			obj.periodCanSpend = [];
		}
		message.periodReset !== undefined &&
			(obj.periodReset = message.periodReset
				? ExpiresAt.toJSON(message.periodReset)
				: undefined);
		return obj;
	},
};

const baseAllowedMsgFeeAllowance: object = { allowedMessages: '' };

export const AllowedMsgFeeAllowance = {
	encode(
		message: AllowedMsgFeeAllowance,
		writer: Writer = Writer.create()
	): Writer {
		if (message.allowance !== undefined) {
			Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
		}
		for (const v of message.allowedMessages) {
			writer.uint32(18).string(v!);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): AllowedMsgFeeAllowance {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseAllowedMsgFeeAllowance
		) as AllowedMsgFeeAllowance;
		message.allowedMessages = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.allowance = Any.decode(reader, reader.uint32());
					break;
				case 2:
					message.allowedMessages.push(reader.string());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): AllowedMsgFeeAllowance {
		const message = globalThis.Object.create(
			baseAllowedMsgFeeAllowance
		) as AllowedMsgFeeAllowance;
		message.allowedMessages = [];
		if (object.allowance !== undefined && object.allowance !== null) {
			message.allowance = Any.fromJSON(object.allowance);
		} else {
			message.allowance = undefined;
		}
		if (
			object.allowedMessages !== undefined &&
			object.allowedMessages !== null
		) {
			for (const e of object.allowedMessages) {
				message.allowedMessages.push(String(e));
			}
		}
		return message;
	},

	fromPartial(
		object: DeepPartial<AllowedMsgFeeAllowance>
	): AllowedMsgFeeAllowance {
		const message = {
			...baseAllowedMsgFeeAllowance,
		} as AllowedMsgFeeAllowance;
		message.allowedMessages = [];
		if (object.allowance !== undefined && object.allowance !== null) {
			message.allowance = Any.fromPartial(object.allowance);
		} else {
			message.allowance = undefined;
		}
		if (
			object.allowedMessages !== undefined &&
			object.allowedMessages !== null
		) {
			for (const e of object.allowedMessages) {
				message.allowedMessages.push(e);
			}
		}
		return message;
	},

	toJSON(message: AllowedMsgFeeAllowance): unknown {
		const obj: any = {};
		message.allowance !== undefined &&
			(obj.allowance = message.allowance
				? Any.toJSON(message.allowance)
				: undefined);
		if (message.allowedMessages) {
			obj.allowedMessages = message.allowedMessages.map((e) => e);
		} else {
			obj.allowedMessages = [];
		}
		return obj;
	},
};

const baseDuration: object = {};

export const Duration = {
	encode(message: Duration, writer: Writer = Writer.create()): Writer {
		if (message.duration !== undefined) {
			Duration1.encode(
				message.duration,
				writer.uint32(10).fork()
			).ldelim();
		}
		if (message.blocks !== undefined) {
			writer.uint32(16).uint64(message.blocks);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Duration {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseDuration) as Duration;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.duration = Duration1.decode(
						reader,
						reader.uint32()
					);
					break;
				case 2:
					message.blocks = reader.uint64() as Long;
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): Duration {
		const message = globalThis.Object.create(baseDuration) as Duration;
		if (object.duration !== undefined && object.duration !== null) {
			message.duration = Duration1.fromJSON(object.duration);
		} else {
			message.duration = undefined;
		}
		if (object.blocks !== undefined && object.blocks !== null) {
			message.blocks = Long.fromString(object.blocks);
		} else {
			message.blocks = undefined;
		}
		return message;
	},

	fromPartial(object: DeepPartial<Duration>): Duration {
		const message = { ...baseDuration } as Duration;
		if (object.duration !== undefined && object.duration !== null) {
			message.duration = Duration1.fromPartial(object.duration);
		} else {
			message.duration = undefined;
		}
		if (object.blocks !== undefined && object.blocks !== null) {
			message.blocks = object.blocks as Long;
		} else {
			message.blocks = undefined;
		}
		return message;
	},

	toJSON(message: Duration): unknown {
		const obj: any = {};
		message.duration !== undefined &&
			(obj.duration = message.duration
				? Duration1.toJSON(message.duration)
				: undefined);
		message.blocks !== undefined &&
			(obj.blocks = (message.blocks || undefined).toString());
		return obj;
	},
};

const baseExpiresAt: object = {};

export const ExpiresAt = {
	encode(message: ExpiresAt, writer: Writer = Writer.create()): Writer {
		if (message.time !== undefined) {
			Timestamp.encode(
				toTimestamp(message.time),
				writer.uint32(10).fork()
			).ldelim();
		}
		if (message.height !== undefined) {
			writer.uint32(16).int64(message.height);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): ExpiresAt {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(baseExpiresAt) as ExpiresAt;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.time = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.height = reader.int64() as Long;
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): ExpiresAt {
		const message = globalThis.Object.create(baseExpiresAt) as ExpiresAt;
		if (object.time !== undefined && object.time !== null) {
			message.time = fromJsonTimestamp(object.time);
		} else {
			message.time = undefined;
		}
		if (object.height !== undefined && object.height !== null) {
			message.height = Long.fromString(object.height);
		} else {
			message.height = undefined;
		}
		return message;
	},

	fromPartial(object: DeepPartial<ExpiresAt>): ExpiresAt {
		const message = { ...baseExpiresAt } as ExpiresAt;
		if (object.time !== undefined && object.time !== null) {
			message.time = object.time;
		} else {
			message.time = undefined;
		}
		if (object.height !== undefined && object.height !== null) {
			message.height = object.height as Long;
		} else {
			message.height = undefined;
		}
		return message;
	},

	toJSON(message: ExpiresAt): unknown {
		const obj: any = {};
		message.time !== undefined &&
			(obj.time =
				message.time !== undefined ? message.time.toISOString() : null);
		message.height !== undefined &&
			(obj.height = (message.height || undefined).toString());
		return obj;
	},
};

const baseFeeAllowanceGrant: object = { granter: '', grantee: '' };

export const FeeAllowanceGrant = {
	encode(
		message: FeeAllowanceGrant,
		writer: Writer = Writer.create()
	): Writer {
		if (message.granter !== '') {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== '') {
			writer.uint32(18).string(message.grantee);
		}
		if (message.allowance !== undefined) {
			Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): FeeAllowanceGrant {
		const reader = input instanceof Uint8Array ? new Reader(input) : input;
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = globalThis.Object.create(
			baseFeeAllowanceGrant
		) as FeeAllowanceGrant;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.granter = reader.string();
					break;
				case 2:
					message.grantee = reader.string();
					break;
				case 3:
					message.allowance = Any.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): FeeAllowanceGrant {
		const message = globalThis.Object.create(
			baseFeeAllowanceGrant
		) as FeeAllowanceGrant;
		if (object.granter !== undefined && object.granter !== null) {
			message.granter = String(object.granter);
		} else {
			message.granter = '';
		}
		if (object.grantee !== undefined && object.grantee !== null) {
			message.grantee = String(object.grantee);
		} else {
			message.grantee = '';
		}
		if (object.allowance !== undefined && object.allowance !== null) {
			message.allowance = Any.fromJSON(object.allowance);
		} else {
			message.allowance = undefined;
		}
		return message;
	},

	fromPartial(object: DeepPartial<FeeAllowanceGrant>): FeeAllowanceGrant {
		const message = { ...baseFeeAllowanceGrant } as FeeAllowanceGrant;
		if (object.granter !== undefined && object.granter !== null) {
			message.granter = object.granter;
		} else {
			message.granter = '';
		}
		if (object.grantee !== undefined && object.grantee !== null) {
			message.grantee = object.grantee;
		} else {
			message.grantee = '';
		}
		if (object.allowance !== undefined && object.allowance !== null) {
			message.allowance = Any.fromPartial(object.allowance);
		} else {
			message.allowance = undefined;
		}
		return message;
	},

	toJSON(message: FeeAllowanceGrant): unknown {
		const obj: any = {};
		message.granter !== undefined && (obj.granter = message.granter);
		message.grantee !== undefined && (obj.grantee = message.grantee);
		message.allowance !== undefined &&
			(obj.allowance = message.allowance
				? Any.toJSON(message.allowance)
				: undefined);
		return obj;
	},
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
	if (typeof globalThis !== 'undefined') return globalThis;
	if (typeof self !== 'undefined') return self;
	if (typeof window !== 'undefined') return window;
	if (typeof global !== 'undefined') return global;
	throw 'Unable to locate global object';
})();

type Builtin =
	| Date
	| Function
	| Uint8Array
	| string
	| number
	| undefined
	| Long;
export type DeepPartial<T> = T extends Builtin
	? T
	: T extends Array<infer U>
	? Array<DeepPartial<U>>
	: T extends ReadonlyArray<infer U>
	? ReadonlyArray<DeepPartial<U>>
	: T extends {}
	? { [K in keyof T]?: DeepPartial<T[K]> }
	: Partial<T>;

function toTimestamp(date: Date): Timestamp {
	const seconds = numberToLong(date.getTime() / 1_000);
	const nanos = (date.getTime() % 1_000) * 1_000_000;
	return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
	let millis = t.seconds.toNumber() * 1_000;
	millis += t.nanos / 1_000_000;
	return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
	if (o instanceof Date) {
		return o;
	} else if (typeof o === 'string') {
		return new Date(o);
	} else {
		return fromTimestamp(Timestamp.fromJSON(o));
	}
}

function numberToLong(number: number) {
	return Long.fromNumber(number);
}

if (util.Long !== Long) {
	util.Long = Long as any;
	configure();
}
