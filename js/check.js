/**
 * Created by students on 2017/4/8.
 */

var account_flag=true;
var ip_flag=true;
var date_flag=true;

change_submit();     //  先检测一下
function checkAccount() {
    var account = $("#account").val().trim();
    var re = /^[A-Za-z]\w{5,}/       // 必须以字母开头，其次是字符至少出现5次
    if (!re.test(account)&&account!="") {     // 如果账户格式不对
        alert("账户格式错误！");
        account_flag=false;
    } else {
        account_flag=true;
    }
    change_submit();
}
function checkIP() {
    var ip = $("#ip").val().trim();
    var re = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/         /* ip地址的格式 */
    if (!re.test(ip)&&ip!="") {                                       // 如果ip地址格式错误
        alert("IP格式错误！");
        ip_flag=false;
    } else {
        //alert("IP格式正确！");
        ip_flag=true;
    }
    change_submit()
}
function checkDate() {
    var beginDate = $("#beginDate").val();            // 2017-04-11
    var endDate = $("#endDate").val();
    var d1 = ChangeIntoMilliSeconds(beginDate);  // 获取的Date格式的日期
    var d2 = ChangeIntoMilliSeconds(endDate);
    var openDate = ChangeIntoMilliSeconds("1969-03-18");
    if (beginDate != "" && endDate != "" && d1 > d2) {    // 日期输入可以为空
        alert("BeginDate must be smaller than the EndDate.");
        date_flag=false;
    }
    if (d1<openDate) {
        alert("Please enter a date after 2017/03/18.");        // 网站还没成立
        date_flag=false;
    }
    else {
        date_flag=true;
    }
    change_submit();
}

function change_submit()                       // 若几个参数检查未全部通过，不能点击查询按钮
{
    if (account_flag && date_flag && ip_flag) {
        $('#showTable').attr("disabled", false);
        $('#showCharts').attr("disabled",false);
    }
    else {
        $('#showTable').attr("disabled", true);
        $('#showCharts').attr("disabled",true);
    }
}


function ChangeIntoMilliSeconds(time) {             //  参数是"2017-03-18"形式
    var date = new Date(time.replace(/-/g, "\/"));  // 获取的Date格式的日期
    return date.getTime();               // 返回毫秒，再转化为字符串（结果没法比较了……MySQL要bigint型,java用long型）
}