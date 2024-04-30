// 01_옵셔널 체이닝 연산자
// ES11(ECMAScript2020)에서 도입된 연산자로 좌항의 피연산자가 null 또는 undefined인 경우,
// 에러를 발생시키지 않고 undefined를 반환하고
// 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

var obj = null;
// var val = obj.value; //에러남
var val = obj?.value;
console.log(val);

// 옵셔널 체이닝 연산자 이전에는 논리연산자 &&를 사용한 단축 평가로 확인했다.
// 단, 빈 문자열 같은 Falsy 값을 false 취급해서 생기는 문제가 있다.
var str = '';

// len에 str 즉 빈 문자열이 담긴다.
var len = str && str.length;
console.log(len);

// 빈 문자열은 null 또는 undefined가 아니므로 문자열의 길이 값이 담긴다.
var len = str?.length;
console.log(len);
