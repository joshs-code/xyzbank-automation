exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.customerOption = page.getByRole('button', { name: 'Customer Login' })
        this.userSelect = page.locator('#userSelect')
        this.loginBtn = page.getByRole('button', { name: 'Login' })
    }

    async gotoSite(){
        await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    }


    async loginUser(user) {
        await this.customerOption.click()
        await this.userSelect.selectOption(user)
        await this.loginBtn.click()
    }
}
