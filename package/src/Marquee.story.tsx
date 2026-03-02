import React from 'react';
import { Box } from '@mantine/core';
import { Marquee, MarqueeProps } from './Marquee';

export default {
  title: 'Marquee',
  args: {
    reverse: false,
    repeat: 3,
    vertical: false,
    pauseOnHover: false,
    duration: 10,
    fadeEdges: false,
    fadeEdgesSize: 'xs',
    gap: 'xl',
  },
  argTypes: {
    repeat: { control: { type: 'range', min: 2, max: 20, step: 1 } },
    duration: { control: { type: 'range', min: 0.1, max: 20, step: 0.1 } },
    fadeEdges: { control: { type: 'select' }, options: [false, 'linear', 'ellipse', 'rect'] },
    fadeEdgesSize: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export function Usage(props: MarqueeProps) {
  return (
    <Marquee {...props} h={300}>
      <Box bg="red" p="md" w="200px">
        Hello World #1
      </Box>
      <Box bg="cyan" p="md" w="200px">
        Hope you like it #2
      </Box>
      <Box bg="blue" p="md" w="200px">
        Have a nice day #3
      </Box>
      <Box bg="lime" p="md" w="200px">
        Goodbye #4
      </Box>
    </Marquee>
  );
}

export function FadeLinear(props: MarqueeProps) {
  return (
    <Marquee {...props} fadeEdges="linear" fadeEdgesSize="sm" h={300}>
      <Box bg="red" p="md" w="200px">
        Hello World #1
      </Box>
      <Box bg="cyan" p="md" w="200px">
        Hope you like it #2
      </Box>
      <Box bg="blue" p="md" w="200px">
        Have a nice day #3
      </Box>
      <Box bg="lime" p="md" w="200px">
        Goodbye #4
      </Box>
    </Marquee>
  );
}

export function FadeEllipse(props: MarqueeProps) {
  return (
    <Marquee {...props} fadeEdges="ellipse" fadeEdgesSize="md" h={300}>
      <Box bg="red" p="md" w="200px">
        Hello World #1
      </Box>
      <Box bg="cyan" p="md" w="200px">
        Hope you like it #2
      </Box>
      <Box bg="blue" p="md" w="200px">
        Have a nice day #3
      </Box>
      <Box bg="lime" p="md" w="200px">
        Goodbye #4
      </Box>
    </Marquee>
  );
}

export function FadeEllipseVertical(props: MarqueeProps) {
  return (
    <Marquee {...props} fadeEdges="ellipse" fadeEdgesSize="md" vertical h={300}>
      <Box bg="red" p="md" w="200px">
        Hello World #1
      </Box>
      <Box bg="cyan" p="md" w="200px">
        Hope you like it #2
      </Box>
      <Box bg="blue" p="md" w="200px">
        Have a nice day #3
      </Box>
      <Box bg="lime" p="md" w="200px">
        Goodbye #4
      </Box>
    </Marquee>
  );
}

export function FadeEdgesSizes(props: MarqueeProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size}>
          <div style={{ marginBottom: 4, fontWeight: 600 }}>fadeEdgesSize=&quot;{size}&quot;</div>
          <Marquee {...props} fadeEdges="linear" fadeEdgesSize={size}>
            <Box bg="blue" p="md" w="200px" c="white">
              Item #1
            </Box>
            <Box bg="cyan" p="md" w="200px">
              Item #2
            </Box>
            <Box bg="teal" p="md" w="200px" c="white">
              Item #3
            </Box>
            <Box bg="lime" p="md" w="200px">
              Item #4
            </Box>
          </Marquee>
        </div>
      ))}
    </div>
  );
}

export function FadeRect(props: MarqueeProps) {
  return (
    <Marquee {...props} fadeEdges="rect" fadeEdgesSize="md" h={300}>
      <Box bg="red" p="md" w="200px">
        Hello World #1
      </Box>
      <Box bg="cyan" p="md" w="200px">
        Hope you like it #2
      </Box>
      <Box bg="blue" p="md" w="200px">
        Have a nice day #3
      </Box>
      <Box bg="lime" p="md" w="200px">
        Goodbye #4
      </Box>
    </Marquee>
  );
}

export function FadeRectTuple(props: MarqueeProps) {
  return (
    <Marquee {...props} fadeEdges="rect" fadeEdgesSize={['lg', 'xs']} h={300}>
      <Box bg="red" p="md" w="200px">
        Hello World #1
      </Box>
      <Box bg="cyan" p="md" w="200px">
        Hope you like it #2
      </Box>
      <Box bg="blue" p="md" w="200px">
        Have a nice day #3
      </Box>
      <Box bg="lime" p="md" w="200px">
        Goodbye #4
      </Box>
    </Marquee>
  );
}

export function ResponsiveVertical(props: MarqueeProps) {
  return (
    <Marquee {...props} vertical={{ base: true, md: false }} h={300}>
      <Box bg="red" p="md" w="200px">
        Hello World #1
      </Box>
      <Box bg="cyan" p="md" w="200px">
        Hope you like it #2
      </Box>
      <Box bg="blue" p="md" w="200px">
        Have a nice day #3
      </Box>
      <Box bg="lime" p="md" w="200px">
        Goodbye #4
      </Box>
    </Marquee>
  );
}

export function ResponsiveGap(props: MarqueeProps) {
  return (
    <Marquee {...props} gap={{ base: 'xs', md: 'xl' }} fadeEdges="linear" h={300}>
      <Box bg="red" p="md" w="200px">
        Hello World #1
      </Box>
      <Box bg="cyan" p="md" w="200px">
        Hope you like it #2
      </Box>
      <Box bg="blue" p="md" w="200px">
        Have a nice day #3
      </Box>
      <Box bg="lime" p="md" w="200px">
        Goodbye #4
      </Box>
    </Marquee>
  );
}

export function Multiple(props: MarqueeProps) {
  return (
    <>
      {' '}
      <Marquee {...props}>
        <Box bg="red" p="md" w="200px">
          Hello World #1
        </Box>
        <Box bg="cyan" p="md" w="200px">
          Hope you like it #2
        </Box>
        <Box bg="blue" p="md" w="200px">
          Have a nice day #3
        </Box>
        <Box bg="lime" p="md" w="200px">
          Goodbye #4
        </Box>
      </Marquee>
      <Marquee {...props} reverse>
        <Box bg="red" p="md" w="200px">
          Hello World #1
        </Box>
        <Box bg="cyan" p="md" w="200px">
          Hope you like it #2
        </Box>
        <Box bg="blue" p="md" w="200px">
          Have a nice day #3
        </Box>
        <Box bg="lime" p="md" w="200px">
          Goodbye #4
        </Box>
      </Marquee>
    </>
  );
}
