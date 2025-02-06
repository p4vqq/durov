import TonConnect from '@tonconnect/sdk';
import { TonConnectStorage } from './storage';
import * as process from 'process';

// Создание коннектора для конкретного пользователя
export function getConnector(chatId: number): TonConnect {
    return new TonConnect({
        manifestUrl: process.env.MANIFEST_URL!, // URL манифеста
        storage: new TonConnectStorage(chatId) // Хранилище для данного пользователя
    });
}
