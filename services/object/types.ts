export type ObjectKeys<T extends Record<PropertyKey, unknown>> = `${Exclude<keyof T, symbol>}`;

export type ElementType<Type extends readonly unknown[]> = Type[number];
