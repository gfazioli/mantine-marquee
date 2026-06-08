import { Marquee } from '@gfazioli/mantine-marquee';
import { Group, Paper, Text, ThemeIcon } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import {
  IconBrandFigma,
  IconBrandGithub,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
} from '@tabler/icons-react';

function Wrapper() {
  const stack = [
    { label: 'React', icon: <IconBrandReact />, color: 'cyan' },
    { label: 'TypeScript', icon: <IconBrandTypescript />, color: 'blue' },
    { label: 'Next.js', icon: <IconBrandNextjs />, color: 'dark' },
    { label: 'Mantine', icon: <IconBrandMantine />, color: 'indigo' },
    { label: 'Vercel', icon: <IconBrandVercel />, color: 'dark' },
    { label: 'Tailwind', icon: <IconBrandTailwind />, color: 'teal' },
    { label: 'Figma', icon: <IconBrandFigma />, color: 'grape' },
    { label: 'GitHub', icon: <IconBrandGithub />, color: 'gray' },
  ];

  return (
    <Marquee
      variant="isometric"
      tilt={50}
      rotate={30}
      skew={10}
      perspective={650}
      duration={16}
      gap="xl"
      fadeEdges="ellipse"
      pauseOnHover
      h={340}
    >
      {stack.map((tech) => (
        <Paper key={tech.label} withBorder radius="md" p="md" w={210} shadow="md">
          <Group gap="sm" wrap="nowrap">
            <ThemeIcon variant="light" color={tech.color} size={42} radius="md">
              {tech.icon}
            </ThemeIcon>
            <Text fw={600}>{tech.label}</Text>
          </Group>
        </Paper>
      ))}
    </Marquee>
  );
}

const code = `
import { Marquee } from '@gfazioli/mantine-marquee';
import { Group, Paper, Text, ThemeIcon } from '@mantine/core';
import {
  IconBrandFigma,
  IconBrandGithub,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
} from '@tabler/icons-react';

const stack = [
  { label: 'React', icon: <IconBrandReact />, color: 'cyan' },
  { label: 'TypeScript', icon: <IconBrandTypescript />, color: 'blue' },
  { label: 'Next.js', icon: <IconBrandNextjs />, color: 'dark' },
  { label: 'Mantine', icon: <IconBrandMantine />, color: 'indigo' },
  { label: 'Vercel', icon: <IconBrandVercel />, color: 'dark' },
  { label: 'Tailwind', icon: <IconBrandTailwind />, color: 'teal' },
  { label: 'Figma', icon: <IconBrandFigma />, color: 'grape' },
  { label: 'GitHub', icon: <IconBrandGithub />, color: 'gray' },
];

function Demo() {
  return (
    <Marquee
      variant="isometric"
      tilt={50}
      rotate={30}
      skew={10}
      perspective={650}
      duration={16}
      gap="xl"
      fadeEdges="ellipse"
      pauseOnHover
      h={340}
    >
      {stack.map((tech) => (
        <Paper key={tech.label} withBorder radius="md" p="md" w={210} shadow="md">
          <Group gap="sm" wrap="nowrap">
            <ThemeIcon variant="light" color={tech.color} size={42} radius="md">
              {tech.icon}
            </ThemeIcon>
            <Text fw={600}>{tech.label}</Text>
          </Group>
        </Paper>
      ))}
    </Marquee>
  );
}
`;

export const isometricShowcase: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  centered: true,
  defaultExpanded: false,
};
