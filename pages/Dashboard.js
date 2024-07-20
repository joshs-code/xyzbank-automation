exports.DashboardPage = class DashboardPage {

    constructor(page) {
        this.page = page
        this.depositBtn = page.getByRole('button', { name: 'Deposit' })
        this.amountField = page.getByPlaceholder('amount')
        this.depositSubmit = page.getByRole('form').getByRole('button', { name: 'Deposit' })
        this.transactionBtn = page.getByRole('button', { name: 'Transactions' })
        this.logoutBtn = page.getByRole('button', { name: 'Logout' })
    }



    async depositTransaction(depositAmt) {
        await this.depositBtn.click()
        await this.amountField.click()
        await this.amountField.fill(depositAmt)
        await this.depositSubmit.click()
        await this.transactionBtn.click()
        await this.logoutBtn.click()
    }
}