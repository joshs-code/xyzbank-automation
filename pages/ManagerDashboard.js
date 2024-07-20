export default class ManagerDashboardPage {

    constructor(page) {
        this.page = page
        this.customerAdd = '//button[@ng-click="addCust()"]'
        this.fName = '//input[@ng-model="fName"]'
        this.lName = '//input[@ng-model="lName"]'
        this.postCode = '//input[@ng-model="postCd"]'
        this.submitAddUserBtn = '//button[@type="submit"]'
        this.viewCustomersBtn = '//button[@ng-click="showCust()"]'
        this.searchCustBar= '//input[@ng-model="searchCustomer"]'
    }

    async clickAddCustomer() {
        await this.page.locator(this.customerAdd).click()
    }

    async createCustomer(fname, lname, postcode,) {
        await this.page.locator(this.fName).fill(fname)
        await this.page.locator(this.lName).fill(lname)
        await this.page.locator(this.postCode).fill(postcode)
        await this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
        await this.page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();
        await this.page.locator(this.viewCustomersBtn).click()
        await this.page.locator(this.searchCustBar).fill(`${fname}`)
    }

}