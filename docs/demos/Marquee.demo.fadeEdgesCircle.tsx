import { Marquee } from '@gfazioli/mantine-marquee';
import { Avatar, Card, Center, Rating, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const testimonials = [
    {
      name: 'John Doe',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png',
      rating: 4,
    },
    {
      name: 'Jane Doe',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
      rating: 4,
    },
    {
      name: 'Jessica Doe',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
      rating: 2,
    },
    {
      name: 'Jack Doe',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
      rating: 5,
    },
    {
      name: 'Jill Doe',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
      rating: 3,
    },
  ];

  return (
    <Center>
      <Marquee
        w={300}
        h={300}
        pauseOnHover
        fadeEdges="ellipse"
        fadeEdgesSize="md"
        style={{ justifyContent: 'center' }}
      >
        {testimonials.map((t, index) => (
          <Card key={index} w={120} shadow="sm" padding="sm" radius="md" withBorder>
            <Stack align="center" gap="xs">
              <Avatar size="lg" radius="xl" src={t.avatar} />
              <Text size="xs" fw={600} ta="center">
                {t.name}
              </Text>
              <Rating value={t.rating} size="xs" />
            </Stack>
          </Card>
        ))}
      </Marquee>
    </Center>
  );
}

const code = `
import { Marquee } from '@gfazioli/mantine-marquee';
import { Avatar, Card, Center, Rating, Stack, Text } from '@mantine/core';

function Demo() {
  const testimonials = [
    { name: 'John Doe', avatar: '...', rating: 4 },
    { name: 'Jane Doe', avatar: '...', rating: 4 },
    { name: 'Jessica Doe', avatar: '...', rating: 2 },
    { name: 'Jack Doe', avatar: '...', rating: 5 },
    { name: 'Jill Doe', avatar: '...', rating: 3 },
  ];

  return (
    <Center>
      {/* Ellipse on a square element (w=h) produces a circular mask */}
      <Marquee
        w={300}
        h={300}
        pauseOnHover
        fadeEdges="ellipse"
        fadeEdgesSize="md"
        style={{ justifyContent: 'center' }}
      >
        {testimonials.map((t, index) => (
          <Card key={index} w={120} shadow="sm" padding="sm" radius="md" withBorder>
            <Stack align="center" gap="xs">
              <Avatar size="lg" radius="xl" src={t.avatar} />
              <Text size="xs" fw={600} ta="center">
                {t.name}
              </Text>
              <Rating value={t.rating} size="xs" />
            </Stack>
          </Card>
        ))}
      </Marquee>
    </Center>
  );
}
`;

export const fadeEdgesCircle: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};
