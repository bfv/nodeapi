import { NodeapiPage } from './app.po';

describe('nodeapi App', () => {
  let page: NodeapiPage;

  beforeEach(() => {
    page = new NodeapiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
