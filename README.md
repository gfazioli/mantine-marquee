# Mantine Marquee Component

<p align="center">
  <img alt="" src="https://github.com/gfazioli/mantine-marquee/assets/432181/cf1917a3-e7eb-4ecb-a525-85ff933c601d">
</p>

---

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@gfazioli/mantine-marquee">
    <img alt="NPM version" src="https://img.shields.io/npm/v/%40gfazioli%2Fmantine-marquee?style=for-the-badge">
  </a>
  
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@gfazioli/mantine-marquee">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-marquee?style=for-the-badge">
  </a>

  <img alt="NPM License" src="https://img.shields.io/npm/l/%40gfazioli%2Fmantine-marquee?style=for-the-badge">

</p>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

It allows to create a marquee effect with any content.

You can find more components on the [Mantine Extensions Hub](https://mantine-extensions.vercel.app/) library.

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
  return (
    <Marquee h={200} w={200}>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
          <Marquee.Target>
            <Button>Marquee Back</Button>
          </Marquee.Target>
        </Paper>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
          <Marquee.Target>
            <Button>Marquee Front</Button>
          </Marquee.Target>
        </Paper>

    </Marquee>
  );
}
```



