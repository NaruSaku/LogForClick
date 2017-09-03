/**
 * Created by students on 2017/5/3.
 */
//启用javascript 日志功能
var logger = log4javascript.getLogger();
log4javascript.setEnabled(true);

var ajaxAppender = new log4javascript.JsonAppender(endpoints.log);
// var ajaxAppender = new log4javascript.AjaxAppender("http://localhost:8080/log/log/ERROR/0/0/a/systemPoint");   //AjaxAppender(String url[, Boolean withCredentials])
ajaxAppender.setThreshold(log4javascript.Level.DEBUG);
ajaxAppender.addHeader("Content-Type","application/json;charset=utf-8");
ajaxAppender.setBatchSize(10);
ajaxAppender.layout.pattern = '%d{yyyy-MM-dd HH:mm:ss,SSS} [%c] %-5p - %m{1}%n';
logger.addAppender(ajaxAppender);


//点击Ctrl键时显示/隐藏日志控制台
document.onkeydown = function (evt) {
    var VK_F9 = 120;
    //兼容IE和Firefox获得keyBoardEvent对象
    var evt = (evt) ? evt : ((window.event) ? window.event : "");
    //兼容IE和Firefox获得keyBoardEvent对象的键值
    var key = evt.keyCode ? evt.keyCode : evt.which;

    if (evt.ctrlKey) {
        if (appender.visible) {
            appender.hide();
            appender.visible = false;
            log4javascript.setEnabled(false);
        } else {
            log4javascript.setEnabled(true);
            appender.show();
            appender.visible = true;
        }
    }
};