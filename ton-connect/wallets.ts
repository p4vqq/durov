import { isWalletInfoRemote, WalletInfoRemote, WalletsListManager } from '@tonconnect/sdk';

// Менеджер списка кошельков с кэшированием
const walletsListManager = new WalletsListManager({
    cacheTTLMs: Number(process.env.WALLETS_LIST_CAHCE_TTL_MS) // Время жизни кэша
});

// Получение списка удалённых кошельков
export async function getWallets(): Promise<WalletInfoRemote[]> {
    const wallets = await walletsListManager.getWallets();
    return wallets.filter(isWalletInfoRemote); // Фильтруем только удалённые кошельки
}
