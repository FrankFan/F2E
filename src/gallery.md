移动端web开发

### 技术准备
* 兼容性考虑
![](http://images.cnitblog.com/blog/282019/201412/072227127809509)

* 使用手势操作(gesture/touch)代替鼠标I/O事件(mouseover、click)
`touch`事件： touchstart -> touchmove -> touchend
touchcancle 取消touch

* 响应式布局

* 使用CSS3代替传统的DOM Animation（使用setTimeout定时器定时修改DOM元素的style属性实现）
CSS3动画会使用设备GPU渲染，动用硬件本身的资源进行处理，效率会更高。


### 移动端的开发框架和库

jQuery mobile
Augular mobile
Zepto.js


## 性能优化tips

### touch
`touch`事件： touchstart -> touchmove -> touchend
touchcancle 取消touch
使用touch事件的优点：
1、click事件比touch事件延迟300ms
2、touch事件支持多点触摸
3、touch 支持 手势操作

### CSS3 Animation
使用CSS3代替传统的DOM Animation（使用setTimeout定时器定时修改DOM元素的style属性实现）
CSS3动画会使用设备GPU渲染，动用硬件本身的资源进行处理，效率会更高。


CSS 动画
```css
@keyframes  /* 关键帧 */
animation-name 动画名称
animation-duration 动画持续时间
animation-delay 延迟执行时间
animation-timing-funtion 动画形变函数指定
animation-play-state 播放状态显示
```
webkitAnimationEnd事件，动画结束事件

CSS3动画框架： Animation.css
[http://daneden.github.io/animate.css/](http://daneden.github.io/animate.css/)


### Canvas
使用`canvas`代替传统的`image`标签渲染图片，因为`canvas`会调用机器硬件GPU对图片进行渲染，从而使图片加载速度更快。

`drawImage` API
在canvas上绘制图片：
drawImage(image, x, y)

在canvas上绘制并缩放图片：
drawImage(image, x, y, width, height)

[Image Object]
```javascript
var img = new Image();
img.onload = function(){
	debugger;
};
img.src = 'http://www.baidu.com/img/bd_logo1.png';
```



