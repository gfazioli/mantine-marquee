import { ReactNode } from 'react';
import { Marquee } from '@gfazioli/mantine-marquee';
import { Avatar, Card, Group, Rating, Stack, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const testimonials = [
    {
      name: 'John Doe',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4,
    },
    {
      name: 'Jane Doe',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4,
    },
    {
      name: 'Jessica Doe',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua.',
      rating: 2,
    },
    {
      name: 'Jack Doe',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
    },
    {
      name: 'Jill Doe',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua.',
      rating: 3,
    },
  ];

  function BoxComponent({
    children,
    avatar,
    name,
    rating,
    ...props
  }: {
    children: ReactNode;
    avatar: string;
    name: string;
    [key: string]: any;
  }) {
    return (
      <Card w={200} shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section p={'md'}>
          <Group>
            <Avatar size="md" radius="xl" src={avatar} />
            <Title order={4}>{name}</Title>
          </Group>
        </Card.Section>
        <Stack>
          <Text size="sm" c="dimmed">
            {children}
          </Text>
          <Group justify="end">
            <Rating value={rating} />
          </Group>
        </Stack>
      </Card>
    );
  }

  return (
    <Marquee w={792} pauseOnHover fadeEdges>
      {testimonials.map(({ text, ...testimonial }, index) => (
        <BoxComponent key={index} {...testimonial}>
          {text}
        </BoxComponent>
      ))}
    </Marquee>
  );
}

const code = `
import { Marquee } from '@gfazioli/mantine-marquee';
import { Avatar, Card, Group, Rating, Stack, Text, Title } from '@mantine/core';
import { ReactNode } from 'react';
import { testimonials } from './testimonials';

function Demo() {
  function BoxComponent({
    children,
    avatar,
    name,
    rating,
    ...props
  }: {
    children: ReactNode;
    avatar: string;
    name: string;
    [key: string]: any;
  }) {
    return (
      <Card w={200} shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section p={'md'}>
          <Group>
            <Avatar size="md" radius="xl" src={avatar} />
            <Title order={4}>{name}</Title>
          </Group>
        </Card.Section>
        <Stack>
          <Text size="sm" c="dimmed">
            {children}
          </Text>
          <Group justify="end">
            <Rating value={rating} />
          </Group>
        </Stack>
      </Card>
    );
  }

  return (
    <Marquee w={792} pauseOnHover fadeEdges>
      {testimonials.map(({ text, ...testimonial }, index) => (
        <BoxComponent key={index} {...testimonial}>
          {text}
        </BoxComponent>
      ))}
    </Marquee>
  );
}
`;

const testimonials = `
export const testimonials = [
  {
    name: "John Doe",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    name: "Jane Doe",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    name: "Jessica Doe",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua.",
    rating: 2,
  },
  {
    name: "Jack Doe",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    name: "Jill Doe",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
      "tempor incididunt ut labore et dolore magna aliqua.",
    rating: 3,
  },
];
`;

export const feedbacks: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code: [
    { fileName: 'Demo.tsx', code },
    { fileName: 'testimonials.ts', code: testimonials },
  ],
  centered: true,
  defaultExpanded: false,
};
