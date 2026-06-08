import { Marquee, type MarqueeProps } from '@gfazioli/mantine-marquee';
import { Box, Flex } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const SITES = [
  { label: 'Findergit', href: 'https://www.findergit.app/', bg: 'red' },
  { label: 'Netfox', href: 'https://netfox.app', bg: 'cyan' },
  { label: 'Octoscope', href: 'https://gfazioli.github.io/octoscope/', bg: 'blue' },
  { label: 'MEH', href: 'https://mantine-extensions.vercel.app', bg: 'grape' },
  { label: 'Clock', href: 'https://gfazioli.github.io/mantine-clock', bg: 'lime' },
  { label: 'Scene', href: 'https://gfazioli.github.io/mantine-scene', bg: 'teal' },
  { label: 'Book', href: 'https://gfazioli.github.io/mantine-book', bg: 'orange' },
  { label: 'Marquee', href: 'https://gfazioli.github.io/mantine-marquee', bg: 'pink' },
];

const cardCss = `
  .circle-card {
    transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
  }
  .circle-card:hover {
    transform: scale(1.12);
    filter: brightness(1.12);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
`;

function Wrapper(props: MarqueeProps) {
  return (
    <>
      <style>{cardCss}</style>
      <Flex w="100%" h={440} align="center" justify="center">
        <Marquee {...props} variant="circle" w="100%" h={440}>
          {SITES.map((site) => (
            <Box
              key={site.label}
              component="a"
              href={site.href}
              target="_blank"
              rel="noreferrer"
              className="circle-card"
              bg={site.bg}
              w={150}
              h={90}
              c="white"
              fw={600}
              style={{
                display: 'grid',
                placeItems: 'center',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              {site.label}
            </Box>
          ))}
        </Marquee>
      </Flex>
    </>
  );
}

const code = `
import { Marquee } from '@gfazioli/mantine-marquee';
import { Box } from '@mantine/core';

const SITES = [
  { label: 'Findergit', href: 'https://www.findergit.app/', bg: 'red' },
  { label: 'Netfox', href: 'https://netfox.app', bg: 'cyan' },
  { label: 'Octoscope', href: 'https://gfazioli.github.io/octoscope/', bg: 'blue' },
  { label: 'MEH', href: 'https://mantine-extensions.vercel.app', bg: 'grape' },
  { label: 'Clock', href: 'https://gfazioli.github.io/mantine-clock', bg: 'lime' },
  { label: 'Scene', href: 'https://gfazioli.github.io/mantine-scene', bg: 'teal' },
  { label: 'Book', href: 'https://gfazioli.github.io/mantine-book', bg: 'orange' },
  { label: 'Marquee', href: 'https://gfazioli.github.io/mantine-marquee', bg: 'pink' },
];

const cardCss = \`
  .circle-card {
    transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
  }
  .circle-card:hover {
    transform: scale(1.12);
    filter: brightness(1.12);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
\`;

function Demo() {
  return (
    <>
      <style>{cardCss}</style>
      <Marquee variant="circle"{{props}}>
        {SITES.map((site) => (
          <Box
            key={site.label}
            component="a"
            href={site.href}
            target="_blank"
            rel="noreferrer"
            className="circle-card"
            bg={site.bg}
            w={150}
            h={90}
            c="white"
            fw={600}
            style={{ display: 'grid', placeItems: 'center', borderRadius: '8px', textDecoration: 'none' }}
          >
            {site.label}
          </Box>
        ))}
      </Marquee>
    </>
  );
}
`;

export const circle: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      type: 'number',
      prop: 'radius',
      initialValue: 250,
      libraryValue: 200,
      min: 80,
      max: 420,
      step: 10,
    },
    {
      type: 'number',
      prop: 'tilt',
      initialValue: -15,
      libraryValue: 45,
      min: -85,
      max: 85,
      step: 1,
    },
    {
      type: 'number',
      prop: 'perspective',
      initialValue: 700,
      libraryValue: 800,
      min: 200,
      max: 3000,
      step: 50,
    },
    {
      prop: 'duration',
      type: 'number',
      initialValue: 16,
      libraryValue: 20,
      step: 0.1,
      min: 0.1,
      max: 60,
    },
    { prop: 'reverse', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'pauseOnHover', type: 'boolean', initialValue: true, libraryValue: false },
  ],
};
