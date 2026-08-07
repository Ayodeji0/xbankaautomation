import { expect, Page } from '@playwright/test';
import { CryptoLocators } from '../locators/CryptoLocators';

export default class CryptoPage {

    constructor(private page: Page) {}

    async navigateToCrypto(): Promise<void> {
        await this.page.locator(CryptoLocators.cryptoMenu).click();
    }

    async verifyCryptoLoaded(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.buySellTab)).toBeVisible();
        await expect(this.page.locator(CryptoLocators.buyButton)).toBeVisible();
        await expect(this.page.locator(CryptoLocators.sellButton)).toBeVisible();
        await expect(this.page.locator(CryptoLocators.getQuoteButton)).toBeVisible();
    }

    async openConvertTab(): Promise<void> {
        await this.page.locator(CryptoLocators.convertTab).click();
    }

    async verifyConvertLoaded(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.convertTab)).toBeVisible();
        await expect(this.page.locator(CryptoLocators.getQuoteButton)).toBeVisible();
    }

    async openSell(): Promise<void> {
        await this.page.locator(CryptoLocators.sellButton).click();
    }

    async verifySellLoaded(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.sellButton)).toBeVisible();
    }

    async verifyExchangeRate(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.exchangeRate)).toBeVisible();
    }

    async verifyGetQuoteButton(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.getQuoteButton)).toBeVisible();
    }

    async verifyRecentTransaction(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.recentTransactionHeading)).toBeVisible();
    }

    async verifyHowToBuySection(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.howToBuyHeading)).toBeVisible();
    }

    async enterAmount(amount: string): Promise<void> {
        await this.page.locator(CryptoLocators.youPayField).fill(amount);
    }

    async clickGetQuote(): Promise<void> {
        await this.page.locator(CryptoLocators.getQuoteButton).click();
    }

    async verifyPurchaseModalDisplayed(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.confirmPurchaseHeading)).toBeVisible();
    }

    async verifyPurchaseModal(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.confirmPurchaseHeading)).toBeVisible();
        await expect(this.page.locator(CryptoLocators.confirmPurchaseButton)).toBeVisible();
        await expect(this.page.locator(CryptoLocators.cancelPurchaseButton)).toBeVisible();
    }

    async cancelPurchase(): Promise<void> {
        await this.page.locator(CryptoLocators.cancelPurchaseButton).click();
    }

    async verifyPurchaseModalClosed(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.confirmPurchaseHeading)).toBeHidden();
    }

    async confirmPurchase(): Promise<void> {
        await this.page.locator(CryptoLocators.confirmPurchaseButton).click();
    }

    async verifyPinModalDisplayed(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.transactionPinHeading)).toBeVisible();
    }

    async enterTransactionPin(pin: string): Promise<void> {
        await this.page.locator(CryptoLocators.pinInput).fill(pin);
        await this.page.locator(CryptoLocators.continueButton).click();
    }

    async verifyPurchaseSuccessful(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.purchaseSuccessfulHeading)).toBeVisible();
    }

    async verifyPurchaseSuccessfulModal(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.purchaseSuccessfulHeading)).toBeVisible();
        await expect(this.page.locator(CryptoLocators.viewReceiptButton)).toBeVisible();
        await expect(this.page.locator(CryptoLocators.buyAgainButton)).toBeVisible();
        await expect(this.page.locator(CryptoLocators.doneButton)).toBeVisible();
    }

    async openReceipt(): Promise<void> {
        await this.page.locator(CryptoLocators.viewReceiptButton).click();
    }

    async verifyReceiptDisplayed(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.receiptHeading)).toBeVisible();
    }

    async verifyReceiptDetails(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.receiptHeading)).toBeVisible();
    }

    async closeReceipt(): Promise<void> {
        await this.page.locator(CryptoLocators.closeReceiptButton).click();
    }

    async verifyReceiptClosed(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.receiptHeading)).toBeHidden();
    }

    async clickDone(): Promise<void> {
        await this.page.locator(CryptoLocators.doneButton).click();
    }

    async verifyBuyPageDisplayed(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.buyButton)).toBeVisible();
    }

    async clickBuyAgain(): Promise<void> {
        await this.page.locator(CryptoLocators.buyAgainButton).click();
    }

    async verifyBuyFormDisplayed(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.youPayField)).toBeVisible();
    }

    async verifySuccessToast(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.successToast)).toBeVisible();
    }

    async verifyTransactionAddedToHistory(): Promise<void> {
        await expect(this.page.locator(CryptoLocators.transactionHistoryItem)).toBeVisible();
    }

    async completeCryptoPurchase(amount: string, pin: string): Promise<void> {
        await this.enterAmount(amount);
        await this.clickGetQuote();
        await this.confirmPurchase();
        await this.enterTransactionPin(pin);
        await this.verifyPurchaseSuccessful();
    }
}