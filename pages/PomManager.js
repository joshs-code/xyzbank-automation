import LoginPage from "./Login"
import { DashboardPage } from "./Dashboard"

export default class PomManager {

    constructor(page) {
        this.page = page
        this.loginPage = new LoginPage(page)
        this.dashboardPage = new DashboardPage(page)
    }
}