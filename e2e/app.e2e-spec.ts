import { Angular2peerPage } from './app.po';

describe('angular2peer App', function() {
  let page: Angular2peerPage;

  beforeEach(() => {
    page = new Angular2peerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
