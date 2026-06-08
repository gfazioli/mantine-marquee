import {
  Box,
  BoxProps,
  createVarsResolver,
  Factory,
  factory,
  getSize,
  MantineBreakpoint,
  MantineSize,
  StylesApiProps,
  useMatches,
  useProps,
  useStyles,
} from '@mantine/core';
import React, { useMemo } from 'react';
import classes from './Marquee.module.css';

export type MarqueeVertical = boolean | Partial<Record<MantineBreakpoint, boolean>>;

export type MarqueeGap =
  | MantineSize
  | (string & {})
  | Partial<Record<MantineBreakpoint, MantineSize | (string & {})>>;

export type MarqueeFadeEdges = boolean | 'linear' | 'ellipse' | 'rect';

export type MarqueeFadeEdgesSize =
  | MantineSize
  | (string & {})
  | [MantineSize | (string & {}), MantineSize | (string & {})];

/**
 * Display variant. `default` is the classic 2D scroll (existing behavior);
 * `isometric` lays the scroll on a plane tilted in 3D space; `circle`
 * distributes the children around a rotating 3D ellipse ring.
 */
export type MarqueeVariant = 'default' | 'isometric' | 'circle';

/** Scroll orientation — alias of `vertical`, matching `@mantine/core` Marquee. */
export type MarqueeOrientation = 'horizontal' | 'vertical';

/**
 * Ring radius for the `circle` variant, in pixels. A single number makes a
 * circular ring; a `[rx, ry]` tuple makes an ellipse (`rx` = horizontal radius,
 * `ry` = depth radius).
 */
export type MarqueeRadius = number | [number, number];

function resolveRadius(radius: MarqueeRadius | undefined): { x: number; y: number } {
  if (Array.isArray(radius)) {
    return { x: radius[0], y: radius[1] };
  }
  const r = radius ?? 200;
  return { x: r, y: r };
}

function resolveFadeEdges(
  value: MarqueeFadeEdges | undefined
): 'linear' | 'ellipse' | 'rect' | undefined {
  if (value === true || value === 'linear') {
    return 'linear';
  }
  if (value === 'ellipse') {
    return 'ellipse';
  }
  if (value === 'rect') {
    return 'rect';
  }
  return undefined;
}

function resolveFadeEdgeSize(fadeEdgesSize: MarqueeFadeEdgesSize | undefined) {
  if (fadeEdgesSize === undefined) {
    return { single: undefined, x: undefined, y: undefined };
  }
  if (Array.isArray(fadeEdgesSize)) {
    const [xVal, yVal] = fadeEdgesSize;
    const resolvedX = getSize(xVal, 'marquee-fade-edge-size');
    const resolvedY = getSize(yVal, 'marquee-fade-edge-size');
    return { single: resolvedX, x: resolvedX, y: resolvedY };
  }
  const resolved = getSize(fadeEdgesSize, 'marquee-fade-edge-size');
  return { single: resolved, x: resolved, y: resolved };
}

export type MarqueeStylesNames = 'root' | 'stage' | 'plane' | 'tilt' | 'ring' | 'item';

