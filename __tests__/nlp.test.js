import { isUrl } from '../src/client/js/formHandler'
import { updateDom } from '../src/client/js/updateDom';

test('checks if url is valid', () => {
  expect(isUrl('asdfasdfasdfasdf')).toBe(false);
});

test('updateDom should return false if no data is passed to it', () => {
  expect(updateDom(null)).toBe(false);
});