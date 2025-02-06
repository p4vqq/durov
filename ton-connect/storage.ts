import { IStorage } from '@tonconnect/sdk';

// Временное хранилище (будет заменено на Redis позже)
const storage = new Map<string, string>();

// Класс для хранения данных подключений
export class TonConnectStorage implements IStorage {
    constructor(private readonly chatId: number) {} // Идентификатор чата пользователя

    // Генерация ключа для каждого пользователя
    private getKey(key: string): string {
        return this.chatId.toString() + key; // Префикс ключа для разных пользователей
    }

    // Удаление элемента из хранилища
    async removeItem(key: string): Promise<void> {
        storage.delete(this.getKey(key));
    }

    // Сохранение элемента в хранилище
    async setItem(key: string, value: string): Promise<void> {
        storage.set(this.getKey(key), value);
    }

    // Получение элемента из хранилища
    async getItem(key: string): Promise<string | null> {
        return storage.get(this.getKey(key)) || null;
    }
}
