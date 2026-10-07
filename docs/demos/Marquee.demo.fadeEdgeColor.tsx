import { Marquee, type MarqueeProps } from '@gfazioli/mantine-marquee';
import { Box } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ReactNode } from 'react';

function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
  return (
    <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
      {children}
    </Box>
  );
}

function Wrapper(props: MarqueeProps) {
  return (
    <Marquee {...props} maw={540}>
      <BoxComponent bg="red">Hello World #1</BoxComponent>
      <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
      <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
      <BoxComponent bg="lime">Goodbye #4</BoxComponent>
      <BoxComponent bg="orange">Hello World #5</BoxComponent>
      <BoxComponent bg="grape">Hope you like it #6</BoxComponent>
    </Marquee>
  );
}

const code = `
import { ReactNode } from 'react';
import { Marquee } from '@gfazioli/mantine-marquee';
import { Box } from '@mantine/core';

function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
  return (
    <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
      {children}
    </Box>
  );
}

function Demo() {
  return (
    <Marquee{{props}} maw={540}>
      <BoxComponent bg="red">Hello World #1</BoxComponent>
      <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
      <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
      <BoxComponent bg="lime">Goodbye #4</BoxComponent>
      <BoxComponent bg="orange">Hello World #5</BoxComponent>
      <BoxComponent bg="grape">Hope you like it #6</BoxComponent>
    </Marquee>
  );
}
`;

export const fadeEdgeColor: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'fadeEdges',
      type: 'select',
      data: [
        { value: 'linear', label: 'Linear' },
        { value: 'ellipse', label: 'Ellipse' },
        { value: 'rect', label: 'Rect' },
      ],
      initialValue: 'linear',
      libraryValue: '__none__',
    },
    { prop: 'fadeEdgeColor', type: 'color', initialValue: 'blue', libraryValue: '__none__' },
    {
      prop: 'fadeEdgesSize',
      type: 'select',
      data: ['xs', 'sm', 'md', 'lg', 'xl'],
      initialValue: 'md',
      libraryValue: 'xs',
    },
  ],
};
