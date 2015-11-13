class Father {
  constructor() {
    this.name = 'ES5';
    this.lastName = 'Javascript'
  }

  call() {
    console.log(`Hello i am ${this.name} ${this.lastName}`);
  }
}

class Son extends Father{
  constructor (name) {
    super();
    this.name = name;
  }

  fn() {
    const name = "fn";

    //arrow function, doesnt change context
    return () => {
      console.log(name, this.name);
    };
  }

  fn2(par) {
    //spread operator
    const {obj, ...others} = par;
    console.log(`hello i am ${obj}`);
    console.log(`hello i am others ${others}`);
  }

//async await
  async prom({name}) {
    const result = await new Promise(res => res('I am awaited result'));
    return new Promise(res => res(`${result}--${name}`));
  }
}

const ES5 = new Father()
const ES6 = new Son('ES6');
ES5.call();
ES6.call();
console.log('--------------------------')
ES6.fn()();
console.log('--------------------------')
ES6.fn2({obj: 'distinct', a: 22, c: 'cc'});
console.log('--------------------------')
ES6.prom({name: 'I am result'}).then(res => console.log(res), rej => console.log(rej));
