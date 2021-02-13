import React from 'react'
import AntCheckbox from './checkbox'
import "./index.scss"


export default class AntCheckboxGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const {
      options,
      ...others
    } = this.props

    return (
      options.map(item => (
        <AntCheckbox key={item}>{item}</AntCheckbox>
      ))
    )
  }
}