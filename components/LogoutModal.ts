import { Page } from '@playwright/test';
import { DashboardLocators } from '../locators/DashboardLocators';

export default class LogoutModal {
    constructor(private page: Page) {}

    async confirm(): Promise<void> {
        await this.page.locator(DashboardLocators.confirmLogoutButton).click();
    }

    async cancel(): Promise<void> {
        await this.page.locator(DashboardLocators.cancelLogoutButton).click();
    }
}