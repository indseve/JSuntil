//将带回调的异步函数，包装成promise
function promisify(fn, callbackErr=true, reverse=false) {
  if ({}.toString.call(fn) !== '[object Function]') throw new TypeError('Only normal function can be promisified');
  return function (...args) {
    return new Promise((resolve, reject) => {
      const callback = function (...args) {
        if (!callbackErr) {
          if (args.length === 1) return resolve(args[0]);
          return resolve(args);
        }
        const err = args.shift();
        const rest = args;
        if ({}.toString.call(err) === '[object Error]') return reject(err);
        if (rest.length === 1) return resolve(rest[0]);
        return resolve(rest);
      };
      try {
        if (reverse === true) fn.apply(null, [callback, ...args]);
        else fn.apply(null, [...args, callback]);
      } catch (err) {
        reject(err);
      }
    });
  }
}

/***************************************************************************************/
/*********************************使用样例***********************************************/
/***************************************************************************************/
// 系统函数
const lstat = promisify(require('fs').lstat);
lstat('./index.js')
  .then((stats) => {
    console.log(stats)
  })
  .catch(err => console.warn('Catch error:', err));

// 自定义函数 
function foo(a, b, cb) {
  if(cb) cb(a+b);
}
const fooP = promisify(foo, false);
fooP(1, 2)
  .then(res => console.log('res', res))
  .catch(err => console.warn('Catch error:', err));

// setTimeout
const wait = promisify(setTimeout, true, true);
wait(1000).then(() => console.log('1秒后打印'));

// 方法，需要bind对象
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
db.allP = promisify(db.all.bind(db)); 
db.allP('SELECT * FROM test').then(rows => console.log(rows));
