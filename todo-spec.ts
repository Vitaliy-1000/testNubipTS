import {element, by, browser } from "protractor";
import {expect} from "chai";
//import * as data from "./nameFile"
import {login, user, dataForCalculation} from "./dataObjectTesting/selectors.json";

import {LoginForm} from './object/loginPage';
import {UserPage} from './object/userPage';

const loginForm = new LoginForm();
const userPage = new UserPage();

const userded = {
  userName: 'ded'

};


describe('testCase by NubipProject:', function() {
    
    it('loginPage', async function() {
      await browser.get('http://localhost:3000');
      expect (await loginForm.url()).to.eql('http://localhost:3000/')
      expect (await loginForm.areDisplyed(login)).to.eql(true)
    });
    

    it('go to userPage', async function() {
      // login button
      await loginForm.loginGo(userded);
      expect (await userPage.userUrl()).to.eql(userPage.userURL)
      expect (await userPage.areDisplayed(user)).to.eql(true)
      
      // recording by farm
      await userPage.dataCalculation(user.inputForCalculation, dataForCalculation);
      await userPage.clickCheckbox(user.checkboxes);

    });
    

  });