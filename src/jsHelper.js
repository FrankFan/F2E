 /*
  * jsHelper 0.1
  * Copyright (c) 2014 FrankFan http://fy98.com/
  * Date: 2014-11-20
  * jsHelper插件封装了一些jQuery中没有的方法
  */
 (function($) {
     $.fn.jsHelper = function(options) {
         var defaults = {
             evenRowClass: "evenRow",
             oddRowClass: "oddRow",
             activeRowClass: "activeRow"
         }
         var options = $.extend(defaults, options);
         this.each(function() {
             var thisTable = $(this);
             //添加奇偶行颜色
             $(thisTable).find("tr:even").addClass(options.evenRowClass);
             $(thisTable).find("tr:odd").addClass(options.oddRowClass);
             //添加活动行颜色
             $(thisTable).find("tr").bind("mouseover", function() {
                 $(this).addClass(options.activeRowClass);
             });
             $(thisTable).find("tr").bind("mouseout", function() {
                 $(this).removeClass(options.activeRowClass);
             });
         });
     };
 })(jQuery);