// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isNull, isU8a, isUndefined, u8aToHex } from '@polkadot/util';

import Base from './Base';
import { Codec, Constructor } from '../types';
import Null from '../primitive/Null';

/**
 * @name Option
 * @description
 * An Option is an optional field. Basically the first byte indicates that there is
 * is value to follow. If the byte is `1` there is an actual value. So the Option
 * implements that - decodes, checks for optionality and wraps the required structure
 * with a value if/as required/found.
 */
export default class Option<T extends Codec> extends Base<T> implements Codec {
  constructor (Type: Constructor, value?: any) {
    super(
      Option.decodeOption(Type, value)
    );
  }

  static decodeOption (Type: Constructor, value?: any): Codec {
    if (isNull(value) || isUndefined(value) || value instanceof Null) {
      return new Null();
    } else if (value instanceof Option) {
      return Option.decodeOption(Type, value.value);
    } else if (value instanceof Type || (Type.Fallback && value instanceof Type.Fallback)) {
      // don't re-create, use as it (which also caters for derived types)
      return value;
    } else if (isU8a(value)) {
      // the isU8a check happens last in the if-tree - since the wrapped value
      // may be an instance of it, so Type and Option checks go in first
      return value[0] === 0
        ? new Null()
        : new Type(value.subarray(1));
    }

    return new Type(value);
  }

  static with<O extends Codec> (Type: Constructor): Constructor<Option<O>> {
    return class extends Option<O> {
      constructor (value?: any) {
        super(Type, value);
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    // boolean byte (has value, doesn't have) along with wrapped length
    return 1 + this.raw.encodedLength;
  }

  /**
   * @description Checks if the Option has no value
   */
  get isEmpty (): boolean {
    return this.isNone;
  }

  /**
   * @description Checks if the Option has no value
   */
  get isNone (): boolean {
    return this.raw instanceof Null;
  }

  /**
   * @description Checks if the Option has a value
   */
  get isSome (): boolean {
    return !this.isNone;
  }

  /**
   * @description The actual value for the Option
   */
  get value (): Codec {
    return this.raw;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean {
    if (other instanceof Option) {
      return (this.isSome === other.isSome) && this.value.eq(other.value);
    }

    return this.value.eq(other);
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    return this.raw.toJSON();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    return `Option<${this.raw.toRawType()}>`;
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    return this.raw.toString();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    if (isBare) {
      return this.raw.toU8a(true);
    }

    const u8a = new Uint8Array(this.encodedLength);

    if (this.isSome) {
      u8a.set([1]);
      u8a.set(this.raw.toU8a(), 1);
    }

    return u8a;
  }

  /**
   * @description Returns the value that the Option represents (if available), throws if null
   */
  unwrap (): T {
    if (this.isNone) {
      throw new Error('Option: unwrapping a None value');
    }

    return this.raw;
  }

  /**
   * @description Returns the value that the Option represents (if available) or defaultValue if none
   * @param defaultValue The value to return if the option isNone
   */
  unwrapOr <O> (defaultValue: O): T | O {
    return this.isSome
      ? this.unwrap()
      : defaultValue;
  }
}
