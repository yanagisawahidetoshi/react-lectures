// JavaScriptのディープコピーとシャローコピーの例

// 1. シャローコピーの例 - スプレッド構文
console.log('=== シャローコピー - スプレッド構文 ===');

// ネストされたオブジェクトを持つ配列
const originalArray = [
  { id: 1, name: '鈴木', details: { age: 25, city: '東京' } },
  { id: 2, name: '佐藤', details: { age: 30, city: '大阪' } },
];

// スプレッド構文を使ったシャローコピー
const shallowCopyArray = [...originalArray];

console.log('元の配列:', originalArray);
console.log('シャローコピー:', shallowCopyArray);
console.log('同じ参照か?', originalArray === shallowCopyArray); // false (トップレベルは新しい配列)

// ネストされたオブジェクトを変更
console.log('\n*** ネストされたオブジェクトを変更 ***');
shallowCopyArray[0].details.age = 26;

console.log('元の配列:', originalArray); // 変更が反映される！
console.log('シャローコピー:', shallowCopyArray);

// 2. オブジェクトのシャローコピー
console.log('\n=== オブジェクトのシャローコピー ===');

const originalObj = {
  name: '田中',
  scores: [90, 85, 92],
  address: { prefecture: '京都', city: '京都市' },
};

// Object.assignによるシャローコピー
const shallowCopyObj1 = Object.assign({}, originalObj);

// スプレッド構文によるシャローコピー
const shallowCopyObj2 = { ...originalObj };

// ネストされた配列を変更
shallowCopyObj1.scores.push(88);

console.log('元のオブジェクト:', originalObj); // scores配列に88が追加される
console.log('シャローコピー1:', shallowCopyObj1);
console.log('シャローコピー2:', shallowCopyObj2); // こちらも変更が反映される

// 3. ディープコピーの例
console.log('\n=== ディープコピー ===');

// JSON.parse + JSON.stringifyによるディープコピー（シンプルな方法）
const deepCopyArray = JSON.parse(JSON.stringify(originalArray));

// ネストされたオブジェクトを変更
deepCopyArray[0].details.age = 27;

console.log('元の配列:', originalArray); // 変更されない
console.log('ディープコピー:', deepCopyArray); // 変更が反映される

// 4. 手動でのディープコピー実装
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCopy(obj[key]);
    }
  }
  return result;
}

const manualDeepCopy = deepCopy(originalObj);
manualDeepCopy.address.city = '京都市南区';

console.log('\n手動ディープコピーの比較:');
console.log('元のオブジェクト:', originalObj); // 変更されない
console.log('手動ディープコピー:', manualDeepCopy); // 変更が反映される

// 5. sortメソッドとコピーの関係
console.log('\n=== sortメソッドとコピーの関係 ===');

const numbers = [3, 1, 4, 2];
console.log('元の配列:', numbers);

// sortは元の配列を変更する
const sortedNumbers = numbers.sort();
console.log('ソート後の配列:', numbers);
console.log('sortの戻り値:', sortedNumbers);
console.log('同じ参照か?', numbers === sortedNumbers); // true - 同じ配列の参照

// シャローコピーしてからソート
const numbersCopy = [...numbers];
numbersCopy.sort((a, b) => b - a); // 降順

console.log('\n元の配列:', numbers); // 昇順のまま
console.log('コピーしてソートした配列:', numbersCopy); // 降順になる

// 6. オブジェクト配列のソートとコピーの関係
console.log('\n=== オブジェクト配列のソート ===');

const people = [
  { name: '田中', age: 30 },
  { name: '鈴木', age: 25 },
  { name: '佐藤', age: 40 },
];

// シャローコピーしてソート
const peopleCopy = [...people];
peopleCopy.sort((a, b) => a.age - b.age);

console.log('元の配列:', people);
console.log('年齢でソートしたコピー:', peopleCopy);

// オブジェクトのプロパティを変更
peopleCopy[0].age = 18;

console.log('\n変更後:');
console.log('元の配列:', people); // 変更が反映される！
console.log('コピーした配列:', peopleCopy);

// 7. ディープコピーしてからソート
const peopleDeepCopy = JSON.parse(JSON.stringify(people));
peopleDeepCopy.sort((a, b) => b.age - a.age); // 年齢で降順ソート
peopleDeepCopy[0].age = 45;

console.log('\nディープコピーと変更:');
console.log('元の配列:', people); // 変更されない
console.log('ディープコピーした配列:', peopleDeepCopy); // 変更される
