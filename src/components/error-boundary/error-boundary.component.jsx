import React, { Component } from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./error-boundary.styles";

class ErrorBoundary extends Component {
  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error) {
    // process the error

    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    const { hasErrored } = this.state;
    const { children } = this.props;

    if (hasErrored) {
      return (
          <ErrorImageOverlay>
             <ErrorImageContainer imageUrl='https://i.imgur.com/QIxIKBH.png' />
             <ErrorImageText>Disculpanos esta página es un fantasma</ErrorImageText>
          </ErrorImageOverlay>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
