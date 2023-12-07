import { ObjectKeys } from './types';

export function objectKeys<Type extends Record<PropertyKey, unknown>>(obj: Type): Array<ObjectKeys<Type>> {
  return Object.keys(obj) as Array<ObjectKeys<Type>>;
}
