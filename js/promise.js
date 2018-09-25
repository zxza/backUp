class Promise{
  constructor(handler){
    const ref = this;
    const resolve = (value) => {
      if (ref.referred) {
        ref.referred(value);
      }
    }

    if (handler && handler.constructor && handler.constructor.name = 'Function') {
      setTimeout(() => {
        handler(resolve);
      },0)
    }
  }

  then(referred) {
    this.referred = referred;
  }
}


class Promise{
  constructor(handler){
    const ref = this;
    this.status = 'pending'

    const resloveNext = (ref, value) => {
      if (ref && ref.deferred) {
        ref.status = 'resolved'
        var nValue = ref.deferred(value);
        //根据上一个返回值，再次执行函数
        resolveNext(ref.next, nValue);
      }
    }

    const resolve = (value) => {
      ref.status = 'resolved'
      if (ref.next) {
        resolveNext(ref.next,value);
      }
    }

    if (handler && handler.constructor && handler.constructor.name == 'Function') {
      setTimeout(() => {
        handler(resolve);
      },0)
    }
  }

  then(referred) {
    //then 返回一个promise对象
    this.next = new Promise();
    this.next.deferred = deferred;
    return this.next;
  }
}

class Promise{
  constructor(handler) {

    const ref = this;

    const solveNext = (ref, value) => {
      if (ref && ref.deferred) {
        var nValue = deferred(value);
        solveNext(ref.next, nValue);
      }
    }

    const solve = (value) => {
      if (ref.next) {
        solveNext(ref.next, value);
      }
    }

    if (handler && handler.constructor && handler.constructor.name == 'Function') {
      setTimeout(() => {
        handler();
      },0)
    }

  }

  then(deferred) {
    this.next = new Promise();
    this.next.deferred = deferred;
    return this.next;
  }
}
