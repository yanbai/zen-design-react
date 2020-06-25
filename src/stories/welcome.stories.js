import React from 'react';
import { Welcome } from '@storybook/react/demo';
export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => (
  <div style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center', color: '#4a5a6a' }}>
    <div className="column">Zen Design is a react UI component library</div>
    <div className="column">
      <a style={{margin: '0 20px', color: '#c41832'}} href="https://zendesigner.appspot.com/"><i class="fas fa-home"></i></a>
      <a style={{margin: '0 20px', color: '#c41832'}} href="https://github.com/yanbai/zen-design-react"><i className="fab fa-github"></i></a>
      <a style={{margin: '0 20px', color: '#c41832'}} href="https://www.npmjs.com/package/zendesign"><i className="fab fa-npm"></i></a>
    </div>
  </div>
);

ToStorybook.story = {
  name: 'Intro',
};
