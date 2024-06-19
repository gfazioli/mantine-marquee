import {
  Box,
  BoxProps,
  Factory,
  MantineColor,
  MantineSize,
  StylesApiProps,
  createVarsResolver,
  factory,
  getSize,
  getThemeColor,
  useProps,
  useStyles,
} from '@mantine/core';
import React from 'react';

import classes from './Marquee.module.css';

export type MarqueeStylesNames = 'root';

export type MarqueeCssVariables = {
  root:
    | '--marquee-animation-direction'
    | '--marquee-direction'
    | '--marquee-duration'
    | '--marquee-gap'
    | '--marquee-fade-edge-size'
    | '--marquee-fade-edge-color';
};

export interface MarqueeBaseProps {
  reverse?: boolean;
  repeat?: number;
  vertical?: boolean;
  pauseOnHover?: boolean;
  duration?: number;
  fadeEdges?: boolean;
  fadeEdgesSize?: MantineSize | `compact-${MantineSize}` | (string & {});
  fadeEdgesColor?: MantineColor;
  gap?: MantineSize | `compact-${MantineSize}` | (string & {});

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

export const defaultProps: Partial<MarqueeProps> = {};

const varsResolver = createVarsResolver<MarqueeFactory>(
  (
    theme,
    { reverse, repeat, vertical, pauseOnHover, duration, fadeEdgesColor, fadeEdgesSize, gap }
  ) => {
    return {
      root: {
        '--marquee-animation-direction': reverse ? 'reverse' : 'normal',
        '--marquee-direction': vertical ? 'column' : 'row',
        '--marquee-duration': `${duration || 20}s`,
        '--marquee-gap': getSize(gap, 'marquee-gap'),
        '--marquee-fade-edge-size': getSize(fadeEdgesSize, 'marquee-fade-edge-size'),
        '--marquee-fade-edge-color': fadeEdgesColor
          ? getThemeColor(fadeEdgesColor, theme)
          : undefined,
      },
    };
  }
);

export const Marquee = factory<MarqueeFactory>((_props, ref) => {
  const props = useProps('Marquee', defaultProps, _props);

  const [over, setOver] = React.useState(false);

  const {
    reverse = false,
    repeat = 2,
    vertical = false,
    pauseOnHover,
    duration = 20,
    fadeEdges = false,
    fadeEdgesSize = 'xs',
    gap = 'xl',
    fadeEdgesColor = 'white',

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

  return (
    <Box {...getStyles('root')} {...others}>
      <Box
        ref={ref}
        className={classes.marqueeContainer}
        onMouseEnter={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`${classes.marqueeContent} ${
                vertical ? classes.marqueeContentVertical : ''
              }`}
            >
              {children}
            </div>
          ))}
      </Box>
      {fadeEdges && (
        <div className={vertical ? classes.marqueeFadeEdgeBottom : classes.marqueeFadeEdgeRight} />
      )}
      {fadeEdges && (
        <div className={vertical ? classes.marqueeFadeEdgeTop : classes.marqueeFadeEdgeLeft} />
      )}
    </Box>
  );
});

Marquee.classes = classes;
Marquee.displayName = 'Marquee';
