import React from 'react'
import PropTypes from 'prop-types'

const errorRules = {
  isEmpty: {
    rule(value) {
      return value.length > 0
    },
    errorMessage: 'This is required',
    shouldTriggerWhenBlur: true
  }
}

function ErrorHandler(WrappedComponent) {
  class ErrorHandler extends React.Component{
    constructor(props) {
      super(props)
      this.formElement = React.createRef()
      this.state = {
        isError: false,
        errorMessage: ''
      }
    }

    handleBlur(e) {
      const {errorRules} = this.props
      for(let k in errorRules) {
        if(errorRules[k].shouldTriggerWhenBlur) {
          if(!errorRules[k].rule(e.target.value)) {
            this.setState({
              isError: true,
              errorMessage: errorRules[k].errorMessage
            })
            break;
          }
        }
      }
    }

    handleFocus(e) {
      this.setState({
        isError: false
      })
    }

    componentDidMount() {
      if(!this.formElement) {
        console.error('No formElement is found')
        return
      }
      this.formElement.current.onblur = (e) => this.handleBlur(e)
      this.formElement.current.onfocus = (e) => this.handleFocus(e)
    }

    render() {
      const {
        errorRules,
        ...rest
      } = this.props
      return (
        <WrappedComponent
          isError={this.state.isError}
          errorMessage={this.state.errorMessage}
          ref={this.formElement}
          {...rest}
        />
      )
    }
  }

  ErrorHandler.propTypes = {
    errorRules: PropTypes.objectOf(function(ob, key, componentName, location, propFullName) {
      if(Object.keys(ob[key]).sort().join(',') !== 'errorMessage,rule,shouldTriggerWhenBlur') {
        return new Error(
          'Invalid prop `' + propFullName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        )
      }
    })
  }

  ErrorHandler.defaultProps = {
    errorRules: {
      isEmpty: errorRules.isEmpty
    }
  }

  return ErrorHandler
}

export {
  errorRules
}

export default ErrorHandler
