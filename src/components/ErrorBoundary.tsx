import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught application error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.hash = '';
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050508] text-stone-100 flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-[#0d0f17] border border-rose-500/30 rounded-3xl p-8 shadow-2xl text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-7 h-7" />
            </div>
            
            <div>
              <h1 className="font-serif text-2xl font-bold text-stone-100 mb-2">
                Forensic Archive Stalled
              </h1>
              <p className="text-stone-400 text-sm leading-relaxed">
                An unexpected interface state occurred while rendering this module. You can reload to restore the session.
              </p>
            </div>

            {this.state.error && (
              <div className="bg-[#050508] rounded-xl p-3 border border-white/5 text-left overflow-x-auto">
                <p className="text-xs font-mono text-rose-300 break-all">
                  {this.state.error.message || 'Unknown runtime exception'}
                </p>
              </div>
            )}

            <button
              onClick={this.handleReload}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-stone-950 font-semibold text-sm transition-all shadow-lg shadow-rose-500/20 flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Archive</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
