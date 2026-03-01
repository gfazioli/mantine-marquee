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
});
