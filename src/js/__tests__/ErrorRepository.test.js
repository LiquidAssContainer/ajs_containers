import ErrorRepository from '../ErrorRepository';

const errorRepository = new ErrorRepository();

test('Error 404', () => {
  let result = errorRepository.translate(404);
  expect(result).toBe('Not found');
});

test('Error 999', () => {
  let result = errorRepository.translate(999);
  expect(result).toBe('Почти тысяча');
});

test('Unknown error 987', () => {
  let result = errorRepository.translate(987);
  expect(result).toBe('Unknown error');
});

test('Another unknown error', () => {
  let result = errorRepository.translate('Проверка на число и прочее не требуется');
  expect(result).toBe('Unknown error');
});
