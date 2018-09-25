function Promise(fn){
  var value = null;
      callbacks = [];

  this.then = function(onFulfilled){
    callbacks.push(onFulfilled);
    return this;
  }

  function resolve(value) {
         callbacks.forEach(function (callback) {
             callback(value);
         });
     }

  fn(resolve);
}




function Promise(fn){
  var state = 'pending',
      value = null,
      callbacks = [];

  this.then = function(onFulfilled){
    if(state = 'pending'){
      callbacks.push(onFulfilled);
      return this;//链式调用
    }
    onFulfilled(value);
    return this;
  }

  function resolve(newValue){
    value = newValue;
    state = 'fulfiled';
    //异步调用，使then中所有的回调进入callbacks数组
    setTimeout(function(){
      callbacks.forEach(function (callback) {
        callback(value);
      })
    },0)
  }

  fn(resolve)
}




function Promise(fn){
  var state = 'pending',
      value = null,
      callbacks = [];

  this.then = function(onFulfilled){
    return new Promise(function(resolve){
      handle({
        onFulfilled: onFulfilled || null,
        resolve: resolve
      })
    })
  }

  function handle (callback) {
    if(state = 'pending'){
      callbacks.push(callback)
      return;
    }
    if(!callback.onFulfilled){
      callback.resolve(value);
      return;
    }
    var ret = callback.onFulfilled(value);
    callback.resolve(ret);
  }



  function resolve(newValue){
    if(newValue && (typeOf newValue === 'object' || typeOf newValue === 'function')){
      var then = newValue.then;
      if(typeOf then ==='function'){
        then.call(newValue, resolve);
        return;
      }
    }
    value = newValue;
    state = 'fulfiled';
    //异步调用，使then中所有的回调进入callbacks数组
    setTimeout(function(){
      callbacks.forEach(function (callback) {
        handle(callback);
      })
    },0)
  }

  fn(resolve)
}



new Promise(function(){
  resolve(id)
}).then(function(id){
  //成功的操作
})


function Promise(fn) {
  var state = 'pending',
      value = null,
      callbacks = [];

  this.then = function(onFulfilled, onRejected) {
    return new Promise(function(resolve, reject) {
      handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve: resolve,
        reject: reject
      });
    });
  };

  function handle(callback) {
    if (state === 'pending') {
      callbacks.push(callback);
      return;
    }

    var cb = state === 'fulfilled' ? callback.onFulfilled : callback.onRejected,
        ret;
    if (cb === null) {
      cb = state === 'fulfilled' ? callback.reslove : callback.reject;
      cb(value);
      return ;
    }
    try {
      ret = cb(value);
      callback.resolve(ret);
    } catch (e) {
      callback.reject(e);
    }
  }

  function resolve(newValue) {
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      if (typeof then === 'function') {
        then.call(newValue, resolve, reject);
        return ;
      }
    }
    state = 'fulfilled';
    value = newValue;
    execute();
  }

  function reject(reason) {
    state = 'rejected';
    value = reason;
    execute();
  }

  function execute() {
    setTimeout(function() {
      callbacks.forEach(function(callback) {
        handle(callback);
      })
    },0)
  }
}
