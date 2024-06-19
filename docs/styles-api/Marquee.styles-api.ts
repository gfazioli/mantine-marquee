import type { MarqueeFactory } from '@gfazioli/mantine-marquee';
import type { StylesApiData } from '../components/styles-api.types';

export const MarqueeStylesApi: StylesApiData<MarqueeFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--marquee-animation-direction': 'Animation direction',
      '--marquee-direction': 'Horizontal or vertical direction',
      '--marquee-duration': 'Animation speed duration',
      '--marquee-gap': 'Space between elements',
      '--marquee-fade-edge-size': 'Fade edge size',
      '--marquee-fade-edge-color': 'Fade edge color',
    },
  },

  //modifiers: [{ selector: 'root' }],
};
