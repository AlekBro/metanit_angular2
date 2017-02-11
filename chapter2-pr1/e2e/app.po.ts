import { browser, element, by } from 'protractor';

export class Chapter2Pr1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
