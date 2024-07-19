import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { DashboardPage } from '../pages/dashboard';

test('test', async ({ page }) => {
    const lp = new LoginPage(page)
    const dp = new DashboardPage(page)

    await lp.gotoSite()
    await lp.loginUser('2')
    await dp.depositTransaction('1000000')
});