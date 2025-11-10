import{formateCurrency} from '../../javascript/utils/money.js';

describe('test Suite : formateCurrency', ()=>{
  it('convert cents into dollers',()=>{
    expect(formateCurrency(2095)).toEqual('20.95');
  });

  it('works with 0',()=>{
    expect(formateCurrency(0)).toEqual('0.00');
  });
   it('rounds up to nearest cents',()=>{
    expect(formateCurrency(2000.5)).toEqual('20.01');
  });
});