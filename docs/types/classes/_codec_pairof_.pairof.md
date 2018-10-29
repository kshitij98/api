

# Type parameters
#### T :  [Base](_codec_base_.base.md)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Tuple](_codec_tuple_.tuple.md)<`object`>

**↳ PairOf**

# Implements

* `Codec`

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new PairOf**(Types: *`object`*, value?: * `V` &#124; `Array`<`any`>*, jsonMap?: *`Map`<`keyof object`, `string`>*): [PairOf](_codec_pairof_.pairof.md)

*Inherited from [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [codec/Struct.ts:27](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/Struct.ts#L27)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| Types | `object` | - |
| `Default value` value |  `V` &#124; `Array`<`any`>|  {} as V |
| `Default value` jsonMap | `Map`<`keyof object`, `string`> |  new Map() |

**Returns:** [PairOf](_codec_pairof_.pairof.md)

___

# Properties

<a id="___tostringtag"></a>

##  __@toStringTag

**● __@toStringTag**: *"Map"*

*Inherited from Map.[Symbol.toStringTag]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130*

___
<a id="raw"></a>

##  raw

**● raw**: *`Map`<`keyof object`, [Base](_codec_base_.base.md)>*

*Inherited from [Struct](_codec_struct_.struct.md).[raw](_codec_struct_.struct.md#raw)*

*Defined in [codec/Struct.ts:25](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/Struct.ts#L25)*

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

*Defined in [codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/Struct.ts#L123)*

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

getencodedLength(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:127](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/Struct.ts#L127)*

**Returns:** `number`

___
<a id="first"></a>

##  first

getfirst(): `T`

*Defined in [codec/PairOf.ts:29](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/PairOf.ts#L29)*

**Returns:** `T`

___
<a id="second"></a>

##  second

getsecond(): `T`

*Defined in [codec/PairOf.ts:33](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/PairOf.ts#L33)*

**Returns:** `T`

___

# Methods

<a id="___iterator"></a>

##  __@iterator

▸ **__@iterator**(): `IterableIterator`<[`keyof object`, [Base](_codec_base_.base.md)]>

*Inherited from Map.[Symbol.iterator]*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:113*

Returns an iterable of entries in the map.

**Returns:** `IterableIterator`<[`keyof object`, [Base](_codec_base_.base.md)]>

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

▸ **delete**(key: *`keyof object`*): `boolean`

*Inherited from Map.delete*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:23*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `keyof object` |

**Returns:** `boolean`

___
<a id="entries"></a>

##  entries

▸ **entries**(): `IterableIterator`<[`keyof object`, [Base](_codec_base_.base.md)]>

*Inherited from Map.entries*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:118*

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** `IterableIterator`<[`keyof object`, [Base](_codec_base_.base.md)]>

___
<a id="foreach"></a>

##  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Map.forEach*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:24*

**Parameters:**

| Param | Type |
| ------ | ------ |
| callbackfn | `function` |
| `Optional` thisArg | `any` |

**Returns:** `void`

___
<a id="get"></a>

##  get

▸ **get**(key: *`keyof object`*):  [Base](_codec_base_.base.md) &#124; `undefined`

*Inherited from Map.get*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:25*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `keyof object` |

**Returns:**  [Base](_codec_base_.base.md) &#124; `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Base](_codec_base_.base.md)

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:133](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/Struct.ts#L133)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Base](_codec_base_.base.md)

___
<a id="has"></a>

##  has

▸ **has**(key: *`keyof object`*): `boolean`

*Inherited from Map.has*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:26*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `keyof object` |

**Returns:** `boolean`

___
<a id="keys"></a>

##  keys

▸ **keys**(): `IterableIterator`<`keyof object`>

*Inherited from Map.keys*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:123*

Returns an iterable of keys in the map

**Returns:** `IterableIterator`<`keyof object`>

___
<a id="set"></a>

##  set

▸ **set**(key: *`keyof object`*, value: *[Base](_codec_base_.base.md)*): `this`

*Inherited from Map.set*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:27*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `keyof object` |
| value | [Base](_codec_base_.base.md) |

**Returns:** `this`

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Base](_codec_base_.base.md)>

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:137](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/Struct.ts#L137)*

**Returns:** `Array`<[Base](_codec_base_.base.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:141](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/Struct.ts#L141)*

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toJSON](_codec_tuple_.tuple.md#tojson)*

*Overrides [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Tuple.ts:28](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/Tuple.ts#L28)*

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:156](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/Struct.ts#L156)*

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: * `undefined` &#124; `false` &#124; `true`*): `Uint8Array`

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:160](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/Struct.ts#L160)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` isBare |  `undefined` &#124; `false` &#124; `true`|

**Returns:** `Uint8Array`

___
<a id="values"></a>

##  values

▸ **values**(): `IterableIterator`<[Base](_codec_base_.base.md)>

*Inherited from Map.values*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.iterable.d.ts:128*

Returns an iterable of values in the map

**Returns:** `IterableIterator`<[Base](_codec_base_.base.md)>

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Type: *`S`*): `Constructor`<[Tuple](_codec_tuple_.tuple.md)<`S`>>

*Overrides [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#with)*

*Defined in [codec/PairOf.ts:14](https://github.com/polkadot-js/api/blob/822f15e/packages/types/src/codec/PairOf.ts#L14)*

**Type parameters:**

#### S :  `ConstructorDef`
**Parameters:**

| Param | Type |
| ------ | ------ |
| Type | `S` |

**Returns:** `Constructor`<[Tuple](_codec_tuple_.tuple.md)<`S`>>

___
