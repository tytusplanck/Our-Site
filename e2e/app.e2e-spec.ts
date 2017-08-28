import { OurSitePage } from './app.po';

describe('our-site App', () => {
  let page: OurSitePage;

  beforeEach(() => {
    page = new OurSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
