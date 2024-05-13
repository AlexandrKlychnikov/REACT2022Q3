import React, { ErrorInfo } from 'react';

interface IErrorBoudary {
  children?: React.ReactNode;
  isError: boolean;
}

export class ErrorBoundary extends React.Component<IErrorBoudary> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError || this.props.isError) {
      return <h1 data-testid="error-alert">Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
