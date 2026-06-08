import { render } from '@mantine-tests/core';
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

  it('accepts fadeEdgeColor without leaking it onto the DOM (core parity, unused)', () => {
    const { container } = render(
      <Marquee fadeEdges="linear" fadeEdgeColor="red">
        <div>Test</div>
      </Marquee>
    );
    const root = container.querySelector('[data-fade-edges="linear"]') as HTMLElement;
    expect(root.getAttribute('fadeedgecolor')).toBeNull();
  });
});
