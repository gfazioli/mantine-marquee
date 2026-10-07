export interface PackageData {
  /** Package name as in npm, for example, `mantine-extension-template` */
  packageName: string;

  /** Description of the package, displayed below the title in documentation */
  packageDescription: string;

  /** Link to the documentation mdx file, used in "Edit this page button" */
  mdxFileUrl: string;

  /** Link to the repository on GitHub, used in header github icon and in "View source code button" */
  repositoryUrl: string;

  /** Link to the license file */
  licenseUrl?: string;

  /** Information about the author of the package */
  author: {
    /** Package author name, for example, `John Doe` */
    name: string;

    /** Author GitHub username, for example, `rtivital` */
    githubUsername: string;
  };
}

export const PACKAGE_DATA: PackageData = {
  packageName: '@gfazioli/mantine-marquee',
  packageDescription:
    'Mantine component for seamless, GPU-accelerated infinite-scrolling loops — a drop-in superset of the core Marquee with responsive props, masked or colored fade edges, a keyboard-focus pause, and 3D isometric and circle variants.',
  mdxFileUrl: 'https://github.com/gfazioli/mantine-marquee/blob/master/docs/docs.mdx',
  repositoryUrl: 'https://github.com/gfazioli/mantine-marquee',
  licenseUrl: 'https://github.com/gfazioli/mantine-marquee/blob/master/LICENSE',
  author: {
    name: 'Giovambattista Fazioli',
    githubUsername: 'gfazioli',
  },
};
