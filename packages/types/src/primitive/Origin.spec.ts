// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Origin from './Origin';

describe('Origin', () => {
  it('does not allow construction', () => {
    expect(
      () => new Origin()
    ).toThrow(/placeholder/);
  });
});
