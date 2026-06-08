import { generateDeclarations } from 'mantine-docgen-script';
import fs from 'node:fs';
import path from 'node:path';

const getComponentPath = (componentPath: string) =>
  path.join(process.cwd(), 'package/src', componentPath);

const outputPath = path.join(process.cwd(), 'docs');

/* ------------------------------------------------------------------ */
/*  Post-processing: re-inject `variant`                                */
/* ------------------------------------------------------------------ */

// `variant` lives in the Marquee FACTORY payload (Mantine special-cases it) and
// `mantine-docgen-script` hard-excludes it upstream via DEFAULT_EXCLUDE_PROPS —
// options can only ADD exclusions, not remove them. Inject it manually so the
// Props tab documents the display variant. (.then(): tsx runs this file as CJS,
// so no top-level await.)

function injectVariant() {
  const docgenPath = path.join(outputPath, 'docgen.json');
  const docgen = JSON.parse(fs.readFileSync(docgenPath, 'utf-8'));

  if (!docgen.Marquee?.props) {
    throw new Error(
      'docgen.json is missing "Marquee.props" — did generateDeclarations change its output shape?'
    );
  }

  docgen.Marquee.props.variant = {
    defaultValue: "'default'",
    description:
      'Display variant: <code>default</code> (2D scroll), <code>isometric</code> ' +
      '(2D scroll on a plane tilted in 3D space), or <code>circle</code> (children ' +
      'distributed around a rotating 3D ellipse ring).',
    name: 'variant',
    required: false,
    type: {
      name: '"default" | "isometric" | "circle"',
      raw: '"default" | "isometric" | "circle" | undefined',
      value: [
        { value: 'undefined' },
        { value: '"default"' },
        { value: '"isometric"' },
        { value: '"circle"' },
      ],
    },
  };

  // Keep the Props table alphabetically sorted (the injected key would
  // otherwise land last).
  docgen.Marquee.props = Object.fromEntries(
    Object.entries(docgen.Marquee.props).sort(([a], [b]) => a.localeCompare(b))
  );

  fs.writeFileSync(docgenPath, JSON.stringify(docgen, null, 2));
  // eslint-disable-next-line no-console
  console.log('docgen.json post-processed: `variant` injected for Marquee');
}

generateDeclarations({
  componentsPaths: [getComponentPath('Marquee.tsx')],
  tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),
  outputPath,
})
  .then(injectVariant)
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('docgen failed:', error);
    process.exit(1);
  });
