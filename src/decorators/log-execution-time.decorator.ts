export function LogExecutionTime(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const duration = (performance.now() - start).toFixed(2);
        console.log(`[BENCHMARK] Метод ${propertyKey} виконано за ${duration} ms.`);
        return result;
    };

    return descriptor;
}