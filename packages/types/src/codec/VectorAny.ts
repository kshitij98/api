// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '../types';
import AbstractArray from './AbstractArray';

/**
 * @name VectorAny
 * @description
 * This manages codec arrays, assuming that the inputs are already of type Codec. Unlike
 * a vector, this can be used to manage array-like structures with variable arguments of
 * any types
 */
export default class VectorAny<T extends Codec> extends AbstractArray<T> {
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    // FIXME This is basically an any type, cannot instantiate via createType
    return 'Vec<Codec>';
  }
}
