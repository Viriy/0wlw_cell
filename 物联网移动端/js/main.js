mui.init();
//主界面和侧滑菜单界面均支持区域滚动；
mui('#offCanvasSideScroll').scroll();
mui('#offCanvasContentScroll').scroll();
mui('.mui-scroll-wrapper').scroll();
//实现ios平台原生侧滑关闭页面；
if (mui.os.plus && mui.os.ios) {
    mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件
        plus.webview.currentWebview().setStyle({
            'popGesture': 'none'
        });
    });
}

mui('.list_wrap,.f_nav').on('tap', 'a', function() {
    window.top.location.href = this.href;
});


//滑块 监听input事件，获取range的value值，也可以直接element.value获取该range的值
var rangeList = document.querySelectorAll('input[type="range"]');
for (var i = 0, len = rangeList.length; i < len; i++) {
    rangeList[i].addEventListener('input', function() {
        if (this.id.indexOf('field') >= 0) {
            document.getElementById(this.id + '-input').value = this.value;
        } else {
            document.getElementById(this.id + '-val').innerHTML = this.value;
        }
    });
}

//侧滑容器父节点
// var offCanvasWrapper = mui('.mui-off-canvas-wrap');
// $(".offCanvasHide").on('tap', function() {
//     offCanvasWrapper.offCanvas('close');
// });

