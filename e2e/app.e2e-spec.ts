import { Ng4PagingServicePage } from './app.po';

describe('ng4-paging-service App', () => {
  let page: Ng4PagingServicePage;

  beforeEach(() => {
    page = new Ng4PagingServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
