import { AutoMotoLegoPage } from './app.po';

describe('auto-moto-lego App', () => {
  let page: AutoMotoLegoPage;

  beforeEach(() => {
    page = new AutoMotoLegoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
