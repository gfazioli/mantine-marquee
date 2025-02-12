import React, { useMemo } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  Factory,
  factory,
  getSize,
  getThemeColor,
  MantineColor,
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
    | '--marquee-fade-edge-size'
    | '--marquee-fade-edge-color';
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
   * Fade edges color
   */
  fadeEdgesColor?: MantineColor;

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
    [repeat, vertical, children]
  );

  const renderFadeEdges = useMemo(
    () =>
      fadeEdges ? (
        <>
          {vertical ? (
            <>
              <div className={classes.marqueeFadeEdgeBottom} />
              <div className={classes.marqueeFadeEdgeTop} />
            </>
          ) : (
            <>
              <div className={classes.marqueeFadeEdgeRight} />
              <div className={classes.marqueeFadeEdgeLeft} />
            </>
          )}
        </>
      ) : null,
    [vertical, fadeEdges]
  );

  return (
    <Box {...getStyles('root')} {...others}>
      <Box
        ref={ref}
        className={classes.marqueeContainer}
        onMouseEnter={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
      >
        {renderContent}
      </Box>
      {renderFadeEdges}
    </Box>
  );
});

Marquee.classes = classes;
Marquee.displayName = 'Marquee';
