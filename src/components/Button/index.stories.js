import React from 'react'
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs"
import Button from './index'
import md from './index.mdx'
import { ThemeContext } from '../theme-context'
import 'assets/style/_preprocess.scss'

export default {
  title: 'Button',
  decorators: [withKnobs]
}

const emoji = ["tired", "surprise", "smile-wink", "smile-beam", "sad-tear", "sad-cry", "meh-rolling-eyes", "meh-blank", "laugh-wink", "laugh-squint", "laugh-beam", "laugh", "kiss-wink-heart", "kiss-beam", "kiss", "grin-wink", "grin-tongue-wink", "grin-tongue-squint", "grin-tongue", "grin-tears", "grin-stars", "grin-squint-tears", "grin-squint", "grin-hearts", "grin-beam-sweat", "grin-beam", "grin-alt", "grin", "grimace", "frown-open", "flushed", "dizzy", "angry", "smile", "meh", "frown"]
const inlineStyle = {
  width: '50px'
}
const inputStyle = {
  'color': '#4a5a6a',
  'fontWeight': 500,
	'fontSize': '12px',
	'borderRadius': 0,
	'lineHeight': '16px',
	'backgroundColor': '#fff',
	'padding': '12px 16px',
	'width': '100%',
	'boxSizing': 'border-box',
  'border': '1px solid #4a5a6a',
  'height': '40px'
}

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textareaValue: '',
      theme: 'central'
    }
  }
  addEmoji(value) {
    let originalValue = this.state.textareaValue
    let newValue = originalValue + '|' + value
    this.setState({
      textareaValue: newValue,
    })
  }
  render() {
    return (
      <>
        <h1>Button</h1>
        <h3>Demo</h3>
        <p>
          Please change props with knobs
        </p>
        <ThemeContext.Provider value={this.state.theme}>
          <div className="column">
          <Button level={select("ButtonLevels", ['primary', 'secondary'], "primary")}
                  disabled={boolean("Disabled", false)}
                  block={boolean("Block", false)}
                  ghost={boolean("Ghost", false)}
                  icon={text("Icon", 'shopping-cart')}
                  href={text("Href", '')}
          >
            {text("Label", "Hello World")}
          </Button>
          </div>
          <div className="column">
          <Button level="primary"
                  ghost={true}
          >
            {text("Label", "Hello World")}
          </Button>
          </div>
          <div className="column">
          <Button level="secondary"
          >
            {text("Label", "Hello World")}
          </Button>
          </div>
          <div className="column">
          <Button level="secondary"
                  ghost={true}
          >
            {text("Label", "Hello World")}
          </Button>
          </div>
        </ThemeContext.Provider>
        <h3>Small Game</h3>
        emoji
        <div className="column">
          {emoji.map((item, index) => (
            <Button
              key={index}
              level="primary"
              ghost={true}
              icon={item}
              iconType='regular'
              style={inlineStyle}
              title={item}
              onFocus={(e) => this.addEmoji(item)}
            />
          ))}
          <div className="column">
            <div style={inputStyle}>
            {
              this.state.textareaValue &&
              this.state.textareaValue.split('|').map((item, index) => (
                <span key={index}><i className={'fa-'+item + ' far'} /></span>
              ))
            }
            </div>
          </div>
          <h6>Value output:</h6>
          <div className="column">{this.state.textareaValue}</div>
        </div>
      </>
    )
  }
}
export const button = () => (
  <Demo />
)
button.story = {
  parameters: {
    notes: {
      md
    }
  }
}
