import { test } from '../../fixtures/authFixtures';

test.describe('Market Overview Feature', () => {

      test.beforeEach(async ({ authenticatedPage, marketOverviewPage }) => {
        await authenticatedPage.waitForLoadState('domcontentloaded');
        await marketOverviewPage.navigateToMarketOverview();
    });

    test('Market Overview page should load successfully', async ({ marketOverviewPage }) => {
        await marketOverviewPage.verifyMarketOverviewLoaded();
    });

    test('User should switch to Favorites successfully', async ({ marketOverviewPage }) => {
        await marketOverviewPage.openFavorites();
    });

    test('User should switch to Spot successfully', async ({ marketOverviewPage }) => {
        await marketOverviewPage.openSpot();
        await marketOverviewPage.verifySpotLoaded();
    });

    test('User should switch to Futures successfully', async ({ marketOverviewPage }) => {
        await marketOverviewPage.openFutures();
        await marketOverviewPage.verifyFuturesLoaded();
    });

    test('Search coin field should be displayed', async ({ marketOverviewPage }) => {
        await marketOverviewPage.verifySearchCoinField();
    });

    test('User should search for BTC successfully', async ({ marketOverviewPage }) => {
    await marketOverviewPage.searchCoin('BTC');
    await marketOverviewPage.verifyCoinDisplayed('BTC');
});

test('User should search for ETH successfully', async ({ marketOverviewPage }) => {
    await marketOverviewPage.searchCoin('ETH');
    await marketOverviewPage.verifyCoinDisplayed('ETH');
});

    test('Trade buttons should be displayed', async ({ marketOverviewPage }) => {
        await marketOverviewPage.verifyTradeButtons();
    });

    test('User should click Trade button successfully', async ({ marketOverviewPage }) => {
        await marketOverviewPage.clickFirstTradeButton();
    });

    test('User should trade ETH successfully', async ({ marketOverviewPage }) => {
    await marketOverviewPage.searchCoin('ETH');
    await marketOverviewPage.clickTrade();
    await marketOverviewPage.verifyTradePageOpened('ETH');
});

});