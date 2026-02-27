# Mantine Marquee Component

<img alt="Mantine Marquee" src="https://github.com/gfazioli/mantine-marquee/blob/master/logo.jpeg" />

<div align="center">
  
  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-marquee?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-marquee)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-marquee?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-marquee)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-marquee?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-marquee)
  ![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-marquee?style=for-the-badge)

---

[<kbd> <br/> ❤️ If this component has been useful to you or your team, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

[Mantine Marquee](https://gfazioli.github.io/mantine-marquee/) is a versatile React component for the Mantine ecosystem that renders continuous, seamless scrolling of any child elements—cards, boxes, text, or avatars—either horizontally or vertically. It exposes ergonomic props to control behavior and presentation: reverse toggles direction, vertical switches axis, fadeEdges adds gradient masking with configurable size and color, pauseOnHover halts motion on interaction, and duration/gap/repeat fine‑tune speed, spacing, and loop continuity. 

The component fits neatly into layouts with explicit width/height and Mantine spacing props, and ships with dedicated stylesheets, including an optional @layer import for clean, scoped CSS integration. Example demos show simple colored boxes, mirrored horizontal tracks, stacked vertical tracks, and testimonial cards with avatars and ratings—all demonstrating how arbitrary React content can be animated into a polished marquee without custom animation code.

> [!note]
>
> → [Demo and Documentation](https://gfazioli.github.io/mantine-marquee/) → [Youtube Video](https://www.youtube.com/playlist?list=PL85tTROKkZrWyqCcmNCdWajpx05-cTal4) → [More Mantine Components](https://mantine-extensions.vercel.app/)


## Installation

```sh
npm install @gfazioli/mantine-marquee
```
or 

```sh
yarn add @gfazioli/mantine-marquee
```

After installation import package styles at the root of your application:

```tsx
import '@gfazioli/mantine-marquee/styles.css';
```

## Usage

```tsx
import { Marquee } from '@gfazioli/mantine-marquee';

function Demo() {
  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <Marquee {...props} w={560} h={300}>
      <BoxComponent bg="red">Hello World #1</BoxComponent>
      <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
      <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
      <BoxComponent bg="lime">Goodbye #4</BoxComponent>
    </Marquee>
  );
}
```
## Sponsor

<div align="center">

[<kbd> <br/> ❤️ If this component has been useful to you or your team, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)

</div>

Your support helps me:

- Keep the project actively maintained with timely bug fixes and security updates	
- Add new features, improve performance, and refine the developer experience	
- Expand test coverage and documentation for smoother adoption	
- Ensure long‑term sustainability without relying on ad hoc free time	
- Prioritize community requests and roadmap items that matter most

Open source thrives when those who benefit can give back—even a small monthly contribution makes a real difference. Sponsorships help cover maintenance time, infrastructure, and the countless invisible tasks that keep a project healthy.

Your help truly matters.

💚 [Become a sponsor](https://github.com/sponsors/gfazioli?o=esc) today and help me keep this project reliable, up‑to‑date, and growing for everyone.

---
https://github.com/user-attachments/assets/285cdda3-cd62-46a3-b028-816c34217530

---
[![Star History Chart](https://api.star-history.com/svg?repos=gfazioli/mantine-marquee&type=Timeline)](https://www.star-history.com/#gfazioli/mantine-marquee&Timeline)
