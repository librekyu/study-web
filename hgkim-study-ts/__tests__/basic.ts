import { InputArray, OutputArray, inputPhone, outputPhone } from '../fixture';
import { convert, convertPhone } from '../src/common/utils';

/**
 * @todo
 * 1. 전화번호 형태 변경
 * 2. id를 key로
 * 3. 이름과 전화번호를 value로
 * 4. iteration 을 통한 컨버팅
 * ***********************************
 * 1. 할 일을 작성하고 최대한 작은 단위로 나눈다.
 * 2. 단위별로 목록을 작성한다.
 * 3. 테스트 코드를 일단 작성한다.
 * 4. 메서드를 만든다.
 * 5. 일단 테스트를 통과하게 한다.
 * 6. 테스트를 통과시킨 후 진짜 메서드를 작성한다.
 * 7. 최종 원하는 값이 나오기 위해 메서드들을 합친다.
 * 8. 리팩토링한다.
 * */

describe('basic test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when value is 1', () => {
    it('value equals 1', () => {
      const value = 1;
      expect(value).toBe(1);
    });
  });

  context('when InputArray is convert by convert', () => {
    it('equals OutputArray', () => {
      expect(convert(InputArray)).toEqual(OutputArray);
    });
  });
  context('when InputPhone is convert by convert', () => {
    it('equals OutputPhone', () => {
      expect(convertPhone(inputPhone)).toEqual(outputPhone);
    });
  });
});
