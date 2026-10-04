import type {BaseEntity} from './base-entity.ts';

export enum EntityStatus {
    Active = 'ACTIVE',
    Archived = 'ARCHIVED',
    Draft = 'DRAFT',
}

export interface MedicineEntity extends BaseEntity {
    title: string;
    price: number;
    dosageMg: number;
    isPrescriptionRequired: boolean;
    expirationDate: Date;
    status: EntityStatus;
}