/**
 * Created by students on 2017/4/8.
 */

//  1.收集page
function getPage() {
    // switch-case document.title
    var path =window.location.pathname;
    var num = /\/[^/]*\.html/;
    var page = path.match(num).toString();
    if(page!=""){
        page = page.replace("/","").replace(".html","");
    }
    else {
        switch (document.title){
            case "Home | ClickGWAS":
                page="HomePage";
                break;
            case "Analysis | ClickGWAS":
                page="DataAnalysis";
                break;
            case "Beeswarm | Plot by Cancer | ClickGWAS":
                page="BeeSwarmByCancer";
                break;
            case "Beeswarm | Plot by Gene | ClickGWAS":
                page="BeeSwarmByGene";
                break;
            case "Mountain | Plot by Chromsome | ClickGWAS":
                page="Mountain";
                break;
            case "Manhattan | ClickGWAS":
                page="Manhattan";
                break;
            case "Volcano Plot | ClickGWAS":
                page="Volcano";
                break;
            case "Linear Regression | ClickGWAS":
                page="Linear";
                break;
            case "Submit Data | ClickGWAS":
                page="SubmitData";
                break;
            case "Paper | ClickGWAS":
                page="Papers";
                break;
            case "Home | Forum | ClickGWAS":
                page="Forum";
                break;
            case "About US | ClickGWAS":
                page="AboutUs";
                break;
            default:
                page="unknown page";
        }
    }

    return page;
}

var page=getPage();

//  2.收集IP和城市
//  目前仅发现可以在html里获取


//  收集源网页，尚未成功
var getReferrer=function() {
    var referrer = '';

    try {
        referrer = window.top.document.referrer;
    } catch(e) {
        if(window.parent) {
            try {
                referrer = window.parent.document.referrer;
            } catch(e2) {
                referrer = '';
            }
        }
    }
    if(referrer === '') {
        referrer = document.referrer;
    }
    return referrer;
};
var referrer = document.referrer;
if (!referrer) {
    try {
        if (window.opener) {
            // ie下如果跨域则抛出权限异常
            // safari和chrome下window.opener.location没有任何属性
            referrer = opener.location.href;
        }
    }
    catch (e) {}
}
// alert("来源网页:"+referrer);


//  3.收集浏览器
function getBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    } //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    } //判断是否IE浏览器
    if(userAgent.indexOf("Trident")>-1&&userAgent.indexOf("rv:11")>-1){
        return "IE";
    }//IE11判断
    if(userAgent.indexOf("MSIE")>-1&&userAgent.indexOf("Trident")>-1){
        return "IE";
    }//IE8-10判断
    if(userAgent.indexOf("MSIE")>-1){
        return "IE";
    }//IE6-7判断
}
var browser2=getBrowser();

//  收集目前用户账号，用session还是cookie再说
var account="JiYu2017";




//  收集进入时间，三个参数的数组，关闭的时候传递给数据库
visit_timing();
function visit_timing()
{
    var start;
    var end;
    var duration;
    start = new Date().getTime();
    $(window).bind('beforeunload',function(){
        end = new Date().getTime();//用户退出时间
        duration = end - start;
        //var city="all";
        var url="http://localhost:8080/log/log"+"/"+account+"/"+page+"/"+cip+"/"+city+"/"+start+"/"+end+"/"+browser2+"/insertVisit";
        console.log(url);
        $.ajax({
            type: "get",
            async: false,
            url: url,
            data: {},
            dataType: "json",
            success: function (successMsg) {
                alert("Insert Successfully!");
            },
            error: function (errorMsg) {
                alert("Something wrong!");
            }
        });
    });
}

function toUnicode(data)
{
    if(data == '') return 'NoWords';
    var str ='';
    for(var i=0;i<data.length;i++)
    {
        str+="\\u"+parseInt(data[i].charCodeAt(0),10).toString(16);
    }
    return str;
}
function toChinese(data)
{
    if(data == '') return '无城市信息';
    data = data.split("\\u");
    var str ='';
    for(var i=0;i<data.length;i++)
    {
        str+=String.fromCharCode(parseInt(data[i],16).toString(10));
    }
    return str;
}
function isChinese(city) {
    var re=/[^/u4e00\-/u9fa5]/;
    if (re.test(city)) {
        city=toUnicode(city);
        city=city.replace(/\\/g,"*");
        return city;
    }
    else return city;
}