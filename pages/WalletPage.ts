import { expect, Page } from '@playwright/test';
import { WalletLocators } from '../locators/WalletLocators';

export default class WalletPage {

    constructor(private page: Page) {}

    async navigateToWallet(): Promise<void> {
        await this.page.locator(WalletLocators.walletMenu).click();
    }

    async verifyWalletLoaded(): Promise<void> {

        await expect(this.page.locator(WalletLocators.myWalletHeading)).toBeVisible();

        await expect(this.page.locator(WalletLocators.totalValueTab)).toBeVisible();

        await expect(this.page.locator(WalletLocators.fiatTab)).toBeVisible();

        await expect(this.page.locator(WalletLocators.cryptoTab)).toBeVisible();

        await expect(this.page.locator(WalletLocators.transactionHistoryHeading)).toBeVisible();

        await expect(this.page.locator(WalletLocators.searchBox)).toBeVisible();
    }

    async openFiatWallet(): Promise<void> {
        await this.page.locator(WalletLocators.fiatTab).click();
    }

    async verifyFiatWalletLoaded(): Promise<void> {

        await expect(this.page.locator(WalletLocators.availableBalance)).toBeVisible();

        await expect(this.page.locator(WalletLocators.addFundButton)).toBeVisible();

        await expect(this.page.locator(WalletLocators.sendButton)).toBeVisible();
    }

    async openCryptoWallet(): Promise<void> {
        await this.page.locator(WalletLocators.cryptoTab).click();
    }

    async verifyCryptoWalletLoaded(): Promise<void> {

        await expect(this.page.locator(WalletLocators.totalCryptoValue)).toBeVisible();

        await expect(this.page.locator(WalletLocators.sendButton)).toBeVisible();

        await expect(this.page.locator(WalletLocators.convertButton)).toBeVisible();

        await expect(this.page.locator(WalletLocators.myHoldingsHeading)).toBeVisible();
    }

    async verifyTransactionHistory(): Promise<void> {

        await expect(this.page.locator(WalletLocators.allTab)).toBeVisible();

        await expect(this.page.locator(WalletLocators.pendingTab)).toBeVisible();

        await expect(this.page.locator(WalletLocators.completedTab)).toBeVisible();

        await expect(this.page.locator(WalletLocators.inProgressTab)).toBeVisible();

        await expect(this.page.locator(WalletLocators.failedTab)).toBeVisible();
    }
}