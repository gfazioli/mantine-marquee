import { ReactNode } from 'react';
import { Marquee, type MarqueeProps } from '@gfazioli/mantine-marquee';
import { Box, Center } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper({
  fadeEdges: fadeEdgesRaw,
  fadeEdgesSize,
  fadeEdgesSizeY,
  vertical,
  ...rest
}: MarqueeProps & { fadeEdgesSizeY?: number }) {
  const fadeEdges = String(fadeEdgesRaw) === 'false' ? false : fadeEdgesRaw;
  const x = `${fadeEdgesSize}%`;
  const y = `${fadeEdgesSizeY ?? fadeEdgesSize}%`;
  const resolvedSize = fadeEdges === 'rect' ? [x, y] : x;

  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <Center w={544}>
      <Marquee
        {...rest}
        vertical={vertical}
        fadeEdges={fadeEdges}
        fadeEdgesSize={resolvedSize as any}
        w={vertical ? 200 : '100%'}
        h={vertical ? 500 : 60}
      >
        <BoxComponent bg="red">Hello World #1</BoxComponent>
        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
        <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
        <BoxComponent bg="lime">Goodbye #4</BoxComponent>
        <BoxComponent bg="orange">Hello World #5</BoxComponent>
        <BoxComponent bg="dark">Hope you like it #6</BoxComponent>
        <BoxComponent bg="green">Have a nice day #7</BoxComponent>
      </Marquee>
    </Center>
  );
}

const code = `
import { Marquee } from '@gfazioli/mantine-marquee';

function Demo() {
  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <Marquee w={544}{{props}}>
      <BoxComponent bg="red">Hello World #1</BoxComponent>
      <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
      <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
      <BoxComponent bg="lime">Goodbye #4</BoxComponent>
    </Marquee>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'reverse',
      type: 'boolean',
      initialValue: false,
      libraryValue: false,
    },
    {
      prop: 'vertical',
      type: 'boolean',
      initialValue: false,
      libraryValue: false,
    },
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
      prop: 'pauseOnHover',
      type: 'boolean',
      initialValue: false,
      libraryValue: false,
    },
    {
      prop: 'repeat',
      type: 'number',
      initialValue: 4,
      libraryValue: 2,
      min: 2,
      max: 20,
    },
    {
      prop: 'duration',
      type: 'number',
      initialValue: 10,
      libraryValue: 20,
      step: 0.1,
      min: 0.1,
      max: 60,
    },
    { type: 'size', prop: 'gap', initialValue: 'sm', libraryValue: 'xl' },
    {
      type: 'number',
      prop: 'fadeEdgesSize',
      initialValue: 20,
      libraryValue: 11,
      min: 1,
      max: 50,
      step: 1,
    },
    {
      type: 'number',
      prop: 'fadeEdgesSizeY',
      initialValue: 20,
      libraryValue: 20,
      min: 1,
      max: 50,
      step: 1,
    },
  ],
};
