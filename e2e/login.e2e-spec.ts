import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('Login', () => {
    it('Should log user into the system', async() => {
        
        const aboutLink = element(
            by.css(".e2e-about"));
      aboutLink.click().then(() => {
     browser.waitForAngular();
        browser.sleep(1000);
      expect(browser.getCurrentUrl()).toContain('/login');
      });

      //browser.get("/login"); // Page reloads, 1 sec or 2.

      const userNameInput = element(by.name('UserName'));
     const userPassInput = element(by.name('Password'));
     const submitButton = element( by.css('button'));

     userNameInput.sendKeys('g@g.com');
     userPassInput.sendKeys('123');

     submitButton
         .click()
         .then(() => {
         browser.waitForAngular();
             browser.sleep(1000);
             expect(browser.getCurrentUrl()).toContain('/home'); 
         });
        });
       //browser.get("/"); 

        const afterLogin = element(
             by.css(".e2e-about"));
       afterLogin.click().then(() => {
      browser.waitForAngular();
         browser.sleep(1000);
       expect(browser.getCurrentUrl()).toContain('/about');
       });
 
    
    }
);
