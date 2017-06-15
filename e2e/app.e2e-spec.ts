import { SlidingPuzzlePage } from './app.po';

describe('sliding-puzzle App', () => {
  let page: SlidingPuzzlePage;

  beforeEach(() => {
    page = new SlidingPuzzlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