export type MarqueeCssVariables = {
  root:
    | '--marquee-animation-direction'
    | '--marquee-duration'
    | '--marquee-fade-edge-size'
    | '--marquee-fade-edge-size-x'
    | '--marquee-fade-edge-size-y'
    | '--marquee-tilt'
    | '--marquee-perspective'
    | '--marquee-rotate'
    | '--marquee-skew'
    | '--marquee-fade-angle'
    | '--marquee-radius-x'
    | '--marquee-radius-y';
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
   * Vertical layout. Accepts a boolean or a responsive breakpoint object,
   * e.g. `{ base: true, lg: false }`.
   */
  vertical?: MarqueeVertical;

  /**
   * Scroll orientation. Alias of `vertical` provided for drop-in parity with
   * `@mantine/core` Marquee. When set, it takes precedence over `vertical`.
   */
  orientation?: MarqueeOrientation;

  /**
   * Pause animation on hover
   */
  pauseOnHover?: boolean;

  /**
   * Animation speed/duration in seconds. Minimum value is 0.1.
   * Note: `@mantine/core` Marquee measures `duration` in milliseconds — here it
   * is in seconds (core `duration={100000}` ≈ `duration={100}`).
   */
  duration?: number;

  /**
   * Add fade edges. When `true` or `"linear"`, applies a linear gradient mask
   * on the leading/trailing scroll edges. When `"ellipse"`, applies a radial
   * elliptical mask that fades all around the border. When `"rect"`, applies
   * two intersected linear gradients that fade all 4 edges independently.
   */
  fadeEdges?: MarqueeFadeEdges;

  /**
   * Fade edges size. Accepts a single value applied to all edges,
   * or a `[horizontal, vertical]` tuple for independent axis control.
   * Tuple values always refer to `[x, y]` regardless of scroll direction.
   */
  fadeEdgesSize?: MarqueeFadeEdgesSize;

  /**
   * Alias of `fadeEdgesSize` (the singular spelling used by `@mantine/core`
   * Marquee), provided for drop-in parity. `fadeEdgesSize` wins when both are set.
   */
  fadeEdgeSize?: MarqueeFadeEdgesSize;

  /**
   * Accepted for `@mantine/core` Marquee parity but intentionally unused — fade
   * edges use CSS masks (true alpha, background-independent), so no fade color
   * is needed.
   */
  fadeEdgeColor?: string;

  /**
   * Gap between marquee items. Accepts a single value or a responsive
   * breakpoint object, e.g. `{ base: 'xs', md: 'xl' }`.
   */
  gap?: MarqueeGap;

  /**
   * Plane inclination in degrees — the `rotateX` angle. For `isometric` it tips
   * the scroll plane back; for `circle` it is the viewing angle of the ring
   * (how much it is seen from above). Ignored by the `default` variant.
   * @default 45
   */
  tilt?: number;

  /**
   * CSS `perspective` in pixels applied to the 3D stage for the `isometric` and
   * `circle` variants. Smaller values exaggerate depth. Ignored by `default`.
   * @default 800
   */
  perspective?: number;

  /**
   * Ring radius in pixels for the `circle` variant. A single number makes a
   * circular ring; a `[rx, ry]` tuple makes an ellipse (`rx` = horizontal
   * radius, `ry` = depth radius). Ignored by other variants.
   * @default 200
   */
  radius?: MarqueeRadius;

  /**
   * In-plane rotation in degrees for the `isometric` variant — the `rotateZ`
   * angle applied after `tilt`. Combine with `tilt` for a classic ¾ isometric
   * (2.5D) look. Ignored by other variants.
   * @default 0
   */
  rotate?: number;

  /**
   * Horizontal shear in degrees for the `isometric` variant — the `skewX`
   * angle applied to the plane. Useful to dial in a sheared/isometric look.
   * Ignored by other variants.
   * @default 0
   */
  skew?: number;

  /** Content */
  children?: React.ReactNode;
}

export interface MarqueeProps extends BoxProps, MarqueeBaseProps, StylesApiProps<MarqueeFactory> {}

export type MarqueeFactory = Factory<{
  props: MarqueeProps;
  ref: HTMLDivElement;
  stylesNames: MarqueeStylesNames;
  vars: MarqueeCssVariables;
  variant: MarqueeVariant;
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
  variant: 'default',
  tilt: 45,
  perspective: 800,
  rotate: 0,
  skew: 0,
  radius: 200,
};

const varsResolver = createVarsResolver<MarqueeFactory>(
  (_, { reverse, duration, fadeEdgesSize, tilt, perspective, rotate, skew, radius, variant }) => {
    const { single, x, y } = resolveFadeEdgeSize(fadeEdgesSize);
    const ringRadius = resolveRadius(radius);
    // Linear fade follows the projected scroll axis when the isometric plane is
    // rotated, so it keeps fading the leading/trailing items instead of the
    // (now empty) screen left/right edges. atan2 of the local +X axis projected
    // to screen: rotateZ spins it, rotateX foreshortens its Y; skewX leaves the
    // scroll axis itself unchanged, so it does not enter the angle.
    const tiltRad = ((tilt ?? 45) * Math.PI) / 180;
    const rotateRad = ((rotate ?? 0) * Math.PI) / 180;
    const fadeAngle =
      variant === 'isometric'
        ? (Math.atan2(Math.sin(rotateRad) * Math.cos(tiltRad), Math.cos(rotateRad)) * 180) / Math.PI
        : 0;
    return {
      root: {
        '--marquee-animation-direction': reverse ? 'reverse' : 'normal',
        '--marquee-duration': `${duration || 20}s`,
        '--marquee-fade-edge-size': single,
        '--marquee-fade-edge-size-x': x,
        '--marquee-fade-edge-size-y': y,
        '--marquee-tilt': `${tilt ?? 45}deg`,
        '--marquee-perspective': `${perspective ?? 800}px`,
        '--marquee-rotate': `${rotate ?? 0}deg`,
        '--marquee-skew': `${skew ?? 0}deg`,
        '--marquee-fade-angle': `${fadeAngle}deg`,
        '--marquee-radius-x': `${ringRadius.x}px`,
        '--marquee-radius-y': `${ringRadius.y}px`,
      },
    };
  }
);

