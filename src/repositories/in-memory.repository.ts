import type { BaseEntity } from '../types/base-entity.ts';
import type { IRepository } from '../types/repository.ts';

export class InMemoryRepository<T extends BaseEntity> implements IRepository<T> {
    protected items: T[] = [];

    create(item: T): T {
        this.items.push(item);
        return item;
    }

    update(id: string, item: Partial<T>): T | null {
        const index  = this.items.findIndex(existingItem => existingItem.id === id);
        if (index !== -1) {
            const existingItem = this.items[index];
            if (existingItem === undefined) {
                return null;
            }
            const updatedItem = {
                ...existingItem,
                ...item,
                id: existingItem.id,
                updatedAt: new Date() } as T;
            this.items[index] = updatedItem;
            return updatedItem;
        }
        return null;
    }

    findById(id: string): T | null {
        return this.items.find(item => item.id === id) || null;
    }

    findAll(): T[] {
        return [...this.items];
    }

    deleteById(id: string): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}