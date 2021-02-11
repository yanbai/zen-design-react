import React from "react"
import "./index.scss"
function replaceCaret(el) {
  // Place the caret at the end of the element
  const target = document.createTextNode("")
  el.appendChild(target)
  // do not move caret if element was not focused
  const isTargetFocused = document.activeElement === el
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    var sel = window.getSelection()
    if (sel !== null) {
      var range = document.createRange()
      range.setStart(target, target.nodeValue.length)
      range.collapse(true)
      sel.removeAllRanges()
      sel.addRange(range)
    }
    if (el instanceof HTMLElement) el.focus()
  }
}
class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isBold: false,
      content: "",
    }
    this.input = React.createRef()
  }

  toggleBold() {
    this.setState({
      content: `<b>${this.state.content}</b>`,
    })
  }
  getCurrentSelection() {
    const selection = window.getSelection()
    console.log(selection)
    const range = selection.getRangeAt(0)
    console.log(range)
  }
  componentDidUpdate() {
    replaceCaret(this.input.current)
  }
  handleChange(e) {
    this.setState({
      content: e.target.innerHTML,
    })
  }
  render() {
    return (
      <div className="editor">
        <div className="toolbar" onClick={() => this.toggleBold()}>
          bold
        </div>
        <div onClick={() => this.getCurrentSelection()}>show selection</div>
        <div
          className="editor-content"
          contentEditable="true"
          onInput={e => this.handleChange(e)}
          dangerouslySetInnerHTML={{
            __html: this.state.content,
          }}
          ref={this.input}
        ></div>
      </div>
    )
  }
  componentDidMount() {}
}
export default Editor
