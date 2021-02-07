import React from "react"
import "./index.scss"

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isBold: false,
      content: "",
    }
  }

  toggleBold() {
    console.log(this.state)
    this.setState({
      content: `<b>${this.state.content}</b>`,
    })
  }

  render() {
    return (
      <div className="editor">
        <div className="toolbar" onClick={() => this.toggleBold()}>
          bold
        </div>
        <div
          className="editor-content"
          contentEditable
          dangerouslySetInnerHTML={{
            __html: this.state.content,
          }}
          onInput={e => {
            console.log(e.target.innerHTML)
            this.setState({ content: e.target.innerHTML })
          }}
          onBlur={e => {
            console.log(e.target.innerHTML)
            this.setState({ content: e.target.innerHTML })
          }}
        ></div>
      </div>
    )
  }
  componentDidMount() {}
}
export default Editor
