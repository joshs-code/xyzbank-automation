import { test, expect } from '@playwright/test';
import PomManager from '../pages/PomManager.js';

let pm

test.describe('Money Tests', async() => {
    test.beforeEach(async ({page}) => {
        pm = new PomManager(page)
    })

    test.afterEach(async ({page}) => {
        await page.close()
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


test.describe('Manager Tasks', async() => {
    test.beforeEach(async ({page}) => {
        pm = new PomManager(page)
    })

    test.afterEach(async ({page}) => {
        await page.close()
    })

    test('Manager create user', async({page}) => {
        await pm.loginPage.gotoSite()
        await pm.loginPage.loginManager()
        page.pause()

        await pm.managerDashboard.clickAddCustomer()
        await pm.managerDashboard.createCustomer('Joshua', 'A', '92595')
        let tblCustomers = page.locator('//td[contains(text(), "Joshua")]')
        await expect(tblCustomers).toContainText('Joshua')
    })
})