export const Marquee = factory<MarqueeFactory>((_props) => {
  // Normalize the `@mantine/core`-parity aliases BEFORE defaults are applied:
  // `orientation` maps onto `vertical`, `fadeEdgeSize` onto `fadeEdgesSize`.
  const normalizedProps = {
    ..._props,
    vertical:
      _props.orientation !== undefined ? _props.orientation === 'vertical' : _props.vertical,
    fadeEdgesSize: _props.fadeEdgesSize ?? _props.fadeEdgeSize,
  };

  const props = useProps('Marquee', defaultProps, normalizedProps);

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
    variant,
    tilt,
    perspective,
    rotate,
    skew,
    radius,

    // alias props — consumed during normalization above; pulled out so they
    // never leak onto the DOM via `...others`.
    orientation,
    fadeEdgeSize,
    fadeEdgeColor,

    classNames,
    style,
    styles,
    unstyled,
    vars,
    children,
    className,

    ...others
  } = props;

  const resolvedVertical =
    useMatches<boolean | undefined>(
      typeof vertical === 'object' && vertical !== null ? vertical : { base: !!vertical }
    ) ?? false;

  const resolvedGap =
    useMatches<string | undefined>(
      typeof gap === 'object' && gap !== null ? gap : { base: (gap as string) ?? 'xl' }
    ) ?? 'xl';

  const getStyles = useStyles<MarqueeFactory>({
    name: 'Marquee',
    props,
    classes,
    className,
    style: {
      ...style,
      '--marquee-play-state': over && pauseOnHover ? 'paused' : 'running',
      '--marquee-direction': resolvedVertical ? 'column' : 'row',
      '--marquee-gap': getSize(resolvedGap, 'marquee-gap'),
    },
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const renderContent = useMemo(
    () =>
      Array.from({ length: (repeat ?? 2) < 2 ? 2 : (repeat ?? 2) }).map((_, i) => (
        <div
          key={`marquee-item-${repeat}-${resolvedGap}-${duration}-${i}`}
          className={`${classes.marqueeContent} ${resolvedVertical ? classes.marqueeContentVertical : ''}`}
        >
          {children}
        </div>
      )),
    [repeat, resolvedVertical, children, resolvedGap, duration]
  );

  const container = (
    <Box
      className={classes.marqueeContainer}
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
    >
      {renderContent}
    </Box>
  );

  // `circle` replaces the clone+translate loop: children are distributed once
  // around the ellipse ring (one positioned `.item` per child) and the ring
  // rotates. The seamless animation is the ring's rotateY (0 ≡ 360), no clones.
  const ringStyles = getStyles('ring');
  const ring = (
    <Box
      {...getStyles('stage')}
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      onFocus={() => setOver(true)}
      onBlur={() => setOver(false)}
    >
      <div {...getStyles('tilt')}>
        <div
          {...ringStyles}
          style={{
            ...ringStyles.style,
            ['--marquee-count' as any]: React.Children.count(children),
          }}
        >
          {React.Children.toArray(children).map((child, index) => {
            const itemStyles = getStyles('item');
            return (
              <div
                key={(React.isValidElement(child) && child.key) || `marquee-ring-item-${index}`}
                {...itemStyles}
                style={{ ...itemStyles.style, ['--marquee-index' as any]: index }}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );

  return (
    <Box
      {...getStyles('root')}
      {...others}
      data-variant={variant === 'default' ? undefined : variant}
      data-fade-edges={resolveFadeEdges(fadeEdges)}
      data-vertical={resolvedVertical || undefined}
    >
      {variant === 'isometric' ? (
        <Box {...getStyles('stage')}>
          <Box {...getStyles('plane')}>{container}</Box>
        </Box>
      ) : variant === 'circle' ? (
        ring
      ) : (
        container
      )}
    </Box>
  );
});

Marquee.classes = classes;
Marquee.displayName = 'Marquee';
