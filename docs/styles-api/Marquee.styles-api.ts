import type { MarqueeFactory } from '@gfazioli/mantine-marquee';
import type { StylesApiData } from '../components/styles-api.types';

export const MarqueeStylesApi: StylesApiData<MarqueeFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--marquee-animation-direction': 'Animation direction',
      '--marquee-duration': 'Animation speed duration',
      '--marquee-gap': 'Space between elements',
      '--marquee-fade-edge-size':
        'Fade edge size — controls linear gradient extent and ellipse clearance',
      '--marquee-fade-edge-size-x':
        'Fade edge horizontal size — controls left/right fade for rect mode and resolves from the first tuple value',
      '--marquee-fade-edge-size-y':
        'Fade edge vertical size — controls top/bottom fade for rect mode and resolves from the second tuple value',
    },
  },

  //modifiers: [{ selector: 'root' }],
};
