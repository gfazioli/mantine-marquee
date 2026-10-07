import { render } from '@mantine-tests/core';
import { fireEvent } from '@testing-library/react';
import React from 'react';
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

  it('does not set data-fade-edges when fadeEdges is omitted', () => {
    const { container } = render(
      <Marquee>
        <div>Test</div>
      </Marquee>
    );
    expect(container.querySelector('[data-fade-edges]')).toBeNull();
  });

  it('does not set data-fade-edges when fadeEdges={false}', () => {
    const { container } = render(
      <Marquee fadeEdges={false}>
        <div>Test</div>
      </Marquee>
    );
    expect(container.querySelector('[data-fade-edges]')).toBeNull();
  });

  it('sets data-fade-edges="linear" when fadeEdges={true}', () => {
    const { container } = render(
      <Marquee fadeEdges>
        <div>Test</div>
      </Marquee>
    );
    expect(container.querySelector('[data-fade-edges="linear"]')).not.toBeNull();
  });

  it('sets data-fade-edges="linear" when fadeEdges="linear"', () => {
    const { container } = render(
      <Marquee fadeEdges="linear">
        <div>Test</div>
      </Marquee>
    );
    expect(container.querySelector('[data-fade-edges="linear"]')).not.toBeNull();
  });

  it('sets data-fade-edges="ellipse" when fadeEdges="ellipse"', () => {
    const { container } = render(
      <Marquee fadeEdges="ellipse">
        <div>Test</div>
      </Marquee>
    );
    expect(container.querySelector('[data-fade-edges="ellipse"]')).not.toBeNull();
  });

  it('sets data-fade-edges="rect" when fadeEdges="rect"', () => {
    const { container } = render(
      <Marquee fadeEdges="rect">
        <div>Test</div>
      </Marquee>
    );
    expect(container.querySelector('[data-fade-edges="rect"]')).not.toBeNull();
  });

  it('sets --marquee-fade-edge-size-x and -y to the same value for a single fadeEdgesSize', () => {
    const { container } = render(
      <Marquee fadeEdges="rect" fadeEdgesSize="md">
        <div>Test</div>
      </Marquee>
    );
    const root = container.querySelector('[data-fade-edges="rect"]') as HTMLElement;
    const style = root.getAttribute('style') || '';
    expect(style).toContain('--marquee-fade-edge-size-x');
    expect(style).toContain('--marquee-fade-edge-size-y');
  });

  it('sets data-vertical when vertical={{ base: true }}', () => {
    const { container } = render(
      <Marquee vertical={{ base: true }}>
        <div>Test</div>
      </Marquee>
    );
    expect(container.querySelector('[data-vertical]')).not.toBeNull();
  });

  it('does not set data-vertical when vertical={{ base: false }}', () => {
    const { container } = render(
      <Marquee vertical={{ base: false }}>
        <div>Test</div>
      </Marquee>
    );
    expect(container.querySelector('[data-vertical]')).toBeNull();
  });

  it('sets independent --marquee-fade-edge-size-x and -y for a tuple fadeEdgesSize', () => {
    const { container } = render(
      <Marquee fadeEdges="rect" fadeEdgesSize={['md', 'xs']}>
        <div>Test</div>
      </Marquee>
    );
    const root = container.querySelector('[data-fade-edges="rect"]') as HTMLElement;
    const style = root.getAttribute('style') || '';
    expect(style).toContain('--marquee-fade-edge-size-x');
    expect(style).toContain('--marquee-fade-edge-size-y');
  });

  it('sets --marquee-gap via inline style for a string gap value', () => {
    const { container } = render(
      <Marquee gap="md" fadeEdges="linear">
        <div>Test</div>
      </Marquee>
    );
    const root = container.querySelector('[data-fade-edges="linear"]') as HTMLElement;
    const style = root.getAttribute('style') || '';
    expect(style).toContain('--marquee-gap');
  });

  it('sets --marquee-gap via inline style for a responsive gap object', () => {
    const { container } = render(
      <Marquee gap={{ base: 'xs' }} fadeEdges="linear">
        <div>Test</div>
      </Marquee>
    );
    const root = container.querySelector('[data-fade-edges="linear"]') as HTMLElement;
    const style = root.getAttribute('style') || '';
    expect(style).toContain('--marquee-gap');
  });

  it('does not set data-variant for the default variant', () => {
    const { container } = render(
      <Marquee>
        <div>Test</div>
      </Marquee>
    );
    expect(container.querySelector('[data-variant]')).toBeNull();
  });

  it('sets data-variant="isometric" when variant="isometric"', () => {
    const { container } = render(
      <Marquee variant="isometric">
        <div>Test</div>
      </Marquee>
    );
    expect(container.querySelector('[data-variant="isometric"]')).not.toBeNull();
  });

  it('sets --marquee-tilt and --marquee-perspective from tilt/perspective props', () => {
    const { container } = render(
      <Marquee variant="isometric" tilt={40} perspective={1200}>
        <div>Test</div>
      </Marquee>
    );
    const root = container.querySelector('[data-variant="isometric"]') as HTMLElement;
    const style = root.getAttribute('style') || '';
    expect(style).toContain('--marquee-tilt: 40deg');
    expect(style).toContain('--marquee-perspective: 1200px');
  });

  it('sets --marquee-rotate and --marquee-skew from rotate/skew props', () => {
    const { container } = render(
      <Marquee variant="isometric" rotate={30} skew={15}>
        <div>Test</div>
      </Marquee>
    );
    const root = container.querySelector('[data-variant="isometric"]') as HTMLElement;
    const style = root.getAttribute('style') || '';
    expect(style).toContain('--marquee-rotate: 30deg');
    expect(style).toContain('--marquee-skew: 15deg');
  });

  it('sets data-variant="circle" when variant="circle"', () => {
    const { container } = render(
      <Marquee variant="circle">
        <div>A</div>
        <div>B</div>
      </Marquee>
    );
    expect(container.querySelector('[data-variant="circle"]')).not.toBeNull();
  });

  it('sets --marquee-radius-x and -y to the same value for a single radius', () => {
    const { container } = render(
      <Marquee variant="circle" radius={250}>
        <div>A</div>
      </Marquee>
    );
    const root = container.querySelector('[data-variant="circle"]') as HTMLElement;
    const style = root.getAttribute('style') || '';
    expect(style).toContain('--marquee-radius-x: 250px');
    expect(style).toContain('--marquee-radius-y: 250px');
  });

  it('sets independent --marquee-radius-x and -y for a [rx, ry] tuple', () => {
    const { container } = render(
      <Marquee variant="circle" radius={[300, 120]}>
        <div>A</div>
      </Marquee>
    );
    const root = container.querySelector('[data-variant="circle"]') as HTMLElement;
    const style = root.getAttribute('style') || '';
    expect(style).toContain('--marquee-radius-x: 300px');
    expect(style).toContain('--marquee-radius-y: 120px');
  });

  it('distributes children around the ring with --marquee-count and per-item --marquee-index', () => {
    const { container } = render(
      <Marquee variant="circle">
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </Marquee>
    );
    const ring = container.querySelector('[style*="--marquee-count"]') as HTMLElement;
    expect((ring.getAttribute('style') || '').replace(/\s/g, '')).toContain('--marquee-count:3');
    expect(ring.children).toHaveLength(3);
    const firstItem = ring.children[0] as HTMLElement;
    expect((firstItem.getAttribute('style') || '').replace(/\s/g, '')).toContain(
      '--marquee-index:0'
    );
  });

  it('computes a non-zero --marquee-fade-angle for a rotated isometric plane', () => {
    const { container } = render(
      <Marquee variant="isometric" rotate={56} tilt={48}>
        <div>Test</div>
      </Marquee>
    );
    const root = container.querySelector('[data-variant="isometric"]') as HTMLElement;
    const style = root.getAttribute('style') || '';
    const match = style.match(/--marquee-fade-angle:\s*([-\d.]+)deg/);
    expect(match).not.toBeNull();
    expect(Math.abs(parseFloat(match![1]))).toBeGreaterThan(1);
  });

  it('keeps --marquee-fade-angle at 0 for the default variant even when rotate is set', () => {
    const { container } = render(
      <Marquee rotate={56} fadeEdges="linear">
        <div>Test</div>
      </Marquee>
    );
    const root = container.querySelector('[data-fade-edges="linear"]') as HTMLElement;
    const style = root.getAttribute('style') || '';
    expect(style).toContain('--marquee-fade-angle: 0deg');
  });

  it('maps orientation="vertical" onto data-vertical (core parity alias)', () => {
    const { container } = render(
      <Marquee orientation="vertical">
        <div>Test</div>
      </Marquee>
    );
    expect(container.querySelector('[data-vertical]')).not.toBeNull();
  });

  it('does not set data-vertical for orientation="horizontal"', () => {
    const { container } = render(
      <Marquee orientation="horizontal">
        <div>Test</div>
      </Marquee>
    );
    expect(container.querySelector('[data-vertical]')).toBeNull();
  });

  it('treats fadeEdgeSize as an alias of fadeEdgesSize', () => {
    const { container } = render(
      <Marquee fadeEdges="rect" fadeEdgeSize="lg">
        <div>Test</div>
      </Marquee>
    );
    const root = container.querySelector('[data-fade-edges="rect"]') as HTMLElement;
    const style = root.getAttribute('style') || '';
    expect(style).toContain('--marquee-fade-edge-size-x');
    expect(style).toContain('--marquee-fade-edge-size-y');
  });

  describe('fadeEdgeColor', () => {
    const rootStyle = (container: HTMLElement) =>
      (container.querySelector('[data-orientation]') as HTMLElement).getAttribute('style') || '';

    it('paints the fade in a raw CSS color and marks the root', () => {
      const { container } = render(
        <Marquee fadeEdges="linear" fadeEdgeColor="#ff0000">
          <div>Test</div>
        </Marquee>
      );
      expect(container.querySelector('[data-fade-color]')).not.toBeNull();
      expect(rootStyle(container)).toContain('--marquee-fade-color: #ff0000');
    });

    it('resolves a theme color key and a key with a shade', () => {
      const { container: a } = render(
        <Marquee fadeEdges fadeEdgeColor="blue">
          <div>Test</div>
        </Marquee>
      );
      expect(rootStyle(a)).toContain('--marquee-fade-color: var(--mantine-color-blue-filled)');
      const { container: b } = render(
        <Marquee fadeEdges fadeEdgeColor="blue.3">
          <div>Test</div>
        </Marquee>
      );
      expect(rootStyle(b)).toContain('--marquee-fade-color: var(--mantine-color-blue-3)');
    });

    it('passes a CSS variable through untouched', () => {
      const { container } = render(
        <Marquee fadeEdges fadeEdgeColor="var(--mantine-color-body)">
          <div>Test</div>
        </Marquee>
      );
      expect(rootStyle(container)).toContain('--marquee-fade-color: var(--mantine-color-body)');
    });

    it('keeps the mask (no data-fade-color, no color variable) when fadeEdgeColor is omitted', () => {
      const { container } = render(
        <Marquee fadeEdges="rect">
          <div>Test</div>
        </Marquee>
      );
      expect(container.querySelector('[data-fade-color]')).toBeNull();
      expect(rootStyle(container)).not.toContain('--marquee-fade-color');
    });

    it('does nothing without fadeEdges, and never leaks the prop onto the DOM', () => {
      const { container } = render(
        <Marquee fadeEdgeColor="red">
          <div>Test</div>
        </Marquee>
      );
      expect(container.querySelector('[data-fade-color]')).toBeNull();
      expect(container.querySelector('[fadeedgecolor]')).toBeNull();
    });

    it('marks every fade shape and variant', () => {
      (['linear', 'ellipse', 'rect'] as const).forEach((shape) => {
        (['default', 'isometric', 'circle'] as const).forEach((variant) => {
          const { container, unmount } = render(
            <Marquee variant={variant} fadeEdges={shape} fadeEdgeColor="dark.7">
              <div>Test</div>
            </Marquee>
          );
          expect(
            container.querySelector(`[data-fade-edges="${shape}"][data-fade-color]`)
          ).not.toBeNull();
          unmount();
        });
      });
    });
  });
  describe('gap resolves through theme.spacing, like core', () => {
    const gapOf = (container: HTMLElement) => {
      const style =
        (container.querySelector('[data-orientation]') as HTMLElement).getAttribute('style') || '';
      return style.match(/--marquee-gap:\s*([^;]+)/)?.[1].trim();
    };

    it('defaults to theme.spacing.md', () => {
      const { container } = render(
        <Marquee>
          <div>Test</div>
        </Marquee>
      );
      expect(gapOf(container)).toBe('var(--mantine-spacing-md)');
    });

    it('maps every token onto theme.spacing', () => {
      (['xs', 'sm', 'md', 'lg', 'xl'] as const).forEach((token) => {
        const { container, unmount } = render(
          <Marquee gap={token}>
            <div>Test</div>
          </Marquee>
        );
        expect(gapOf(container)).toBe(`var(--mantine-spacing-${token})`);
        unmount();
      });
    });

    it('accepts a number, converted to rem like core', () => {
      const { container } = render(
        <Marquee gap={20}>
          <div>Test</div>
        </Marquee>
      );
      expect(gapOf(container)).toBe('calc(1.25rem * var(--mantine-scale))');
    });

    it('passes any other CSS value through', () => {
      const { container } = render(
        <Marquee gap="3vw">
          <div>Test</div>
        </Marquee>
      );
      expect(gapOf(container)).toBe('3vw');
    });

    it('resolves the base value of a responsive object through theme.spacing', () => {
      const { container } = render(
        <Marquee gap={{ base: 'xs', md: 40 }}>
          <div>Test</div>
        </Marquee>
      );
      expect(gapOf(container)).toBe('var(--mantine-spacing-xs)');
    });
  });

  describe('pauseOnHover', () => {
    it('leaves the pause to CSS: no inline play state, before or after hover', () => {
      const { container } = render(
        <Marquee pauseOnHover>
          <div>Test</div>
        </Marquee>
      );
      const root = container.querySelector('[data-pause-on-hover]') as HTMLElement;
      expect(root.getAttribute('style') || '').not.toContain('--marquee-play-state');
      fireEvent.mouseEnter(root.firstElementChild as HTMLElement);
      expect(root.getAttribute('style') || '').not.toContain('--marquee-play-state');
    });

    it('marks the root in every variant, so one CSS rule covers hover and keyboard focus', () => {
      (['default', 'isometric', 'circle'] as const).forEach((variant) => {
        const { container, unmount } = render(
          <Marquee variant={variant} pauseOnHover>
            <a href="#a">A</a>
          </Marquee>
        );
        expect(container.querySelector('[data-pause-on-hover]')).not.toBeNull();
        unmount();
      });
    });
  });

  describe('drop-in parity with @mantine/core Marquee', () => {
    it('accepts HTML element props such as id and event handlers', () => {
      const onMouseEnter = jest.fn();
      const { container } = render(
        <Marquee id="logos" title="Logos" onMouseEnter={onMouseEnter}>
          <div>Test</div>
        </Marquee>
      );
      const root = container.querySelector('#logos') as HTMLElement;
      expect(root).not.toBeNull();
      expect(root.getAttribute('title')).toBe('Logos');
    });

    it('forwards attributes to root, content and group instead of rendering them as one attribute', () => {
      const { container } = render(
        <Marquee
          attributes={{
            root: { 'data-probe': 'root' },
            content: { 'data-probe': 'content' },
            group: { 'data-probe': 'group' },
          }}
        >
          <div>Test</div>
        </Marquee>
      );
      expect(container.querySelector('[attributes]')).toBeNull();
      expect(container.querySelector('[data-probe="root"]')).not.toBeNull();
      expect(container.querySelector('[data-probe="content"]')).not.toBeNull();
      expect(container.querySelectorAll('[data-probe="group"]')).toHaveLength(2);
    });

    it('applies classNames to the content and group selectors', () => {
      const { container } = render(
        <Marquee repeat={3} classNames={{ content: 'probe-content', group: 'probe-group' }}>
          <div>Test</div>
        </Marquee>
      );
      const content = container.querySelector('.probe-content') as HTMLElement;
      expect(content).not.toBeNull();
      expect(content.querySelectorAll('.probe-group')).toHaveLength(3);
    });

    it('applies classNames to content and group in the isometric variant', () => {
      const { container } = render(
        <Marquee
          variant="isometric"
          classNames={{ content: 'probe-content', group: 'probe-group' }}
        >
          <div>Test</div>
        </Marquee>
      );
      expect(container.querySelector('.probe-content .probe-group')).not.toBeNull();
    });

    it('sets the data attributes core sets on the root', () => {
      const { container } = render(
        <Marquee orientation="vertical" reverse pauseOnHover>
          <div>Test</div>
        </Marquee>
      );
      const root = container.querySelector('[data-orientation]') as HTMLElement;
      expect(root.getAttribute('data-orientation')).toBe('vertical');
      expect(root.hasAttribute('data-reverse')).toBe(true);
      expect(root.hasAttribute('data-pause-on-hover')).toBe(true);
    });

    it('sets data-orientation="horizontal" and no reverse/pause attributes by default', () => {
      const { container } = render(
        <Marquee>
          <div>Test</div>
        </Marquee>
      );
      const root = container.querySelector('[data-orientation]') as HTMLElement;
      expect(root.getAttribute('data-orientation')).toBe('horizontal');
      expect(root.hasAttribute('data-reverse')).toBe(false);
      expect(root.hasAttribute('data-pause-on-hover')).toBe(false);
    });

    it('exposes varsResolver as a static property', () => {
      expect(typeof Marquee.varsResolver).toBe('function');
    });
  });
});
