import { ReactNode } from 'react';
import { Marquee } from '@gfazioli/mantine-marquee';
import { Box } from '@mantine/core';
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
    <Marquee gap={{ base: 'xs', md: 'xl' }} fadeEdges="linear" w={790}>
      <BoxComponent bg="blue">Hello World #1</BoxComponent>
      <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
      <BoxComponent bg="indigo">Have a nice day #3</BoxComponent>
      <BoxComponent bg="teal">Goodbye #4</BoxComponent>
    </Marquee>
  );
}

const code = `
import { ReactNode } from 'react';
import { Marquee } from '@gfazioli/mantine-marquee';
import { Box } from '@mantine/core';

function Demo() {
  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <Marquee gap={{ base: 'xs', md: 'xl' }} fadeEdges="linear" w={790}>
      <BoxComponent bg="blue">Hello World #1</BoxComponent>
      <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
      <BoxComponent bg="indigo">Have a nice day #3</BoxComponent>
      <BoxComponent bg="teal">Goodbye #4</BoxComponent>
    </Marquee>
  );
}
`;

export const responsiveGap: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  centered: true,
  defaultExpanded: false,
};
