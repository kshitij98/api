

*__name__*: MisbehaviorKind

*__description__*: An [EnumType](_codec_enumtype_.enumtype.md) containing a Bft misbehaviour

# Hierarchy

↳  [EnumType](_codec_enumtype_.enumtype.md)<[BftProposeOutOfTurn](_type_misbehaviorreport_.bftproposeoutofturn.md) \| [BftDoublePropose](_type_misbehaviorreport_.bftdoublepropose.md) \| [BftDoublePrepare](_type_misbehaviorreport_.bftdoubleprepare.md) \| [BftDoubleCommit](_type_misbehaviorreport_.bftdoublecommit.md)>

**↳ MisbehaviorKind**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new MisbehaviorKind**(value?: *`BftAtReportValue` \| `Uint8Array`*, index?: *`undefined` \| `number`*): [MisbehaviorKind](_type_misbehaviorreport_.misbehaviorkind.md)

*Overrides [EnumType](_codec_enumtype_.enumtype.md).[constructor](_codec_enumtype_.enumtype.md#constructor)*

*Defined in [type/MisbehaviorReport.ts:123](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/type/MisbehaviorReport.ts#L123)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `BftAtReportValue` \| `Uint8Array` |
| `Optional` index | `undefined` \| `number` |

**Returns:** [MisbehaviorKind](_type_misbehaviorreport_.misbehaviorkind.md)

___

# Accessors

<a id="asbftdoublecommit"></a>

##  asBftDoubleCommit

**get asBftDoubleCommit**(): [BftDoubleCommit](_type_misbehaviorreport_.bftdoublecommit.md)

*Defined in [type/MisbehaviorReport.ts:136](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/type/MisbehaviorReport.ts#L136)*

*__description__*: Returns the item as a [BftDoubleCommit](_type_misbehaviorreport_.bftdoublecommit.md)

**Returns:** [BftDoubleCommit](_type_misbehaviorreport_.bftdoublecommit.md)

___
<a id="asbftdoubleprepare"></a>

##  asBftDoublePrepare

**get asBftDoublePrepare**(): [BftDoublePrepare](_type_misbehaviorreport_.bftdoubleprepare.md)

*Defined in [type/MisbehaviorReport.ts:145](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/type/MisbehaviorReport.ts#L145)*

*__description__*: Returns the item as a [BftDoublePrepare](_type_misbehaviorreport_.bftdoubleprepare.md)

**Returns:** [BftDoublePrepare](_type_misbehaviorreport_.bftdoubleprepare.md)

___
<a id="asbftdoublepropose"></a>

##  asBftDoublePropose

**get asBftDoublePropose**(): [BftDoublePropose](_type_misbehaviorreport_.bftdoublepropose.md)

*Defined in [type/MisbehaviorReport.ts:154](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/type/MisbehaviorReport.ts#L154)*

*__description__*: Returns the item as a [BftDoublePropose](_type_misbehaviorreport_.bftdoublepropose.md)

**Returns:** [BftDoublePropose](_type_misbehaviorreport_.bftdoublepropose.md)

___
<a id="asbftproposeoutofturn"></a>

##  asBftProposeOutOfTurn

**get asBftProposeOutOfTurn**(): [BftProposeOutOfTurn](_type_misbehaviorreport_.bftproposeoutofturn.md)

*Defined in [type/MisbehaviorReport.ts:163](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/type/MisbehaviorReport.ts#L163)*

*__description__*: Returns the item as a [BftProposeOutOfTurn](_type_misbehaviorreport_.bftproposeoutofturn.md)

**Returns:** [BftProposeOutOfTurn](_type_misbehaviorreport_.bftproposeoutofturn.md)

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[encodedLength](_codec_enumtype_.enumtype.md#encodedlength)*

*Defined in [codec/EnumType.ts:130](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L130)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

**get index**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[index](_codec_enumtype_.enumtype.md#index)*

*Defined in [codec/EnumType.ts:137](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L137)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isbftdoublecommit"></a>

##  isBftDoubleCommit

**get isBftDoubleCommit**(): `boolean`

*Defined in [type/MisbehaviorReport.ts:172](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/type/MisbehaviorReport.ts#L172)*

*__description__*: true when this is a BftDoubleCommit

**Returns:** `boolean`

___
<a id="isbftdoubleprepare"></a>

##  isBftDoublePrepare

**get isBftDoublePrepare**(): `boolean`

*Defined in [type/MisbehaviorReport.ts:179](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/type/MisbehaviorReport.ts#L179)*

*__description__*: true when this is a BftDoublePrepare

**Returns:** `boolean`

___
<a id="isbftdoublepropose"></a>

##  isBftDoublePropose

**get isBftDoublePropose**(): `boolean`

*Defined in [type/MisbehaviorReport.ts:186](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/type/MisbehaviorReport.ts#L186)*

*__description__*: true when this is a BftDoublePropose

**Returns:** `boolean`

___
<a id="isbftproposeoutofturn"></a>

##  isBftProposeOutOfTurn

**get isBftProposeOutOfTurn**(): `boolean`

*Defined in [type/MisbehaviorReport.ts:193](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/type/MisbehaviorReport.ts#L193)*

*__description__*: true when this is a BftProposeOutOfTurn

**Returns:** `boolean`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isEmpty](_codec_enumtype_.enumtype.md#isempty)*

*Defined in [codec/EnumType.ts:144](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L144)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="isnone"></a>

##  isNone

**get isNone**(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNone](_codec_enumtype_.enumtype.md#isnone)*

*Defined in [codec/EnumType.ts:151](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L151)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

**get isNull**(): `boolean`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[isNull](_codec_enumtype_.enumtype.md#isnull)*

*Defined in [codec/EnumType.ts:158](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L158)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

**get type**(): `string`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[type](_codec_enumtype_.enumtype.md#type)*

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L165)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

**get value**(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[value](_codec_enumtype_.enumtype.md#value)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L172)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[eq](_codec_enumtype_.enumtype.md#eq)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L179)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toHex](../interfaces/_types_.codec.md#tohex)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toHex](_codec_enumtype_.enumtype.md#tohex)*

*Defined in [codec/EnumType.ts:192](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L192)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toJSON](_codec_enumtype_.enumtype.md#tojson)*

*Defined in [codec/EnumType.ts:199](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L199)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toNumber](_codec_enumtype_.enumtype.md#tonumber)*

*Defined in [codec/EnumType.ts:208](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L208)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toString](_codec_enumtype_.enumtype.md#tostring)*

*Defined in [codec/EnumType.ts:215](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L215)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[toU8a](_codec_enumtype_.enumtype.md#tou8a)*

*Defined in [codec/EnumType.ts:225](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L225)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): `EnumConstructor`<[EnumType](_codec_enumtype_.enumtype.md)<`S`>>

*Inherited from [EnumType](_codec_enumtype_.enumtype.md).[with](_codec_enumtype_.enumtype.md#with)*

*Defined in [codec/EnumType.ts:117](https://github.com/polkadot-js/api/blob/7b04ea0/packages/types/src/codec/EnumType.ts#L117)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** `EnumConstructor`<[EnumType](_codec_enumtype_.enumtype.md)<`S`>>

___
