import { History, createBrowserHistory, LocationState } from 'history';

enum Action {
  Push = 'PUSH',
  Replace = 'REPLACE',
  Pop = 'POP'
}

class HistoryInstance {
  constructor() {
    this.history = createBrowserHistory();
  }

  readonly history: History

  replace(path: string, state?: LocationState): void {
    this.history.replace(path, state);
  }

  push(path: string, state?: LocationState): void {
    this.history.push(path, state);
  }

  goBack(num?: number): void {
    this.history.go(num || -1);
  }

  isPushAction(): boolean {
    return this.history.action === Action.Push;
  }

  isPopAction(): boolean {
    return this.history.action === Action.Pop;
  }

  isReplaceAction(): boolean {
    return this.history.action === Action.Replace;
  }
};

export default new HistoryInstance();
