import type { EntityStatus, MedicineEntity } from "./medicine.entity.js";

export type CreateDTO<T> = Omit<T, "id" | "createdAt" | "updatedAt">;

export type UpdateDTO<T> = Partial<CreateDTO<T>>;

export type EntitySummary<T> = Pick<MedicineEntity, "id" | "title" | "price">;

export type EntityAnalytics<T> = Record<EntityStatus, number>;