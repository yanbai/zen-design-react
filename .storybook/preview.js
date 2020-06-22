import React from 'react'
import { addDecorator } from '@storybook/react';
import Center from './center';
import { addParameters } from '@storybook/react'
import '../src/assets/style/_base.scss'

addDecorator(storyFn => <Center>{storyFn()}</Center>);
addParameters({
  options: {
    showRoots: false,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
})
