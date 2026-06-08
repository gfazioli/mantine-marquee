import { Marquee } from '@gfazioli/mantine-marquee';
import { Avatar, Flex } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const base = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars';
const avatars = [
  `${base}/avatar-1.png`,
  `${base}/avatar-2.png`,
  `${base}/avatar-3.png`,
  `${base}/avatar-4.png`,
  `${base}/avatar-5.png`,
  `${base}/avatar-6.png`,
  `${base}/avatar-7.png`,
  `${base}/avatar-8.png`,
];

function Wrapper() {
  return (
    <Flex w="100%" h={360} align="center" justify="center">
      <Marquee
        variant="circle"
        radius={240}
        tilt={-14}
        perspective={900}
        duration={22}
        pauseOnHover
        w="100%"
        h={360}
      >
        {avatars.map((src, index) => (
          <Avatar
            key={index}
            src={src}
            size={96}
            radius="xl"
            style={{
              border: '3px solid var(--mantine-color-body)',
              boxShadow: 'var(--mantine-shadow-lg)',
            }}
          />
        ))}
      </Marquee>
    </Flex>
  );
}

const code = `
import { Marquee } from '@gfazioli/mantine-marquee';
import { Avatar, Flex } from '@mantine/core';

const base = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars';
const avatars = [
  \`\${base}/avatar-1.png\`,
  \`\${base}/avatar-2.png\`,
  \`\${base}/avatar-3.png\`,
  \`\${base}/avatar-4.png\`,
  \`\${base}/avatar-5.png\`,
  \`\${base}/avatar-6.png\`,
  \`\${base}/avatar-7.png\`,
  \`\${base}/avatar-8.png\`,
];

function Demo() {
  return (
    <Flex w="100%" h={360} align="center" justify="center">
      <Marquee
        variant="circle"
        radius={240}
        tilt={-14}
        perspective={900}
        duration={22}
        pauseOnHover
        w="100%"
        h={360}
      >
        {avatars.map((src, index) => (
          <Avatar
            key={index}
            src={src}
            size={96}
            radius="xl"
            style={{
              border: '3px solid var(--mantine-color-body)',
              boxShadow: 'var(--mantine-shadow-lg)',
            }}
          />
        ))}
      </Marquee>
    </Flex>
  );
}
`;

export const circleShowcase: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};
