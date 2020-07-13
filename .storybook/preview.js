import React from 'react'
import '../src/assets/style/_base.scss'
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import centered from '@storybook/addon-centered/react';
import { create } from '@storybook/theming';
import Center from './center';

const theme = create({
  brandTitle: 'Zen Design'
});

// Customize the UI a bit
addParameters({
  options: {
    theme,
    // showPanel: false,
    panelPosition: 'right',
    storySort: (a, b) => {
      if (b[0].includes('welcome') || b[0].includes('themify')) {
        return true;
      }

      return a > b;
    }
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

// Custom center decorator that supports docs extensions
// addDecorator((...args) => {
//   const params = (new URL(document.location)).searchParams;
//   const isInDockView = params.get('viewMode') === 'docs';

//   if (isInDockView) {
//     return args[0]();
//   }

//   return centered(...args);
// });
addDecorator(storyFn => <Center>{storyFn()}</Center>);

// Add all our decorators
addDecorator(withKnobs);

const loadStories = () => {
  return [
    // Ensure we load Welcome First
    // require.context('../docs', true, /Intro.story.md/),
    require.context('../src', true, /\.story\.(js|jsx|ts|tsx|mdx)$/)
  ];
}

configure(loadStories(), module);
