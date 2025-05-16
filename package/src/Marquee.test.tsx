import React from 'react';
import { render } from '@mantine-tests/core';
import { Marquee } from './Marquee';

describe('Marquee', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Marquee>
        <div>Test</div>
      </Marquee>
    );
    expect(container).toBeTruthy();
  });
});
