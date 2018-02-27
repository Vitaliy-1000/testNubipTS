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
        for (let key in selectors) { //перебирання значень якостей об'єкта
            let check = await $(selectors[key]).isDisplayed() //перевірка елемента по селектору, наявність на сторінці
            if(check == false) {
                return false;
            }
        }   
        return true   
    }

    async loginGo(user: userName) {
        await browser.get('http://localhost:3000');
        await this.loginName.sendKeys(user.userName);
        await this.loginButton.click();
    }
}
