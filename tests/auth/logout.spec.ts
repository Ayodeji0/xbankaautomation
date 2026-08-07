import { test, expect } from '../../fixtures/authFixtures';

test('User should logout successfully', async ({
    authenticatedPage,
    dashboardPage,
    logoutModal
}) => {

    await dashboardPage.openLogoutModal();

    await logoutModal.confirm();

    await expect(authenticatedPage).toHaveURL(/sign-in/);
});