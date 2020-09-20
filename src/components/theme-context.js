import React from 'react'
export const ThemeContext = React.createContext(
  "olympic" // 默认值
);

const defaultStyle = {
  type: 'default',
  defaultBgColor: 'orange',
  defaultFontColor: 'green'
}

const lightStyleSheet = {
  type: 'light',
  defaultBgColor: '#ffffff',
  defaultFontColor: '#000000'
}

const darkStyleSheet = {
  type: 'dark',
  defaultBgColor: '#000000',
  defaultFontColor: '#ffffff'
}

function applyTheme(args = {}) {
  return Object.assign({}, defaultStyle, args)
}

function getStyle(style) {
  if(style === 'light') {
    return applyTheme(lightStyleSheet)
  } else if(style === 'dark') {
    return applyTheme(darkStyleSheet)
  } else {
    const themeStyle = style && style.theme === 'dark' ? darkStyleSheet : lightStyleSheet
    return applyTheme({ ...themeStyle, ...style })
  }
}

// const ThemeProvider = (props: ThemeProviderProps) => {
//   let style = getStyle(props.value)
//   return <ThemeContext.Provider value={style}>{props.children}</ThemeContext.Provider>
// }

// class ThemeConsumer extends React.Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {style => {
//           return this.props.children(style)
//         }}
//       </ThemeContext.Consumer>
//     )
//   }
// }


// // use
// let a = <Provider theme={{ theme: "dark" }}>
//   <Text />
// </Provider>

// let b = <Consumer>
//   {
//   (themeStyle) => {
//     return (
//       <Text style={{fontSize: themeStyle.defaultFontSize}}></Text>
//     )
//   }
//   }
// </Consumer>


// export const ThemeProvider = (props) => {
//   const style = getStyle(props.value)
//   return (
//     <div {...props} style={[
//       {backgroundColor: style.hiBgColor || "#ffffff"},
//       props.style
//     ]} key={style.type}>
//       <ThemeContext.Provider value={style}>{props.children}</ThemeContext.Provider>
//     </div>
//   )
// }

export class ThemeProvider extends React.Component {
  render() {
    const style = getStyle(this.props.value)
    return (
      <div {...this.props} name={style.type}>
        <ThemeContext.Provider value={style}>{this.props.children}</ThemeContext.Provider>
      </div>
    )
  }
}

export class ThemeConsumer extends React.Component {
  static defaultProps = {
    children: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  renderChildren(style) {
    let children = this.props.children(style)
    if(children && children.props && children.props.theme) {
      let partStyle = getStyle(children.props.theme)
      children = this.props.children(partStyle)
    }
    return children
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {style => {
          return this.renderChildren(style)
        }}
      </ThemeContext.Consumer>
    )
  }
}
