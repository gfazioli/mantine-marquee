import { Marquee, type MarqueeProps } from '@gfazioli/mantine-marquee';
import { Box, Flex } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ReactNode } from 'react';

function Wrapper({
  fadeEdges: fadeEdgesRaw,
  fadeEdgesSize,
  ...rest
}: MarqueeProps & { fadeEdgesSize?: number }) {
  const fadeEdges = String(fadeEdgesRaw) === 'false' ? false : fadeEdgesRaw;
  const resolvedSize = `${fadeEdgesSize}%`;

  function Card({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...props} p="md" w={200} h={120} c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <Flex w="100%" h={360} align="center" justify="center">
      <Marquee
        {...rest}
        variant="isometric"
        fadeEdges={fadeEdges}
        fadeEdgesSize={resolvedSize as any}
        w="100%"
        h={360}
      >
        <Card bg="red">Hello World #1</Card>
        <Card bg="cyan">Hope you like it #2</Card>
        <Card bg="blue">Have a nice day #3</Card>
        <Card bg="lime">Goodbye #4</Card>
        <Card bg="orange">Hello World #5</Card>
        <Card bg="grape">Hope you like it #6</Card>
      </Marquee>
    </Flex>
  );
}

const code = `
import { ReactNode } from 'react';
import { Marquee } from '@gfazioli/mantine-marquee';
import { Box } from '@mantine/core';

function Demo() {
  function Card({ children, ...rest }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...rest} p="md" w={200} h={120} c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <Marquee variant="isometric"{{props}}>
      <Card bg="red">Hello World #1</Card>
      <Card bg="cyan">Hope you like it #2</Card>
      <Card bg="blue">Have a nice day #3</Card>
      <Card bg="lime">Goodbye #4</Card>
      <Card bg="orange">Hello World #5</Card>
      <Card bg="grape">Hope you like it #6</Card>
    </Marquee>
  );
}
`;

export const isometric: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      type: 'number',
      prop: 'tilt',
      initialValue: 48,
      libraryValue: 45,
      min: -80,
      max: 80,
      step: 1,
    },
    {
      type: 'number',
      prop: 'perspective',
      initialValue: 750,
      libraryValue: 800,
      min: 200,
      max: 3000,
      step: 50,
    },
    {
      type: 'number',
      prop: 'rotate',
      initialValue: 0,
      libraryValue: 0,
      min: -180,
      max: 180,
      step: 1,
    },
    { type: 'number', prop: 'skew', initialValue: 0, libraryValue: 0, min: -60, max: 60, step: 1 },
    {
      prop: 'fadeEdges',
      type: 'select',
      data: [
        { value: 'false', label: 'None' },
        { value: 'linear', label: 'Linear' },
        { value: 'ellipse', label: 'Ellipse' },
        { value: 'rect', label: 'Rect' },
      ],
      initialValue: 'false',
      libraryValue: 'false',
    },
    {
      type: 'number',
      prop: 'fadeEdgesSize',
      initialValue: 15,
      libraryValue: 11,
      min: 1,
      max: 50,
      step: 1,
    },
    { prop: 'reverse', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'pauseOnHover', type: 'boolean', initialValue: false, libraryValue: false },
    {
      prop: 'duration',
      type: 'number',
      initialValue: 12,
      libraryValue: 20,
      step: 0.1,
      min: 0.1,
      max: 60,
    },
    { type: 'size', prop: 'gap', initialValue: 'md', libraryValue: 'xl' },
  ],
};
