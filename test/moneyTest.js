import{formateCurrency} from '../javascript/utils/money.js';


console.log('test suites : formateCurrency');


console.log('converts cents into dollers');

if(formateCurrency(2095) === '20.95'){
  console.log('passed');
}else{
  console.log('failed');
}

console.log('works with 0'); 

if(formateCurrency(0) === '0.00'){
  console.log('pass');
}else{
  console.log('fail');
}
console.log('rounds up to nearest cents');

if(formateCurrency(2000.5) === "20.01"){
  console.log('pass');
}else{
  console.log('fail');
}