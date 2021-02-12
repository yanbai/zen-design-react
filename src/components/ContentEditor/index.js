import React from "react"
import "./index.scss"

function normalizeHtml(str) {
  return str && str.replace(/&nbsp;|\u202F|\u00A0/g, " ")
}

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
  editorRef = React.createRef()

  emitChange(e) {
    this.props.onChange(e)
  }

  shouldComponentUpdate(nextProps) {
    const el = this.editorRef.current
    if (normalizeHtml(el.innerHTML) === normalizeHtml(nextProps.html)) return false
    return true
  }

  render() {
    const { onChange, disabled, html, ...others } = this.props
    return (
      <div className="editor">
        <div
          className="editor-content"
          contentEditable="true"
          onInput={e => this.emitChange(e)}
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
