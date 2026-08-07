import { Page } from '@playwright/test';
import { LoginLocators } from '../locators/loginLocators';

export default class LoginPage {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('/sign-in');
    }

    async enterEmail(email: string) {
        await this.page.locator(LoginLocators.email).fill(email);
    }

    async enterPassword(password: string) {
        await this.page.locator(LoginLocators.password).fill(password);
    }

    async clickSignIn() {
        await this.page.locator(LoginLocators.signInButton).click();
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSignIn();
    }
}