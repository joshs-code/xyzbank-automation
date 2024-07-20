import LoginPage from "./Login"
import  DashboardPage  from "./Dashboard"
import  ManagerDashboardPage from "./ManagerDashboard"


export default class PomManager {

    constructor(page) {
        this.page = page
        this.loginPage = new LoginPage(page)
        this.dashboardPage = new DashboardPage(page)
        this.managerDashboard = new ManagerDashboardPage(page)
    }
}