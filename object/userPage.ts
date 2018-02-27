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
    constructor() {
        this.menuPanel = $('.navbar-header')
        this.informEnterData = $('.btn.btn-warning')
        this.adding = $('.btn.btn-primary')
        this.calculationingFarm = $$('.btn.btn-default')
        this.inputByCalculation = $$('.form-control')
        this.checkboxes = $$('.checkbox-inline')
    }   

}