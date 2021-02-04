import React from 'react'
import './index.scss'

class Editor extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isBold: false
    }
  }
  render() {
    return (
      <div className="editor" contentEditable>
        <div className="toolbar">bold</div>
        this is a editor
      </div>
    )
  }
}
export default Editor
