import React from "react"
import "./index.scss"
function replaceCaret(el) {
  debugger
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

// ;<ContentEditable
//   innerRef={this.contentEditable}
//   html={this.state.html} // innerHTML of the editable div
//   disabled={false} // use true to disable editing
//   onChange={this.handleChange} // handle innerHTML change
//   tagName="article" // Use a custom HTML tag (uses a div by default)
// />

// editable div中
// dangerouslySetInnerHTML 相当于 value
// innerHTML相当于get value
// props.html 外部传入的 value
// 基本逻辑
// dangerouslySetInnerHTML = {props.html}
// onChange = e=>setState({html: e.target.innerHTML})

class ContentEditor extends React.Component {
  constructor(props) {
    super(props)
    this.editorRef = React.createRef()
  }

  emitChange(originalEvt) {
    const el = this.editorRef.current
    const html = el.innerHTML

    if (this.props.onChange && html) {
      const e = Object.assign({}, originalEvt, {
        target: {
          value: html,
        },
      })
      this.props.onChange(e)
    }
  }

  componentDidUpdate() {
    const el = this.editorRef.current
    replaceCaret(el)
  }

  render() {
    const { onChange, disabled, html, ...others } = this.props
    return (
      <div className="editor">
        <div
          className="editor-content"
          contentEditable="true"
          // onInput={e=>this.emitChange(e)}
          onInput={onChange}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
          ref={this.editorRef}
        ></div>
      </div>
    )
  }
}

export default ContentEditor
