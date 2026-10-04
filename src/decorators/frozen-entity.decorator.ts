export function FrozenEntity<T extends new (...args: any[]) => object>(constructor: T) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
    return constructor;
}