import { Chapter2Pr1Page } from './app.po';

describe('chapter2-pr1 App', function() {
  let page: Chapter2Pr1Page;

  beforeEach(() => {
    page = new Chapter2Pr1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
