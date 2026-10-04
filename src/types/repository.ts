import type { BaseEntity } from './base-entity.ts';
import type { UpdateDTO } from './dto.ts';

export interface IRepository<T extends BaseEntity> {
    create(item: T): T;
    update(id: string, item: UpdateDTO<T>): T | null;
    findById(id: string): T | null;
    findAll(): T[];
    deleteById(id: string): boolean;
}