console.log('\'Allo \'Allo!');

var key = "1560403139";
var keyfrom = "Frank-Blog";
var api = "http://fanyi.youdao.com/openapi.do?keyfrom="+keyfrom+"&key="+key+"&type=data&doctype=jsonp&callback=show&version=1.1&q=API";

var url = "http://fanyi.youdao.com/openapi.do?keyfrom=Frank-Blog&key=1560403139&type=data&doctype=jsonp&version=1.1&q=good&callback=?";

$.getJSON(url, function (data) {
	debugger;
	console.log(data.basic.explains);

});

// var show = function (data) {
// 	debugger;
// }

// $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format
// =json&jsoncallback=?", function(data){
//   $.each(data.items, function(i,item){
//     $("<img/>").attr("src", item.media.m).appendTo("#images");
//     if ( i == 3 ) return false;
//   });
// });