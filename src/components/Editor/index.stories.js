import React from 'react'
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs"
import Editor from './index'
import md from './index.md'
import { ThemeContext } from '../theme-context'
// import '../../assets/style/_preprocess.scss'

export default {
  title: 'Editor',
  decorators: [withKnobs]
}

const emoji = ["tired", "surprise", "smile-wink", "smile-beam", "sad-tear", "sad-cry", "meh-rolling-eyes", "meh-blank", "laugh-wink", "laugh-squint", "laugh-beam", "laugh", "kiss-wink-heart", "kiss-beam", "kiss", "grin-wink", "grin-tongue-wink", "grin-tongue-squint", "grin-tongue", "grin-tears", "grin-stars", "grin-squint-tears", "grin-squint", "grin-hearts", "grin-beam-sweat", "grin-beam", "grin-alt", "grin", "grimace", "frown-open", "flushed", "dizzy", "angry", "smile", "meh", "frown"]
const inlineStyle = {
  width: '50px'
}

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textareaValue: '',
      theme: 'central'
    }
  }
  render() {
    return (
      <>
        <h1>Editor</h1>
        <h3>Demo</h3>
        <p>
          Please change props with knobs
        </p>
        <Editor>
        </Editor>
      </>
    )
  }
}
export const editor = () => (
  <Demo />
)
editor.story = {
  parameters: {
    notes: {
      md
    }
  }
}
