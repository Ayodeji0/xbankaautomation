import { expect, Page } from '@playwright/test';
import { MarketOverviewLocators } from '../locators/MarketOverviewLocators';

export default class MarketOverviewPage {

    constructor(private page: Page) {}

    async navigateToMarketOverview() {
        await this.page.locator(MarketOverviewLocators.marketOverviewMenu).click();
    }

    async verifyMarketOverviewLoaded() {
        await expect(this.page.locator(MarketOverviewLocators.marketHeading)).toBeVisible();
    }

    async openFavorites() {
        await this.page.locator(MarketOverviewLocators.favoritesTab).click();
    }

    async openSpot() {
        await this.page.locator(MarketOverviewLocators.spotTab).click();
    }

    async openFutures() {
        await this.page.locator(MarketOverviewLocators.futuresTab).click();
    }

    async verifySpotLoaded() {
        await expect(this.page.locator(MarketOverviewLocators.spotTab)).toBeVisible();
    }

    async verifyFuturesLoaded() {
        await expect(this.page.locator(MarketOverviewLocators.futuresTab)).toBeVisible();
    }

    async verifySearchCoinField() {
        await expect(this.page.locator(MarketOverviewLocators.searchCoinField)).toBeVisible();
    }

  async searchCoin(coin: string) {
    await this.page.locator(MarketOverviewLocators.spotTab).click();

    await this.page.locator(MarketOverviewLocators.searchCoinField).fill('');

    await this.page.locator(MarketOverviewLocators.searchCoinField).fill(coin);

    await this.page.waitForTimeout(1000);
}

   
    async verifyTradeButtons() {
        await expect(this.page.locator(MarketOverviewLocators.tradeButton).first()).toBeVisible();
    }

    async clickFirstTradeButton() {
        await this.page.locator(MarketOverviewLocators.tradeButton).first().click();
    }

async verifyCoinDisplayed(coin: string) {
    await expect(
        this.page.getByText(`${coin}/USDT`, { exact: true })
    ).toBeVisible();
}

async searchCoinandTrade(coin: string) {
    await this.page.locator(MarketOverviewLocators.spotTab).click();

    await this.page.locator(MarketOverviewLocators.searchCoinField).fill('');

    await this.page.locator(MarketOverviewLocators.searchCoinField).fill(coin);

    await this.page.waitForTimeout(1000);
}

async clickTrade() {
    await this.page.locator(MarketOverviewLocators.tradeButton).first().click();
}

async verifyTradePageOpened(coin: string) {
    await expect(this.page).toHaveURL(
        new RegExp(`coin=${coin}$`, 'i')
    );
}

}