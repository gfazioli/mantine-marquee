import { Marquee } from '@gfazioli/mantine-marquee';
import { Anchor, Paper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const links = ['Mantine', 'Marquee', 'Split Pane', 'Window', 'Onboarding Tour', 'Json Tree'];

function Demo() {
  return (
    <Marquee pauseOnHover fadeEdges duration={30}>
      {links.map((label) => (
        <Paper key={label} withBorder radius="md" px="lg" py="sm">
          <Anchor href="#pause-on-hover-and-focus">{label}</Anchor>
        </Paper>
      ))}
    </Marquee>
  );
}

const code = `
import { Marquee } from '@gfazioli/mantine-marquee';
import { Anchor, Paper } from '@mantine/core';

const links = ['Mantine', 'Marquee', 'Split Pane', 'Window', 'Onboarding Tour', 'Json Tree'];

function Demo() {
  return (
    <Marquee pauseOnHover fadeEdges duration={30}>
      {links.map((label) => (
        <Paper key={label} withBorder radius="md" px="lg" py="sm">
          <Anchor href="#pause-on-hover-and-focus">{label}</Anchor>
        </Paper>
      ))}
    </Marquee>
  );
}
`;

export const pauseOnHover: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
