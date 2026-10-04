import type { MedicineEntity } from '../types/medicine.entity.ts';
import { InMemoryRepository } from './in-memory.repository.js';
import { FrozenEntity } from '../decorators/frozen-entity.decorator.js';
import { LogExecutionTime } from '../decorators/log-execution-time.decorator.js';

@FrozenEntity
export class MedicineRepository extends InMemoryRepository<MedicineEntity> {

    @LogExecutionTime
    override create(item: MedicineEntity): MedicineEntity {
        return super.create(item);
    }

    @LogExecutionTime
    override update(id: string, item: Partial<MedicineEntity>): MedicineEntity | null {
        return super.update(id, item);
    }

    @LogExecutionTime
    override findAll(): MedicineEntity[] {
        return super.findAll();
    }
}