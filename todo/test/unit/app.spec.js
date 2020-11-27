import { App } from '../../src/app';

describe('the app', () => {
  it('shoudl welcome user to the page', () => {
    expect(new App().heading).toBe('Welcome to TodoList');
  });
});

