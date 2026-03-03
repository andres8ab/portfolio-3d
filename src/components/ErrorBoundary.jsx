import { Component } from 'react';

/**
 * Catches crashes in the 3D canvas so the rest of the page still renders.
 * Logs the error for debugging (check DevTools Console).
 */
export class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[Canvas Error]', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="flex items-center justify-center w-full h-full min-h-[400px] text-secondary text-sm">
          <span>3D view failed to load. Check console for details.</span>
        </div>
      );
    }
    return this.props.children;
  }
}
