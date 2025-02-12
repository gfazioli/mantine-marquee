import { ReactNode } from 'react';
import { Marquee } from '@gfazioli/mantine-marquee';
import { Box } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <Marquee {...props} w={544} h={58}>
      <BoxComponent bg="red">Hello World #1</BoxComponent>
      <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
      <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
      <BoxComponent bg="lime">Goodbye #4</BoxComponent>
      <BoxComponent bg="orange">Hello World #5</BoxComponent>
      <BoxComponent bg="dark">Hope you like it #6</BoxComponent>
      <BoxComponent bg="green">Have a nice day #7</BoxComponent>
    </Marquee>
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
    <Marquee w={544} h={300}{{props}}>
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
      type: 'boolean',
      initialValue: false,
      libraryValue: false,
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
      libraryValue: 4,
      min: 2,
      max: 20,
    },
    {
      prop: 'duration',
      type: 'number',
      initialValue: 10,
      libraryValue: 10,
      step: 0.1,
      min: 0.1,
      max: 60,
    },
    { type: 'size', prop: 'gap', initialValue: 'sm', libraryValue: 'sm' },
    {
      type: 'size',
      prop: 'fadeEdgesSize',
      initialValue: 'sm',
      libraryValue: 'sm',
    },
    {
      type: 'color',
      prop: 'fadeEdgesColor',
      initialValue: '',
      libraryValue: '',
    },
  ],
};
