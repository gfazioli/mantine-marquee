import type { MarqueeFactory } from '@gfazioli/mantine-marquee';
import type { StylesApiData } from '../components/styles-api.types';

export const MarqueeStylesApi: StylesApiData<MarqueeFactory> = {
  selectors: {
    root: 'Root element',
    stage: 'Isometric variant — the 3D viewport that establishes perspective',
    plane: 'Isometric variant — the tilted plane carrying the scroll loop',
  },

  vars: {
    root: {
      '--marquee-animation-direction': 'Animation direction',
      '--marquee-duration': 'Animation speed duration',
      '--marquee-fade-edge-size':
        'Fade edge size — controls linear gradient extent and ellipse clearance',
      '--marquee-fade-edge-size-x':
        'Fade edge horizontal size — controls left/right fade for rect mode and resolves from the first tuple value',
      '--marquee-fade-edge-size-y':
        'Fade edge vertical size — controls top/bottom fade for rect mode and resolves from the second tuple value',
      '--marquee-tilt': 'Isometric variant — plane inclination (rotateX angle)',
      '--marquee-perspective': 'Isometric variant — CSS perspective applied to the 3D stage',
      '--marquee-rotate': 'Isometric variant — in-plane rotation (rotateZ angle)',
      '--marquee-skew': 'Isometric variant — horizontal shear (skewX angle)',
      '--marquee-fade-angle':
        'Isometric variant — projected scroll-axis angle so the linear fade follows the rotated plane (computed)',
    },
  },

  //modifiers: [{ selector: 'root' }],
};
