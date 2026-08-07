import { test } from '../../fixtures/authFixtures';

test('Dashboard should load successfully', async ({
    authenticatedPage,
    dashboardPage
}) => {

    await dashboardPage.verifyDashboardLoaded();

});