import { test } from '../../fixtures/authFixtures';

test.describe('Wallet Feature', () => {

    test.beforeEach(async ({ authenticatedPage, walletPage }) => {
        // authenticatedPage triggers the login fixture
        await walletPage.navigateToWallet();
    });

    test('Wallet page should load successfully', async ({ walletPage }) => {
        await walletPage.verifyWalletLoaded();
    });

    test('User should switch to Fiat Wallet successfully', async ({ walletPage }) => {
        await walletPage.openFiatWallet();
        await walletPage.verifyFiatWalletLoaded();
    });

    test('User should switch to Crypto Wallet successfully', async ({ walletPage }) => {
        await walletPage.openCryptoWallet();
        await walletPage.verifyCryptoWalletLoaded();
    });

    test('Transaction History should be displayed', async ({ walletPage }) => {
        await walletPage.verifyTransactionHistory();
    });

});