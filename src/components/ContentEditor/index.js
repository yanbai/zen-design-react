import React from "react"
import "./index.scss"

function normalizeHtml(str) {
  return str && str.replace(/&nbsp;|\u202F|\u00A0/g, " ")
}

function replaceCaret(el) {
  // debugger
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
  lastHtml = this.props.html

  constructor(props) {
    super(props)
    this.editorRef = React.createRef()
  }

  emitChange(originalEvt) {
    const el = this.editorRef.current
    const html = el.innerHTML

    if (this.props.onChange && html !== this.lastHtml) {
      const e = Object.assign({}, originalEvt, {
        target: {
          innerHTML: html,
        },
      })
      this.props.onChange(e)
    }
    this.lastHtml = html
  }

  componentDidUpdate() {
    const el = this.editorRef.current
    this.lastHtml = this.props.html
    // replaceCaret(el)
  }

  shouldComponentUpdate(nextProps) {
    const { props } = this
    const el = this.editorRef.current
    if (normalizeHtml(nextProps.html) !== normalizeHtml(el.innerHTML)) return true
    return (
      props.disabled !== nextProps.disabled ||
      props.tagName !== nextProps.tagName ||
      props.className !== nextProps.className
    )
  }

  render() {
    const { onChange, disabled, html, ...others } = this.props
    return (
      <div className="editor">
        <div
          className="editor-content"
          contentEditable="true"
          onInput={e => this.emitChange(e)}
          // onInput={onChange}
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
