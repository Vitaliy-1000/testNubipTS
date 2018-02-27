import {element, $, browser} from 'protractor';
import { userInfo } from 'os';
import { ElementFinder } from 'protractor/built/element';

interface loginName{
    loginName: string
}

export class LoginForm {
    loginName: ElementFinder;
    menuPanel: ElementFinder;
    loginButton: ElementFinder;
    log: string;
    constructor() {
        this.loginName = $('#formHorizontalEmail')
        this.menuPanel = $('.navbar.navbar-inverse')
        this.loginButton = $('.btn.btn-default')
    }

    async url() {
        return await browser.getCurrentUrl();
    }

    async areDisplyed(selectors) {
        let isSelectors = true;
        for (let key in selectors) {
            let check = await $(selectors[key]).isDisplayed()
            if(check == false) {
                await console.log(check)
                return isSelectors = false;
            }
            return true
        }      
    }

    async loginGo(user: userName) {
        await this.loginName.sendKeys(user.userName);
        await this.loginButton.click();
    }
}
