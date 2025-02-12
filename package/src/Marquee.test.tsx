import React from 'react';
import { render, tests } from '@mantine-tests/core';
import { Marquee, MarqueeProps, MarqueeStylesNames } from './Marquee';

const defaultProps: MarqueeProps = {};

describe('@mantine/core/Marquee', () => {
  tests.itSupportsSystemProps<MarqueeProps, MarqueeStylesNames>({
    component: Marquee,
    props: defaultProps,
    styleProps: true,
    children: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Marquee',
    stylesApiSelectors: ['root'],
  });

  it('supports perspective prop', () => {
    const { container } = render(<Marquee gap="500px" />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveStyle({ perspective: '500px' });
  });
});
