import { print, printLines } from '../module/inputOutput.js';
import { jest } from '@jest/globals';
describe('print 함수 동작 확인', () => {
  test('await print()가 출력 완료 후 resolve되는지', async () => {
    const logSpy = jest.spyOn(process.stdout, 'write').mockImplementation((msg, cb) => {
      // write가 비동기로 호출되는 것처럼 흉내냄
      setImmediate(() => cb && cb());
      return true;
    });

    await print('테스트 메시지'); // 출력 완료까지 기다림
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('테스트 메시지\n'),
      expect.any(Function),
    );
    logSpy.mockRestore();
  });

  test('printLines가 모든 줄을 순차적으로 출력', async () => {
    const logSpy = jest.spyOn(process.stdout, 'write').mockImplementation((msg, cb) => {
      cb && cb();
      return true;
    });

    await printLines(['A', 'B', 'C']);
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy.mock.calls.map(([m]) => m.trim())).toEqual(['A', 'B', 'C']);
    logSpy.mockRestore();
  });
});
