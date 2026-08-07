import { test as base } from './baseFixtures';
import { Page, expect } from '@playwright/test';

type AuthFixtures = {
    authenticatedPage: Page;
};

export const test = base.extend<AuthFixtures>({
    authenticatedPage: async ({ loginPage, page }, use) => {
        await loginPage.navigate();

        await loginPage.login(
            process.env.EMAIL!,
            process.env.PASSWORD!
        );

        await use(page);
    }
});

export { expect };