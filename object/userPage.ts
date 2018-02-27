import {element, $, $$, browser} from 'protractor';
import { userInfo } from 'os';
import { ElementFinder, ElementArrayFinder} from 'protractor/built/element';


interface inputByCalculation {
    pariod: number,
    numberCows: number,
    priceBy: number,
    priceByEnergy: number,
    salary: number
}

export class UserPage {
    menuPanel: ElementFinder;
    informEnterData: ElementFinder;
    adding: ElementFinder;
    calculationingFarm: ElementArrayFinder;
    inputByCalculation: ElementArrayFinder;
    checkboxes: ElementArrayFinder;
    userURL: string;
    constructor() {
        this.menuPanel = $('.navbar-header')
        this.informEnterData = $('.btn.btn-warning')
        this.adding = $('.btn.btn-primary')
        this.calculationingFarm = $$('.btn.btn-default')
        this.inputByCalculation = $$('.form-control')
        this.checkboxes = $$('.checkbox-inline')

        this.userURL = 'http://localhost:3000/entries'
    }   

    async userUrl() {
       return await browser.getCurrentUrl()
    }

    async areDisplayed(selectors) {
        for (let key in selectors) { //перебирання значень якостей об'єкта
        await console.log(selectors[key])
        let rep = await $(selectors[key])
        await console.log(rep)    
        let check = await $(selectors[key]).isDisplayed() //перевірка елемента по селектору, наявність на сторінці
        
            await console.log(rep)
            if(check == false) {
                return false;
            }
        } 
        return true     
    }
}