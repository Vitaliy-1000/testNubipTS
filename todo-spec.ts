import {element, by, browser } from "protractor";
import {expect} from "chai";
//import * as data from "./nameFile"
import {loginPage, userPage} from "./object/selectors.json";
const login = loginPage;
const user = userPage;
import {LoginForm} from './object/loginPage';


const loginForm = new LoginForm();

const userded = {
  userName: 'ded'
};


describe('testCase by NubipProject', function() {
    it('loginPage', async function() {
      await browser.get('http://localhost:3000');
      expect (await loginForm.url()).to.eql('http://localhost:3000/')
      expect (await loginForm.areDisplyed(login)).to.eql(true)
    });
  });