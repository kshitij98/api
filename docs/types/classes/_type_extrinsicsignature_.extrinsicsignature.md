

*__name__*: ExtrinsicSignature

*__description__*: A container for the [Signature](_type_signature_.signature.md) associated with a specific [Extrinsic](_type_extrinsic_.extrinsic.md)

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ ExtrinsicSignature**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new ExtrinsicSignature**(value?: *[Uint8Array](_codec_u8a_.u8a.md#uint8array)*): [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/ExtrinsicSignature.ts:29](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/type/ExtrinsicSignature.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [Uint8Array](_codec_u8a_.u8a.md#uint8array) |

**Returns:** [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

___

# Properties

<a id="___tostringtag"></a>

##  __@toStringTag

**● __@toStringTag**: *`string`*

*Inherited from Map.[Symbol.toStringTag]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130*

___
<a id="size"></a>

##  size

**● size**: *`number`*

*Inherited from Map.size*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:28*

___

# Accessors

<a id="type"></a>

##  Type

getType(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:160](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/codec/Struct.ts#L160)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Overrides [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [type/ExtrinsicSignature.ts:66](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/type/ExtrinsicSignature.ts#L66)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="era"></a>

##  era

getera(): [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)

*Defined in [type/ExtrinsicSignature.ts:82](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/type/ExtrinsicSignature.ts#L82)*

*__description__*: The [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md) (mortal or immortal) this signature applies to

**Returns:** [ExtrinsicEra](_type_extrinsicera_.extrinsicera.md)

___
<a id="isempty"></a>

##  isEmpty

getisEmpty(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/codec/Struct.ts#L145)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="issigned"></a>

##  isSigned

getisSigned(): `boolean`

*Defined in [type/ExtrinsicSignature.ts:75](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/type/ExtrinsicSignature.ts#L75)*

*__description__*: `true` if the signature is valid

**Returns:** `boolean`

___
<a id="nonce"></a>

##  nonce

getnonce(): [Nonce](_type_nonce_.nonce.md)

*Defined in [type/ExtrinsicSignature.ts:89](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/type/ExtrinsicSignature.ts#L89)*

*__description__*: The [Nonce](_type_nonce_.nonce.md) for the signature

**Returns:** [Nonce](_type_nonce_.nonce.md)

___
<a id="signature"></a>

##  signature

getsignature(): [Signature](_type_signature_.signature.md)

*Defined in [type/ExtrinsicSignature.ts:96](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/type/ExtrinsicSignature.ts#L96)*

*__description__*: The actuall [Signature](_type_signature_.signature.md) hash

**Returns:** [Signature](_type_signature_.signature.md)

___
<a id="signer"></a>

##  signer

getsigner(): [Address](_type_address_.address.md)

*Defined in [type/ExtrinsicSignature.ts:103](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/type/ExtrinsicSignature.ts#L103)*

*__description__*: The [Address](_type_address_.address.md) that signed

**Returns:** [Address](_type_address_.address.md)

___
<a id="version"></a>

##  version

getversion(): `number`

*Defined in [type/ExtrinsicSignature.ts:110](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/type/ExtrinsicSignature.ts#L110)*

*__description__*: The encoded version for the signature

**Returns:** `number`

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`keyof S`, [Codec](../interfaces/_types_.codec.md)]>

*Inherited from Map.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`keyof S`, [Codec](../interfaces/_types_.codec.md)]>

___
<a id="addsignature"></a>

##  addSignature

▸ **addSignature**(_signer: *[Address](_type_address_.address.md) \| `Uint8Array`*, _signature: *`Uint8Array`*, _nonce: *[AnyNumber](../modules/_types_.md#anynumber)*, _era?: *`Uint8Array`*): [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

*Defined in [type/ExtrinsicSignature.ts:131](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/type/ExtrinsicSignature.ts#L131)*

*__description__*: Adds a raw signature

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| _signer | [Address](_type_address_.address.md) \| `Uint8Array` | - |
| _signature | `Uint8Array` | - |
| _nonce | [AnyNumber](../modules/_types_.md#anynumber) | - |
| `Default value` _era | `Uint8Array` |  IMMORTAL_ERA |

**Returns:** [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

___
<a id="clear"></a>

##  clear

▸ **clear**(): `void`

*Inherited from Map.clear*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:22*

**Returns:** `void`

___
<a id="delete"></a>

##  delete

▸ **delete**(key: *`keyof S`*): `boolean`

*Inherited from Map.delete*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:** `boolean`

___
<a id="entries"></a>

##  entries

▸ **entries**(): `IterableIterator`<[`keyof S`, [Codec](../interfaces/_types_.codec.md)]>

*Inherited from Map.entries*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`keyof S`, [Codec](../interfaces/_types_.codec.md)]>

___
<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:176](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/codec/Struct.ts#L176)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="foreach"></a>

##  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Map.forEach*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:24*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| `Optional` thisArg | `any` |

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) \| `undefined`

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:184](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/codec/Struct.ts#L184)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** [Codec](../interfaces/_types_.codec.md) \| `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_types_.codec.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/codec/Struct.ts#L191)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="has"></a>

##  has

▸ **has**(key: *`keyof S`*): `boolean`

*Inherited from Map.has*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |

**Returns:** `boolean`

___
<a id="keys"></a>

##  keys

▸ **keys**(): `IterableIterator`<`keyof S`>

*Inherited from Map.keys*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123*

Returns an iterable of keys in the map

**Returns:** `IterableIterator`<`keyof S`>

___
<a id="set"></a>

##  set

▸ **set**(key: *`keyof S`*, value: *[Codec](../interfaces/_types_.codec.md)*): `this`

*Inherited from Map.set*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `keyof S` |
| value | [Codec](../interfaces/_types_.codec.md) |

**Returns:** `this`

___
<a id="sign"></a>

##  sign

▸ **sign**(method: *[Method](_primitive_method_.method.md)*, account: *`KeyringPair`*, __namedParameters: *`object`*): [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

*Defined in [type/ExtrinsicSignature.ts:143](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/type/ExtrinsicSignature.ts#L143)*

*__description__*: Generate a payload and pplies the signature from a keypair

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [Method](_primitive_method_.method.md) |
| account | `KeyringPair` |
| __namedParameters | `object` |

**Returns:** [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/codec/Struct.ts#L198)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:205](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/codec/Struct.ts#L205)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:212](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/codec/Struct.ts#L212)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:226](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/codec/Struct.ts#L226)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Overrides [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [type/ExtrinsicSignature.ts:160](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/type/ExtrinsicSignature.ts#L160)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `IterableIterator`<[Codec](../interfaces/_types_.codec.md)>

*Inherited from Map.values*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="decodeextrinsicsignature"></a>

## `<Static>` decodeExtrinsicSignature

▸ **decodeExtrinsicSignature**(value?: *[Uint8Array](_codec_u8a_.u8a.md#uint8array)*): `object` \| `Uint8Array`

*Defined in [type/ExtrinsicSignature.ts:46](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/type/ExtrinsicSignature.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | [Uint8Array](_codec_u8a_.u8a.md#uint8array) |

**Returns:** `object` \| `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:125](https://github.com/polkadot-js/api/blob/447ab2f/packages/types/src/codec/Struct.ts#L125)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___
