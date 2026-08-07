import { expect, Page } from '@playwright/test';
import { DashboardLocators } from '../locators/DashboardLocators';

export default class DashboardPage {

    constructor(private page: Page) {}
// This is for logout flow
    async openLogoutModal(): Promise<void> {
        await this.page.locator(DashboardLocators.logoutMenu).click();
    }
// This is to verify the dashboard page has loaded successfully by checking the visibility of key elements on the page
    async verifyDashboardLoaded(): Promise<void> {
        await expect(this.page.locator(DashboardLocators.welcomeHeading)).toBeVisible();
        await expect(this.page.locator(DashboardLocators.totalAssetValue)).toBeVisible();
        // await expect(this.page.locator(DashboardLocators.accountVerificationHeading)).toBeVisible();
        await expect(this.page.locator(DashboardLocators.quickActionsHeading)).toBeVisible();
    }
}