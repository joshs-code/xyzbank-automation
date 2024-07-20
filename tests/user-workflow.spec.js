import { test, expect } from '@playwright/test';
import PomManager from '../pages/PomManager.js';

let pm

test.describe('Deposit Tests', async() => {
    test.beforeEach(async ({page}) => {
        pm = new PomManager(page)
    })

    test('Login as customer', async() => {
        await pm.loginPage.gotoSite()
        await pm.loginPage.loginUser('2')
    })

    test('Deposit Money',async({page}) => {
        await pm.loginPage.gotoSite()
        await pm.loginPage.loginUser('2')
        await pm.dashboardPage.depositTransaction('1000000');

        let amount = await page.locator("//strong[contains(text(), '1000000')]")
        await expect(amount).toContainText('1000000');
        await pm.dashboardPage.logOut();
    })

})