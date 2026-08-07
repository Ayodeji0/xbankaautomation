import { test, expect } from '../../fixtures/baseFixtures';

test('User can login successfully', async ({ page, loginPage }) => {

    await loginPage.navigate();

    await loginPage.login(
        process.env.EMAIL!,
        process.env.PASSWORD!
    );

    await expect(page).toHaveURL("https://app.xbankang.com/");
});