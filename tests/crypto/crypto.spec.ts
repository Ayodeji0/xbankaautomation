import { test } from '../../fixtures/authFixtures';
import {CryptoData } from '../../testData/cryptoData';

test.describe('Crypto Feature', () => {

    test.beforeEach(async ({ authenticatedPage, cryptoPage }) => {
        await cryptoPage.navigateToCrypto();
    });

    test('Crypto page should load successfully', async ({ cryptoPage }) => {
        await cryptoPage.verifyCryptoLoaded();
    });

    test('User should switch to Convert tab successfully', async ({ cryptoPage }) => {
        await cryptoPage.openConvertTab();
        await cryptoPage.verifyConvertLoaded();
    });

    test('User should switch to Sell successfully', async ({ cryptoPage }) => {
        await cryptoPage.openSell();
        await cryptoPage.verifySellLoaded();
    });


    test('Get Quote button should be displayed', async ({ cryptoPage }) => {
        await cryptoPage.verifyGetQuoteButton();
    });

    test('Recent Transaction section should be displayed', async ({ cryptoPage }) => {
        await cryptoPage.verifyRecentTransaction();
    });

    test('How to Buy section should be displayed', async ({ cryptoPage }) => {
        await cryptoPage.verifyHowToBuySection();
    });

    test('Confirm Purchase modal should display successfully', async ({ cryptoPage }) => {
        await cryptoPage.enterAmount(CryptoData.amount.purchase);
        await cryptoPage.clickGetQuote();
        await cryptoPage.verifyPurchaseModal();
    });

    test('User should cancel purchase successfully', async ({ cryptoPage }) => {
        await cryptoPage.enterAmount('1000');
        await cryptoPage.clickGetQuote();
        await cryptoPage.cancelPurchase();
        await cryptoPage.verifyPurchaseModalClosed();
    });

    test('PIN modal should display successfully', async ({ cryptoPage }) => {
        await cryptoPage.enterAmount('1000');
        await cryptoPage.clickGetQuote();
        await cryptoPage.confirmPurchase();
        await cryptoPage.verifyPinModalDisplayed();
    });

  test('User should enter transaction PIN successfully', async ({ cryptoPage }) => {

    await cryptoPage.enterAmount(CryptoData.amount.minimum);

    await cryptoPage.clickGetQuote();

    await cryptoPage.confirmPurchase();

    await cryptoPage.enterTransactionPin(CryptoData.pin);

    await cryptoPage.confirmTransaction();

    await cryptoPage.verifyPurchaseSuccessful();

});
    test.describe('After successful crypto purchase', () => {

        test.beforeEach(async ({ cryptoPage }) => {
            await cryptoPage.completeCryptoPurchase(CryptoData.amount.minimum, CryptoData.pin);
        });

        test('Purchase successful modal should display successfully', async ({ cryptoPage }) => {
            await cryptoPage.verifyPurchaseSuccessfulModal();
        });

        test('User should view receipt successfully', async ({ cryptoPage }) => {
            await cryptoPage.openReceipt();
        });

        // test('Receipt should display correct transaction details', async ({ cryptoPage }) => {
        //     await cryptoPage.openReceipt();
        //     await cryptoPage.verifyReceiptDetails();
        // });

        // test('User should close receipt successfully', async ({ cryptoPage }) => {
        //     await cryptoPage.openReceipt();
        //     await cryptoPage.closeReceipt();
        //     await cryptoPage.verifyReceiptClosed();
        // });

        test('User should click Done successfully', async ({ cryptoPage }) => {
            await cryptoPage.clickDone();
            await cryptoPage.verifyBuyPageDisplayed();
        });

        test('User should Buy Again successfully', async ({ cryptoPage }) => {
            await cryptoPage.clickBuyAgain();
            await cryptoPage.verifyBuyFormDisplayed();
        });

    });

});

