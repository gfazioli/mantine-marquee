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
    fadeEdgesColor: '',
    gap: 'xl',
  },
  argTypes: {
    repeat: { control: { type: 'range', min: 2, max: 20, step: 1 } },
    duration: { control: { type: 'range', min: 0.1, max: 20, step: 0.1 } },
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
