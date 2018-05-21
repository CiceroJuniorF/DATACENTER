import { DataCenterProjectPage } from './app.po';

describe('data-center-project App', function() {
  let page: DataCenterProjectPage;

  beforeEach(() => {
    page = new DataCenterProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
