import { Observer } from './types'

export const Observable = class Observable<T> {
  private observers: Observer<T>[] = []

  subscribe(observer: Observer<T>): void {
    this.observers.push(observer)
  }

  unsubscribe(observer: Observer<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer)
  }

  notify(state: T): void {
    this.observers.forEach((observer) => observer(state))
  }
}
