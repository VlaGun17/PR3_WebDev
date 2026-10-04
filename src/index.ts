import type {
    MedicineEntity,
    UpdateDTO,
    ApiResponse,
    EntityAnalytics 
} from './types/index.js';
import { EntityStatus } from './types/index.js';
import { MedicineRepository } from './repositories/index.js';

function main() {
    console.log('=== ЗАПУСК СИСТЕМИ УПРАВЛІННЯ АПТЕКОЮ ===\n');

    const medicineRepo = new MedicineRepository();

    console.log('--- 1. Додавання медикаментів ---');
    const med1 = medicineRepo.create({
        id: 'med-1',
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Парацетамол 500мг',
        price: 50.00,
        dosageMg: 500,
        isPrescriptionRequired: false,
        expirationDate: new Date('2025-12-31'),
        status: EntityStatus.Active
    });

    const med2 = medicineRepo.create({
        id: 'med-2',
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Амоксицилін 250мг',
        price: 80.00,
        dosageMg: 250,
        isPrescriptionRequired: true,
        expirationDate: new Date('2024-06-30'),
        status: EntityStatus.Archived
    });

    const med3 = medicineRepo.create({
        id: 'med-3',
        createdAt: new Date(),
        updatedAt: new Date(),
        title: 'Ібупрофен 400мг',
        price: 60.00,
        dosageMg: 400,
        isPrescriptionRequired: false,
        expirationDate: new Date('2023-11-30'),
        status: EntityStatus.Draft
    });

    console.log(`\nДодано сутностей: ${medicineRepo.findAll().length}\n`);

    console.log('--- 2. Оновлення даних (UpdateDto) ---');
    const updatePatch: UpdateDTO<MedicineEntity> = {
        price: 52.00,
        status: EntityStatus.Archived
    };

    const updatedMed = medicineRepo.update('med-1', updatePatch);
    console.log('Оновлена сутність:', updatedMed);

    console.log('\n--- 3. Підрахунок аналітики статусу ---');
    const allMedicines = medicineRepo.findAll();

    const analytics: EntityAnalytics<MedicineEntity> = {
        [EntityStatus.Active]: allMedicines.filter(m => m.status === EntityStatus.Active).length,
        [EntityStatus.Archived]: allMedicines.filter(m => m.status === EntityStatus.Archived).length,
        [EntityStatus.Draft]: allMedicines.filter(m => m.status === EntityStatus.Draft).length
    };

    console.log('Статистика сутностей:', analytics);

    console.log('\n--- 4. Формування ApiResponse ---');
    const response: ApiResponse<MedicineEntity[]> = {
        data: allMedicines,
        success: true,
        timestamp: new Date(),
        meta: {
            totalCount: allMedicines.length,
            analytics: analytics
        }
    };

    console.log('Об’єкт ApiResponse:', JSON.stringify(response, null, 2));
}

main();