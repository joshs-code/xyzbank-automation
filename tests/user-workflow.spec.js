import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/Dashboard';
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

    test('Deposit Money',async() => {
        await pm.loginPage.gotoSite()
        await pm.loginPage.loginUser('2')
        await pm.dashboardPage.depositTransaction('1000000')
    })

})