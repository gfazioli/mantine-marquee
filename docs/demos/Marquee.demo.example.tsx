import { ReactNode } from 'react';
import { Marquee } from '@gfazioli/mantine-marquee';
import {
  IconBrand4chan,
  IconBrandAmazon,
  IconBrandBing,
  IconBrandGithub,
  IconBrandMantine,
  IconBrandWhatsapp,
  IconBrandWordpress,
} from '@tabler/icons-react';
import { ThemeIcon } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  const iconsBrand = [
    <IconBrand4chan style={{ width: '70%', height: '70%' }} />,
    <IconBrandWhatsapp style={{ width: '70%', height: '70%' }} />,
    <IconBrandWordpress style={{ width: '70%', height: '70%' }} />,
    <IconBrandBing style={{ width: '70%', height: '70%' }} />,
    <IconBrandGithub style={{ width: '70%', height: '70%' }} />,
    <IconBrandMantine style={{ width: '70%', height: '70%' }} />,
    <IconBrandAmazon style={{ width: '70%', height: '70%' }} />,
  ];

  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <ThemeIcon {...props} variant="transparent" size={'120px'}>
        {children}
      </ThemeIcon>
    );
  }

  return (
    <Marquee w={792} pauseOnHover fadeEdges>
      {iconsBrand.map((icon, index) => (
        <BoxComponent key={index}>{icon}</BoxComponent>
      ))}
    </Marquee>
  );
}

const code = `
import { Marquee } from '@gfazioli/mantine-marquee';
import {
  IconBrand4chan,
  IconBrandAmazon,
  IconBrandBing,
  IconBrandGithub,
  IconBrandMantine,
  IconBrandWhatsapp,
  IconBrandWordpress,
} from "@tabler/icons-react";

function Demo() {
  const iconsBrand = [
    <IconBrand4chan style={{ width: '70%', height: '70%' }} />,
    <IconBrandWhatsapp style={{ width: '70%', height: '70%' }} />,
    <IconBrandWordpress style={{ width: '70%', height: '70%' }} />,
    <IconBrandBing style={{ width: '70%', height: '70%' }} />,
    <IconBrandGithub style={{ width: '70%', height: '70%' }} />,
    <IconBrandMantine style={{ width: '70%', height: '70%' }} />,
    <IconBrandAmazon style={{ width: '70%', height: '70%' }} />,
  ];

  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <ThemeIcon {...props} variant="transparent" size={'120px'}>
        {children}
      </ThemeIcon>
    );
  }

  return (
    <Marquee w={792} pauseOnHover fadeEdges>
      {iconsBrand.map((icon, index) => (
        <BoxComponent key={index}>{icon}</BoxComponent>
      ))}
    </Marquee>
  );
}
`;

export const example: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};
