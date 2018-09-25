//jQuery 封装插件的最佳做法
// 始终包裹在一个封闭的插件：
(function($) {
/* plugin goes here */
})(jQuery);
// 不要冗余包裹this关键字在插件的功能范围内
// 除非插件返回特定值，否则总是返回this关键字来维持chainability 。
// 传递一个可拓展的默认对象参数而不是大量的参数给插件。
// 不要在一个插件中多次命名不同方法。
// 始终命名空间的方法，事件和数据。
;(function($){
  $.fn.myplugin = function(){
    this.fadeIn('normal',function(){

    })
  }
})(jQuery)

$('#element').myplugin;



;(function($){
  $.fn.maxHeight = function(){
    var max = 0;
    this.each(function(){
      max = Math.max($(this.height()),max);
    });
    return max;
  }
})(jQuery)

var maxHeight = $('div').maxHeight();



;(function($){
  $.fn.lockHeight = function(){
    //由于插件返回this关键字，它保持了chainability，这样jQuery收集的元素可以继续被jQuery方法如.css控制
    return this.each(function(type){
      $this = $(this);
      if(!type || type == 'width'){
        $this.width($this.width())
      }
    })
  }
})(jQuery)

$('div').lockHeight('width').css('color','red');



//最好有一个当插件被调用的时候可以被拓展的默认设置(通过使用$.extend)
;(function($){
  $.fn.tooltip = function(options){
    var settings = $.extend({
      'location' : 'left',
      'background' : 'blue'
    },options);
    return this.each(function(){

    })
  }
})(jQuery)


//jQuery命名空间这种类型的插件架构允许您封装所有的方法在父包中
//通过传递该方法的字符串名称和额外的此方法需要的参数来调用它们。 这种方法的封装和架构类型是jQuery插件社区的标准，它被无数的插件在使用，包括jQueryUI中的插件和widgets。
;(function($){
  var method = {
    init : function (options){

    },
    show : function (){

    },
    hide : function (){

    },
    update : function (content){
      console.log(content)
    }
  };

  $.fn.tooltip = function (method){
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments,1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this,arguments);
    } else {
      $.error('Method' + method + 'does not exist on jQuery.tooltip');
    }
  };
})(jQuery)

//调用init方法
$('div').tooltip();

//调用init方法
$('div').tooltip({
    foo: 'bar'
});

// 调用hide方法
$('div').tooltip('hide');

//调用Update方法
$('div').tooltip('update', 'This is the new tooltip content!');


//绑定命名空间
//一个鲜为人知bind方法的功能即允许绑定事件命名空间。
//如果你的插件绑定一个事件，一个很好的做法是赋予此事件命名空间。
//通过这种方式，当你在解除绑定的时候不会干扰其他可能已经绑定的同一类型事件。
//你可以通过追加命名空间到你需要绑定的的事件通过 <namespace>。
;(function ($) {
  var methods = {
    init : function () {
      return this.each(function () {
        $(window).bind('resize.tooltip', methods.reposition);
      })
    },
    destroy : function () {
      return this.each(function () {
        $(window).unbind('.tooltip');
      })
    },
    reposition : function () {
      //bind 事件
    },
    hide : function () {

    },
    show : function () {

    },
    update : function (content) {

    }
  };
  $.fn.tooltip = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method' + method + 'does not exist on jQuery.tooltip');
    }
  }
})(jQuery)

$('#fun').tooltip();

$('#fun').tooltip('destroy');

//通常在插件开发的时候，你可能需要记录或者检查你的插件是否已经被初始化给了一个元素。
//使用jQuery的data方法是一个很好的基于元素的记录变量的途径。
//尽管如此，相对于记录大量的不同名字的分离的data,
//使用一个单独的对象保存所有变量，并通过一个单独的命名空间读取这个对象不失为一个更好的方法。
;(function ($) {
  var methods = {
    init : function (options) {
      return this.each(function () {
        var $this = $(this),
            data = $this.data('tooltip'),
            tooltip = $('<div />', {
              text : $this.attr('title');
            });

        if (!data) {
          $(this).data('tooltip', {
            target : $this,
            tooltip : tooltip
          });
        }
      });
    },
    destroy : function () {

    },
    show : function () {

    },
    hide : function () {

    },
    update : function (content) {
      console.log(content);
    }
  };

  $.fn.tooltip = function (method) {
    if (methods[method]) {
      return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this,arguments);
    } else {
      $.error('Method' + method + 'dose not exist on jQuery.tooltip');
    }
  }
})(jQuery)

//面向对象封装
;(function($,window,document,undefined) {
  var Beautifier = function (ele, opt) {
    this.$element = ele,
    this.default = {
      "color" : "red",
      'fontSize' : "12px"
    };
    this.options = $.extend({}, this.default, opt);
  }

  Beautifier.prototype = function () {
    beautif : function () {
      return this.$element.css({
        'color': this.options.color,
        'fontSize': this.options.fontSize
      })
    }
  }

  $.fn.myPlugin = function (options) {
    var beautifier = new Beautifier(this, options);
    return beautifier.beautif();
  }
})(jQuery,window,document)
