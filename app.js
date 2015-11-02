class Father {
  constructor() {
    this.name = 'father';
  }

  call() {
    console.log('Call to father');
  }
}

class Test extends Father{
  constructor () {
    super();
    this.console = 'console.log';
    this.name = 'constructor';
  }

  fn() {
    const name = "fn";

    return () => {
      console.log(name, this.name);
    };
  }

  fn2(par) {
    const {obj, ...others} = par;
    console.log(obj, others);
  }

  async prom({name}) {
    const result = await new Promise(res => res('SUCCESS'));
    return new Promise(res => res(`${result}--${name}--SUCCESS2`));
  }
}

const t = new Test();
t.call();
t.fn()();
t.fn2({obj: 'output', a: 22, c: 'cc'});
t.prom({name: 'testName'}).then(res => console.log(res), rej => console.log(rej));
