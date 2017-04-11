import { OrderbyNamePipe } from './orderby-name.pipe';

describe('OrderbyNamePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderbyNamePipe();
    expect(pipe).toBeTruthy();
  });
});
