import React, { useMemo } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  Factory,
  factory,
  getSize,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './Marquee.module.css';

export type MarqueeStylesNames = 'root';

export type MarqueeCssVariables = {
  root:
    | '--marquee-animation-direction'
    | '--marquee-direction'
    | '--marquee-duration'
    | '--marquee-gap'
    | '--marquee-fade-edge-size';
};

export interface MarqueeBaseProps {
  /**
   * Reverse animation direction
   */
  reverse?: boolean;

  /**
   * Number of times to clone the children. Minimum value is 2.
   */
  repeat?: number;

  /**
   * Vertical layout
   */
  vertical?: boolean;

  /**
   * Pause animation on hover
   */
  pauseOnHover?: boolean;

  /**
   * Animation speed/duration in seconds. Minimum value is 0.1.
   */
  duration?: number;

  /**
   * Add fade edges
   */
  fadeEdges?: boolean;

  /**
   * Fade edges size
   */
  fadeEdgesSize?: MantineSize | (string & {});

  /**
   * Gap between marquee items
   */
  gap?: MantineSize | (string & {});

  /** Content */
  children?: React.ReactNode;
}

export interface MarqueeProps extends BoxProps, MarqueeBaseProps, StylesApiProps<MarqueeFactory> {}

export type MarqueeFactory = Factory<{
  props: MarqueeProps;
  ref: HTMLDivElement;
  stylesNames: MarqueeStylesNames;
  vars: MarqueeCssVariables;
}>;

export const defaultProps: Partial<MarqueeProps> = {
  reverse: false,
  repeat: 2,
  vertical: false,
  pauseOnHover: false,
  duration: 20,
  fadeEdges: false,
  fadeEdgesSize: 'xs',
  gap: 'xl',
};

const varsResolver = createVarsResolver<MarqueeFactory>(
  (_, { reverse, vertical, duration, fadeEdgesSize, gap }) => {
    return {
      root: {
        '--marquee-animation-direction': reverse ? 'reverse' : 'normal',
        '--marquee-direction': vertical ? 'column' : 'row',
        '--marquee-duration': `${duration || 20}s`,
        '--marquee-gap': getSize(gap, 'marquee-gap'),
        '--marquee-fade-edge-size': getSize(fadeEdgesSize, 'marquee-fade-edge-size'),
      },
    };
  }
);

export const Marquee = factory<MarqueeFactory>((_props, ref) => {
  const props = useProps('Marquee', defaultProps, _props);

  const [over, setOver] = React.useState(false);

  const {
    reverse,
    repeat,
    vertical,
    pauseOnHover,
    duration,
    fadeEdges,
    fadeEdgesSize,
    gap,

    classNames,
    style,
    styles,
    unstyled,
    vars,
    children,
    className,

    ...others
  } = props;

  const getStyles = useStyles<MarqueeFactory>({
    name: 'Marquee',
    props,
    classes,
    className,
    style: { ...style, '--marquee-play-state': over && pauseOnHover ? 'paused' : 'running' },
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const renderContent = useMemo(
    () =>
      Array.from({ length: repeat < 2 ? 2 : repeat }).map((_, i) => (
        <div
          key={`marquee-item-${repeat}-${gap}-${duration}-${i}`}
          className={`${classes.marqueeContent} ${vertical ? classes.marqueeContentVertical : ''}`}
        >
          {children}
        </div>
      )),
    [repeat, vertical, children, gap, duration]
  );

  return (
    <Box
      {...getStyles('root')}
      {...others}
      data-fade-edges={fadeEdges ? 'linear' : undefined}
      data-vertical={vertical || undefined}
    >
      <Box
        ref={ref}
        className={classes.marqueeContainer}
        onMouseEnter={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
      >
        {renderContent}
      </Box>
    </Box>
  );
});

Marquee.classes = classes;
Marquee.displayName = 'Marquee';
