import { HacDemoPage } from './app.po';

describe('hac-demo App', () => {
  let page: HacDemoPage;

  beforeEach(() => {
    page = new HacDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
