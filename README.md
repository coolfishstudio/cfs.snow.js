# cfs.snow.js

canvas 下雪场景 不会影响页面使用 使用方式非常简单

利用这个js文件，我们就能很快的让页面出现下雪的动画效果。

例如

```<script type="text/javascript" src="/js/CFS.Snow.min.js"></script>```

引入我们的JS文件

执行 ```snow.down()```命令

支持移动端，对过期元素进行了处理

可定义的属性

``` js
info : {
    top : 0,
    left : 0,
    zIndex : 500,
    number : 70
}
```

分别是 画布的顶点位置，画布的左对齐位置，画布的层级，雪花的数量

定义方式 如下

``` snow.info.zIndex = 500; ```

>20150225 v0.0.1

发布最初版

参考样例 ： http://snow.coolfishstudio.com/
