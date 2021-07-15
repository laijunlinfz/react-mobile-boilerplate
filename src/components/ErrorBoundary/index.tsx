import { Component, ErrorInfo, ReactNode } from "react";

type MyProps = { children: ReactNode };

type MyState = {
  error: null | Error;
  errorInfo: null | ErrorInfo;
};

export default class ErrorBoundary extends Component<MyProps, MyState> {
  state: MyState = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  getErrorContent = (): ReactNode => {
    const { errorInfo, error } = this.state;
    return (
      <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: "pre-wrap", marginTop: "100px" }}>
          {error!.toString()}
          <br />
          {errorInfo!.componentStack}
        </details>
      </div>
    );
  };

  render(): ReactNode {
    return this.state.errorInfo ? this.getErrorContent() : this.props.children;
  }
}
