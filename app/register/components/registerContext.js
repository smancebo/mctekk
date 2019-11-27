import React from 'react';

const RegisterContext = React.createContext({})

const withRegisterContext = (WrappedComponent) => class extends React.Component {
  render(){
    return (
      <RegisterContext.Consumer>
        {
          (context) => {
            return <WrappedComponent {...this.props} register={context} />
          }
        }
      </RegisterContext.Consumer>
    )
  }
}

export { RegisterContext, withRegisterContext }