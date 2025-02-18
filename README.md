# Mantine Marquee Component

<div align="center">
  
  ![image](https://github.com/gfazioli/mantine-marquee/assets/432181/d9d37b48-ab49-44c7-9315-4ad9a48e70f8)

</p>

---

<div align="center">
  
  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-marquee?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-marquee)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-marquee?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-marquee)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-marquee?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-marquee)
  ![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-marquee?style=for-the-badge)

</div>

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



