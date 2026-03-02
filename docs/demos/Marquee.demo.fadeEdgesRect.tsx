import { ReactNode } from 'react';
import { Marquee } from '@gfazioli/mantine-marquee';
import { Box, Flex } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <Flex direction="column" gap="md">
      <Marquee fadeEdges="rect" fadeEdgesSize="md" h={60}>
        <BoxComponent bg="blue">Hello World #1</BoxComponent>
        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
        <BoxComponent bg="indigo">Have a nice day #3</BoxComponent>
        <BoxComponent bg="teal">Goodbye #4</BoxComponent>
      </Marquee>
      <Marquee fadeEdges="rect" fadeEdgesSize={['lg', 'xs']} reverse h={60}>
        <BoxComponent bg="orange">Hello World #1</BoxComponent>
        <BoxComponent bg="red">Hope you like it #2</BoxComponent>
        <BoxComponent bg="pink">Have a nice day #3</BoxComponent>
        <BoxComponent bg="grape">Goodbye #4</BoxComponent>
      </Marquee>
    </Flex>
  );
}

const code = `
import { ReactNode } from 'react';
import { Marquee } from '@gfazioli/mantine-marquee';
import { Box, Flex } from '@mantine/core';

function Demo() {
  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <Flex direction="column" gap="md" w={790}>
      {/* Uniform fade on all 4 edges */}
      <Marquee fadeEdges="rect" fadeEdgesSize="md" w="100%" h={60}>
        <BoxComponent bg="blue">Hello World #1</BoxComponent>
        <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
        <BoxComponent bg="indigo">Have a nice day #3</BoxComponent>
        <BoxComponent bg="teal">Goodbye #4</BoxComponent>
      </Marquee>
      {/* Tuple: more fade on left/right (lg), less on top/bottom (xs) */}
      <Marquee fadeEdges="rect" fadeEdgesSize={['lg', 'xs']} reverse w="100%" h={60}>
        <BoxComponent bg="orange">Hello World #1</BoxComponent>
        <BoxComponent bg="red">Hope you like it #2</BoxComponent>
        <BoxComponent bg="pink">Have a nice day #3</BoxComponent>
        <BoxComponent bg="grape">Goodbye #4</BoxComponent>
      </Marquee>
    </Flex>
  );
}
`;

export const fadeEdgesRect: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};
