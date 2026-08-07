import { test as base, expect } from '@playwright/test';
import LogoutModal from '../components/logoutModal';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import WalletPage from '../pages/WalletPage';
import MarketOverviewPage from '../pages/MarketOverviewPage';
import CryptoPage from '../pages/CryptoPage';

type Fixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    logoutModal: LogoutModal;
    cryptoPage: CryptoPage;
    marketOverviewPage: MarketOverviewPage;
    walletPage: WalletPage;
};

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },

    walletPage: async ({ page }, use) => {
        await use(new WalletPage(page));
    },
    
       cryptoPage: async ({ page }, use) => {
        await use(new CryptoPage(page));
    },

    marketOverviewPage: async ({ page }, use) => {
    await use(new MarketOverviewPage(page));
},

    logoutModal: async ({ page }, use) => {
        await use(new LogoutModal(page));
    },
});

export { expect };