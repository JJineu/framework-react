import { TypedStorage } from './typed-storage';

export class NumberTypedStorage extends TypedStorage<number> {
  public increase(offset = 1) {
    const value = this.get() ?? 0;
    this.set(value + offset);
  }

  public decrease(offset = 1) {
    const value = this.get() ?? 0;
    this.set(value - offset);
  }
}
