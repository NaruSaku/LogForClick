/**
 * Created by students on 2017/4/3.
 */
var log = new Object({
    URL: {
        //{account}/{ip}/{beginDate}/{endDate}/{content}/loginPoint
        BASE_URL: function () {
            return "http://localhost:8080/log/log/";    // 网站实际运行时改为真实IP，第一个为包名，第二个为requestmap名
        },
        LOG: function (args) {
            if(args[1]=="") args[1]="All";
            var additionalUrl=args[1];
            for(var i=2;i<args.length;i++){
                if(args[i]=="") {                    // 如果是空字符串，则continue
                    args[i]="All"                //  空字符串没法传输
                    additionalUrl+="/"+args[i];
                    continue;
                }
                if(args[i].toString()=='NaN') {   // 如果日期部分为NAN，设为空
                    args[i]=0;                    // 传到后台以后要判断是否符合数值类型，可以改成0
                    additionalUrl+="/"+args[i];
                    continue;
                }
                additionalUrl+="/"+args[i];
            }
            var url = log.URL.BASE_URL() + additionalUrl;
            switch (document.title){
                case 'Login Log':
                case 'LoginLog Analytics':
                    url += "/loginPoint";   //  不知道有啥用
                    break;
                case 'System Log':
                case 'SystemLog Analytics':
                    url += "/systemPoint";
                    break;
                case 'Visit Log':
                case 'VisitLog Analytics':
                    url += "/visitPoint";
                    break;
                case 'Linear Log':
                case 'LinearLog Analytics':
                    url += "/linearPoint";    ///记得换回来！！！！在Java里写错了
                    break;
                case 'Mountain Log':
                case 'MountainLog Analytics':
                    url += "/mountainPoint";
                    break;
                case 'Volcano Log':
                case 'VolcanoLog Analytics':
                    url += "/volcanoPoint";
                    break;
            }
            //alert(url);
            // http://localhost:8080/click/log/aaaaaa/202.113.5.133/2017-04-10/2017-04-12/Login_Successfully/loginPoint
            return url;
        }
    },
    Operate: {
        getLogData: function (args) {
            var url = log.URL.LOG(args);
            console.log(url);
            $.ajax({
                type: "get",
                async: false,
                url: url,
                data: {},
                dataType: "json",
                success: function (data) {    // data数组返回的数据是 [{},{}]格式
                     if(data){
                        var point = [];        // point试图将原始数据转换成[[],[]]格式
                        for (var element in data) {           // 对于data中的每一个对象element{}
                            var logPoint = [];                 // 要把对象转化为数组
                            logPoint.push("0");                 // 任意字符占位，防止数据被序列号覆盖
                            for (var a in data[element]) {     // 把对象的属性值转化为数组中元素
                                logPoint.push(data[element][a]);
                            }
                            point.push(logPoint);        // 把生成的logPoint[]push进point[]
                        }
                        console.log(point);
                        if(args[0]=="table"){
                            log.View.input(point);    // 利用获取的point数组里的数据进行 表格 绘制
                        }
                        if(args[0]=="charts"){
                            log.View.draw(point);     // 利用获取的point数组里的数据进行 折线图 绘制
                        }
                        if(args[0]=="pie"){
                            log.View.pie(point);      // 利用获取的point数组里的数据进行 扇形图/柱形图 绘制
                        }
                    }
                    if(data.length==0){
                        alert("Please check your input for there is no record.");
                    }
                },
                error: function (errorMsg) {
                    alert("Something wrong!");
                }
            });
        }
    },
    View: {
        input: function(point) {
            var Title;
            var linearTitle=[
                { title: "No." },
                { title: "ID" },
                { title: "Account" },
                { title: "IP" },
                { title: "Time" },
                { title: "CancerType" },
                { title: "GeneName" },
                { title: "DataType_X" },
                { title: "DataType_Y" },
                { title: "SampleType" },
                { title: "IsLog" }
            ];
            var loginTitle=[
                { title: "No." },
                { title: "ID" },
                { title: "Account" },
                { title: "IP" },
                { title: "DateTime" },
                { title: "Content" }
            ];
            var systemTitle=[
                { title: "No." },
                { title: "ID" },
                { title: "Date" },
                { title: "Level" },
                { title: "Content" }
            ];
            var visitTitle=[
                { title: "No." },
                { title: "ID" },
                { title: "Account" },
                { title: "IP" },
                { title: "Page" },
                { title: "Status" },
                { title: "Login<br>Time" },
                { title: "Logout<br>Time" },
                { title: "Stay<br>Time" },
                { title: "Source<br>Page" },
                { title: "Browser" }
            ];
            var mountainTitle=[
                { title: "No." },
                { title: "ID" },
                { title: "Account" },
                { title: "IP" },
                { title: "Time" },
                { title: "CancerType" },
                { title: "Chromosome" },
                { title: "DataType" },
                { title: "IsLog" },
                { title: "showType" }
            ];
            var volcanoTitle=[
                { title: "No." },
                { title: "ID" },
                { title: "Account" },
                { title: "IP" },
                { title: "Time" },
                { title: "CancerType" },
                { title: "DataType" }
            ];
            switch(document.title)
            {
                case 'Linear Log':
                    Title = linearTitle;
                    for(var id=0;id<point.length;id++){
                        point[id][4]=ChangeTimeFormat(parseInt(point[id][4]));      // 根据表格结构选择是日期的那个数
                    }
                    break;
                case 'Login Log':       //  这个空格真蛋疼
                    Title = loginTitle;
                    for(var id=0;id<point.length;id++){
                        point[id][4]=ChangeTimeFormat(parseInt(point[id][4]));      // 根据表格结构选择是日期的那个数
                    }
                    break;
                case 'System Log':
                    Title = systemTitle;
                    for(var id=0;id<point.length;id++){
                        point[id][2]=ChangeTimeFormat(parseInt(point[id][2]));      // 根据表格结构选择是日期的那个数
                    }
                    break;
                case 'Visit Log':
                    Title = visitTitle;
                    for(var id=0;id<point.length;id++){
                        point[id].splice(8,0,parseInt(point[id][7])-parseInt(point[id][6]));    // 计算页面停留时间，注意时间格式
                        point[id][8]=TimeStampToTime(point[id][8]);
                    }
                    for(var id=0;id<point.length;id++){
                        point[id][6]=ChangeTimeFormat(point[id][6]);      // 根据表格结构选择是日期的那个数
                    }
                    for(var id=0;id<point.length;id++){
                        point[id][7]=ChangeTimeFormat(point[id][7]);      // 根据表格结构选择是日期的那个数
                    }
                    for(var id=0;id<point.length;id++){
                        point[id][5]=toChinese((point[id][5]).replace(/\*/g,"\\"));      // 根据表格结构选择是日期的那个数
                    }
                    break;
                case 'Mountain Log':
                    Title = mountainTitle;
                    for(var id=0;id<point.length;id++){
                        point[id][4]=ChangeTimeFormat(parseInt(point[id][4]));      // 根据表格结构选择是日期的那个数
                    }
                    break;
                case 'Volcano Log':
                    Title = volcanoTitle;
                    for(var id=0;id<point.length;id++){
                        point[id][4]=ChangeTimeFormat(parseInt(point[id][4]));      // 根据表格结构选择是日期的那个数
                    }
                    break;
            }
            if ($('#dt3').hasClass('dataTable')){
                var t = $('#dt3').dataTable();
                t.fnClearTable(); //清空一下table
                t.fnDestroy();    //还原初始化了的datatable
            }
            var t = $('#dt3').DataTable( {
                data: point,
                "bRetrieve": true,
                "bJQueryUI": true,
                "sPaginationType": "full_numbers",
                "lengthMenu": [[15, 25, 50, -1], [15, 25, 50, "All"]],   //  自定义数量
                columns: Title,
                "columnDefs": [ {
                    "searchable": false,
                    "orderable": false,
                    "targets": 0
                } ],
                "order": [[ 0, 'asc' ]]
            } );

            t.on( 'order.dt search.dt', function () {
                t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
                    cell.innerHTML = i+1;
                } );
            } ).draw();
        },
        draw: function (point) {
            //  关键为获得一个二维数组，横坐标为日期（年月日），纵坐标为那个时间的访问量
            //  可以优化数据结构，使每张表的第二组数据均为时间，这样可以去掉这里的switch，无所谓啦
            var publicCount = {};            //  给不同值计数的数组
            var id;                          //  决定了不同日志表的point[][id]
            var chart_X;                     //  折线图X轴
            switch (document.title){         //  根据网页查询
                case 'LoginLog Analytics':
                    id = 4;
                    chart_X = "网站登录量走势图";
                    break;
                case 'SystemLog Analytics':
                    id = 2;
                    chart_X = "系统日志量走势图";
                    break;
                case 'VisitLog Analytics':
                    id = 6;
                    chart_X = "网站访问量走势图";
                    break;
                case 'LinearLog Analytics':
                    id = 4;
                    chart_X = "Linear查询量走势图";
                    break;
                case 'MountainLog Analytics':   // 以下待定
                    id = 4;
                    chart_X = "Mountain查询量走势图";
                    break;
                case 'VolcanoLog Analytics':
                    id = 4;
                    chart_X = "Volcano查询量走势图";
                    break;
            }
            for (var i = 0, len = point.length; i < len; i++) {
                var el = parseInt(point[i][id]);              //  毫秒格式
                var StandardDate=new Date(el);      // Date格式
                var DateDate=Date.UTC(StandardDate.getFullYear(),StandardDate.getMonth(),StandardDate.getDate());
                if (!publicCount[DateDate]) {       //  建立键-值数组
                    publicCount[DateDate] = 1;
                }else{
                    publicCount[DateDate]++;
                }
            }


            var publicPoint = [];
            var arr = Object.keys(publicCount);
            for (var publicID = 0; publicID < Object.getOwnPropertyNames(publicCount).length; publicID++) {
                publicPoint.push([eval(arr[publicID]), publicCount[arr[publicID]]]);
            }

            $('#flot-lines').highcharts({
                credits: {
                    enabled:false
                },
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: chart_X
                },
                subtitle: {
                    text: document.ontouchstart === undefined ?
                        '鼠标拖动可以进行缩放' : '手势操作进行缩放'
                },
                xAxis: {
                    // categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        millisecond: '%H:%M:%S.%L',
                        second: '%H:%M:%S',
                        minute: '%H:%M',
                        hour: '%H:%M',
                        day: '%m-%d',
                        week: '%m-%d',
                        month: '%Y-%m',
                        year: '%Y'
                    }
                },
                tooltip: {
                    dateTimeLabelFormats: {
                        millisecond: '%H:%M:%S.%L',
                        second: '%H:%M:%S',
                        minute: '%H:%M',
                        hour: '%H:%M',
                        day: '%Y-%m-%d',
                        week: '%m-%d',
                        month: '%Y-%m',
                        year: '%Y'
                    }
                },
                yAxis: {
                    title: {
                        text: '数量'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: [{
                    type: 'area',
                    name: '查询量',    //  坐标图上的点
                    data: publicPoint
                }]
            });
        },
        pie: function (point) {
            var options=$("#pie-chart option:selected").val();     // 获取选中元素的值
            var options2=$("#chartStyle option:selected").val();   // 获取绘图种类的值

            var Count;                //  最终画图的数组
            var Column_X=[];             //  柱状图X轴
            var titleText;
            var seriesName;
            var ColumnText;

            // 画图的公用函数,实际上只是把数据存入数组里，并没有真正画图
            function Draw(options) {
                var publicCount = {};            //  给不同值计数的数组
                var id;                          //  决定了point[][id]
                switch (document.title){         //  根据网页查询
                    case 'LinearLog Analytics':
                        switch(options)          //  根据select选值不同决定需要point的哪一列数据
                        {
                            case 'Account':
                                id=2;
                                    titleText = "用户百分比";
                                    seriesName = "用户百分比";
                                    ColumnText = "用户查询频数";
                                break;
                            case 'IP':
                                id=3;
                                    titleText = "IP百分比";
                                    seriesName = "IP百分比";
                                    ColumnText = "IP查询频数";
                                break;
                            case 'Month':
                            case 'Year':
                            case 'Hour':
                                id=4;
                                    titleText = "各时间段查询量占百分比";
                                    seriesName = "时间段查询量占百分比";
                                    ColumnText = "查询频数";
                                break;
                            case 'CancerType':
                                id=5;
                                    titleText = "用户输入不同CancerType百分比";
                                    seriesName = "查询百分比";
                                    ColumnText = "用户输入CancerType频数";
                                break;
                            case 'GeneName':
                                id=6;
                                    titleText = "用户输入不同GeneName百分比";
                                    seriesName = "查询百分比";
                                    ColumnText = "用户输入GeneName频数";
                                break;
                            case 'DataType_X':
                                id=7;
                                    titleText = "用户为X轴输入的不同DataType百分比";
                                    seriesName = "查询百分比";
                                    ColumnText = "用户为X轴输入的不同DataType频数";
                                break;
                            case 'DataType_Y':
                                id=8;
                                    titleText = "用户为Y轴输入的不同DataType百分比";
                                    seriesName = "查询百分比";
                                    ColumnText = "用户为Y轴输入的不同DataType频数";
                                break;
                            case 'SampleType':
                                id=9;
                                    titleText = "用户输入不同SampleType百分比";
                                    seriesName = "查询百分比";
                                    ColumnText = "用户输入SampleType频数";
                                break;
                            case 'IsLog':
                                id=10;
                                    titleText = "对数与非对数所占百分比";
                                    seriesName = "查询百分比";
                                    ColumnText = "对数与非对数频数";
                                break;
                        }
                        break;
                    case 'MountainLog Analytics':
                        switch(options)          //  根据select选值不同决定需要point的哪一列数据
                        {
                            case 'Account':
                                id=2;
                                titleText = "用户百分比";
                                seriesName = "用户百分比";
                                ColumnText = "用户查询频数";
                                break;
                            case 'IP':
                                id=3;
                                titleText = "IP百分比";
                                seriesName = "IP百分比";
                                ColumnText = "IP查询频数";
                                break;
                            case 'Month':
                            case 'Year':
                            case 'Hour':
                                id=4;
                                titleText = "各时间段查询量占百分比";
                                seriesName = "时间段查询量占百分比";
                                ColumnText = "查询频数";
                                break;
                            case 'CancerType':
                                id=5;
                                titleText = "用户输入不同CancerType百分比";
                                seriesName = "查询百分比";
                                ColumnText = "用户输入CancerType频数";
                                break;
                            case 'Chromosome':
                                id=6;
                                titleText = "用户输入不同Chromosome百分比";
                                seriesName = "查询百分比";
                                ColumnText = "用户输入Chromosome频数";
                                break;
                            case 'DataType':
                                id=7;
                                titleText = "用户输入的不同DataType百分比";
                                seriesName = "查询百分比";
                                ColumnText = "用户输入的不同DataType频数";
                                break;
                            case 'IsLog':
                                id=8;
                                titleText = "用户选择是否对数百分比";
                                seriesName = "查询百分比";
                                ColumnText = "用户选择是否对数频数";
                                break;
                            case 'ShowType':
                                id=9;
                                titleText = "用户选择不同ShowType百分比";
                                seriesName = "查询百分比";
                                ColumnText = "用户选择不同ShowType频数";
                                break;
                        }
                        break;
                    case 'VolcanoLog Analytics':
                        switch(options)          //  根据select选值不同决定需要point的哪一列数据
                        {
                            case 'Account':
                                id=2;
                                titleText = "用户百分比";
                                seriesName = "用户百分比";
                                ColumnText = "用户查询频数";
                                break;
                            case 'IP':
                                id=3;
                                titleText = "IP百分比";
                                seriesName = "IP百分比";
                                ColumnText = "IP查询频数";
                                break;
                            case 'Month':
                            case 'Year':
                            case 'Hour':
                                id=4;
                                titleText = "各时间段查询量占百分比";
                                seriesName = "时间段查询量占百分比";
                                ColumnText = "查询频数";
                                break;
                            case 'CancerType':
                                id=5;
                                titleText = "用户输入不同CancerType百分比";
                                seriesName = "查询百分比";
                                ColumnText = "用户输入CancerType频数";
                                break;
                            case 'DataType':
                                id=6;
                                titleText = "用户输入不同DataType百分比";
                                seriesName = "查询百分比";
                                ColumnText = "用户输入DataType频数";
                                break;
                        }
                        break;
                    case 'LoginLog Analytics':
                        switch(options)
                        {
                            case 'Account':
                                id=2;
                                    titleText = "各用户登陆量占百分比";
                                    seriesName = "用户登陆占百分比";
                                    ColumnText = "用户登陆频数";
                                break;
                            case 'IP':
                                id=3;
                                    titleText = "各IP登陆量占百分比";
                                    seriesName = "IP登陆占百分比";
                                    ColumnText = "IP登陆频数";
                                break;
                            case 'Month':
                            case 'Year':
                            case 'Hour':
                                id=4;
                                    titleText = "各时间段登录量占百分比";
                                    seriesName = "时间段登陆量占百分比";
                                    ColumnText = "登录频数";
                                break;
                            case 'Content':
                                id=5;
                                    titleText = "登录情况占百分比";
                                    seriesName = "登录情况占百分比";
                                    ColumnText = "登录情况频数";
                                break;
                        }
                        break;
                    case 'SystemLog Analytics':
                        switch(options)
                        {
                            case 'Month':
                            case 'Year':
                                id=2;
                                    titleText = "各时间段问题日志占百分比";
                                    seriesName = "年产生的问题日志占百分比";
                                    ColumnText = "问题日志频数图";
                                break;
                            case 'Level':
                                id=3;
                                    titleText = "各问题日志级别占百分比";
                                    seriesName = "问题日志级别占百分比";
                                    ColumnText = "各级别问题日志频数";
                                break;
                        }
                        break;
                    case 'VisitLog Analytics':
                        for(var id=0;id<point.length;id++){
                            point[id].splice(8,0,parseInt(point[id][7])-parseInt(point[id][6]));    // 计算页面停留时间，注意时间格式
                        }
                        switch(options)
                        {
                            case 'Month':    // 统计的都是进入页面时间
                            case 'Year':
                            case 'Hour':
                                id=6;
                                    titleText = "各时间段访问量占百分比";
                                    seriesName = "时间段访问量占百分比";
                                    ColumnText = "访问量频数图";
                                break;
                            case 'Account':   // 账户可以为空
                                id=2;
                                    titleText = "各账户访问量占百分比";
                                    seriesName = "用户访问占百分比";
                                    ColumnText = "账户访问量频数";
                                break;
                            case 'Page':
                                id=4;
                                    titleText = "各页面访问量占百分比";
                                    seriesName = "页面访问量占百分比";
                                    ColumnText = "页面访问量频数";
                                break;
                            case 'IP':
                                id=3;
                                    titleText = "各IP访问占百分比";
                                    seriesName = "IP访问占百分比";
                                    ColumnText = "IP访问频数";
                                break;
                            case 'Status':
                                id=5;
                                    titleText = "各状态码占百分比";
                                    seriesName = "状态码占百分比";
                                    ColumnText = "状态码频数";
                                break;
                            case 'StayTime':
                                id=8;
                                    titleText = "各访问时间占百分比";
                                    seriesName = "访问时间占百分比";
                                    ColumnText = "访问时间频数";
                                break;
                            case 'Browser':
                                id=10;
                                    titleText = "各浏览器占百分比";
                                seriesName = "浏览器占百分比";
                                ColumnText = "浏览器频数";
                                break;

                        }
                        break;
                }
                if(options=="StayTime"){
                    publicCount["0-10s"]=0;
                    publicCount["10s-1min"]=0;
                    publicCount["1-3min"]=0;
                    publicCount["3-10min"]=0;
                    publicCount[">10min"]=0;
                }
                for (var i = 0, len = point.length; i < len; i++) {
                    var el = point[i][id];   //  这都是要根据真实数据结构改的，不能用parseInt
                    var newTime;
                    if(options=="StayTime"){            // 如果选择了stayTime  *1000 毫秒转化
                        if(el<=10*1000)
                            publicCount["0-10s"]+=1;
                        if(el>10*1000&&el<60*1000)
                            publicCount["10s-1min"]+=1;
                        if(el>60*1000&&el<180*1000)
                            publicCount["1-3min"]+=1;
                        if(el>180*1000&&el<600*1000)
                            publicCount["3-10min"]+=1;
                        if(el>600*1000)
                            publicCount[">10min"]+=1;
                        continue;
                    }
                    if(options=="Year"){
                        newTime = new Date(parseInt(point[i][id])); //就得到普通的时间了
                        el=newTime.getFullYear();
                    }
                    if(options=="Month"){
                        newTime = new Date(parseInt(point[i][id])); //就得到普通的时间了
                        el=newTime.getMonth()+1;
                    }
                    if(options=="Hour"){
                        newTime = new Date(parseInt(point[i][id])); //就得到普通的时间了
                        el=newTime.getHours();
                    }

                    if (!publicCount[el]) {       //  建立键-值数组
                        publicCount[el] = 1;
                    }else{
                        publicCount[el]++;
                    }
                }

                var arr = Object.keys(publicCount);
                var publicPoint = [];

                for (var publicID = 0; publicID < Object.getOwnPropertyNames(publicCount).length; publicID++) {
                    publicPoint.push([arr[publicID], publicCount[arr[publicID]]]);
                    Column_X.push(arr[publicID]);
                }
                Count = publicPoint;
            }

            //  如果选择的是饼图选项
            if(options2=="Pie"){    //   绘制扇形图
                $("#sliders").css('display','none');
                Draw(options);
                $('#flot-pie').highcharts({
                    credits: {
                        enabled:false
                    },
                    chart: {
                        type: 'pie',
                        options3d: {
                            enabled: true,
                            alpha: 45,
                            beta: 0
                        }
                    },
                    title: {
                        text: titleText
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            depth: 35,
                            dataLabels: {
                                enabled: true,
                                format:'{point.name}'     //
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: seriesName,
                        data: Count
                        /*[
                         ['Firefox',   45.0],
                         ['IE',       26.8],
                         ['Chrome',       26.8],
                         {
                         name: 'Chrome',
                         y: 12.8,
                         sliced: true,
                         selected: true
                         },
                         ['Safari',    8.5],
                         ['Opera',     6.2],
                         ['Others',   0.7]
                         ]*/
                    }]
                });    //  画饼图
            }
            //  如果选择的是柱形图选项
            if(options2=="Column"){      //  如果选中了Column
                $("#sliders").css('display','block');
                Draw(options);
                $(function () {
                    var chart = new Highcharts.Chart({
                        credits: {
                            enabled:false
                        },
                        chart: {
                            renderTo: 'flot-pie',
                            type: 'column',
                            options3d: {
                                enabled: true,
                                alpha: 15,
                                beta: 15,
                                depth: 50,
                                viewDistance: 25
                            }
                        },
                        title: {
                            text: '3D柱状查询图'
                        },
                        subtitle: {
                            text: ''
                        },
                        plotOptions: {
                            column: {
                                depth: 25
                            }
                        },
                        xAxis: {
                            title: {
                                text: '类型'
                            },
                            categories: Column_X
                        },
                        yAxis: {
                            title: {
                                text: '频数'
                            }
                        },
                        series: [{
                            name: ColumnText,
                            data: Count
                        }]
                    });
                    function showValues() {
                        $('#alpha-value').html(chart.options.chart.options3d.alpha);
                        $('#beta-value').html(chart.options.chart.options3d.beta);
                        $('#depth-value').html(chart.options.chart.options3d.depth);
                    }
                    // Activate the sliders
                    $('#sliders input').on('input change', function () {
                        chart.options.chart.options3d[this.id] = this.value;
                        showValues();
                        chart.redraw(false);
                    });
                    showValues();
                });          //  画柱形图
            }
        }
    }
})

function ChangeTimeFormat(time){
    var StandardDate=new Date(time);
    if(StandardDate.getMinutes()<10&&StandardDate.getSeconds()<10){
        return StandardDate.getFullYear()+"-"+(StandardDate.getMonth()+1)+"-"+StandardDate.getDate()
            +"<br/>"+StandardDate.getHours()+":0"+StandardDate.getMinutes()+":0"+StandardDate.getSeconds();
    }
    if(StandardDate.getMinutes()<10){
        return StandardDate.getFullYear()+"-"+(StandardDate.getMonth()+1)+"-"+StandardDate.getDate()
            +"<br/>"+StandardDate.getHours()+":0"+StandardDate.getMinutes()+":"+StandardDate.getSeconds();
    }
    if(StandardDate.getSeconds()<10){
        return StandardDate.getFullYear()+"-"+(StandardDate.getMonth()+1)+"-"+StandardDate.getDate()
            +"<br/>"+StandardDate.getHours()+":"+StandardDate.getMinutes()+":0"+StandardDate.getSeconds();
    }
    else
        return StandardDate.getFullYear()+"-"+(StandardDate.getMonth()+1)+"-"+StandardDate.getDate()
    +"<br/>"+StandardDate.getHours()+":"+StandardDate.getMinutes()+":"+StandardDate.getSeconds();
    // http://www.cnblogs.com/yjf512/p/3796229.html  javascript时间戳和日期字符串相互转换
}
function TimeStampToTime(timestamp) {
    var time = parseFloat(timestamp) /1000;
    if (null!= time &&""!= time) {
        if (time >60&& time <60*60) {
            time = parseInt(time /60.0) +"分钟"+ parseInt((parseFloat(time /60.0) -
                    parseInt(time /60.0)) *60) +"秒";
        }else if (time >=60*60&& time <60*60*24) {
            time = parseInt(time /3600.0) +"小时"+ parseInt((parseFloat(time /3600.0) -
                    parseInt(time /3600.0)) *60) +"分钟"+
                parseInt((parseFloat((parseFloat(time /3600.0) - parseInt(time /3600.0)) *60) -
                    parseInt((parseFloat(time /3600.0) - parseInt(time /3600.0)) *60)) *60) +"秒";
        }else {
            time = parseInt(time) +"秒";
        }
    }else{
        time = "0 时 0 分0 秒";
    }
    return time;
}  //  停留时间分析
function inputTipText(){
    $("input[tipMsg]").each(function(){  // each用于jQuery的遍历
        if($(this).val() == ""){
            var oldVal=$(this).attr("tipMsg");
            if($(this).val()=="") {
                $(this).attr("value",oldVal).css({"color":"#888"});
            }
            $(this).css({"color":"#888"})     //灰色
                .focus(function(){
                    if($(this).val()!=oldVal){
                        $(this).css({"color":"#000"})}
                    else{
                        $(this).val("").css({"color":"#888"})}
                })
                .blur(function(){   // 当输入域失去焦点
                    if($(this).val()==""){
                        $(this).val(oldVal).css({"color":"#888"})}
                })
                .keydown(function(){$(this).css({"color":"#000"})});
        }
    });
}     //  给输入基因初始化
var cancer_arr = [
    /**/
    "Acute Myeloid Leukemia [LAML]",
    /**/
    "Adrenocortical carcinoma [ACC]",
    /**/
    "Bladder Urothelial Carcinoma [BLCA]",
    /**/
    "Brain Lower Grade Glioma [LGG]",
    /**/
    "Breast invasive carcinoma [BRCA]",
    /**/
    "Cervical squamous cell carcinoma and endocervical adenocarcinoma [CESC]",
    /**/
    "Cholangiocarcinoma [CHOL]",
    /**/
    "Colon adenocarcinoma [COAD]",
    /**/
    "Esophageal carcinoma [ESCA]",
    /**/
    "FFPE Pilot Phase II [FPPP]",
    /**/
    "Glioblastoma multiforme [GBM]",
    /**/
    "Head and Neck squamous cell carcinoma [HNSC]",
    /**/
    "Kidney Chromophobe [KICH]",
    /**/
    "Kidney renal clear cell carcinoma [KIRC]",
    /**/
    "Kidney renal papillary cell carcinoma [KIRP]",
    /**/
    "Liver hepatocellular carcinoma [LIHC]",
    /**/
    "Lung adenocarcinoma [LUAD]",
    /**/
    "Lung squamous cell carcinoma [LUSC]",
    /**/
    "Lymphoid Neoplasm Diffuse Large B-cell Lymphoma [DLBC]",
    /**/
    "Mesothelioma [MESO]",
    /**/
    "Ovarian serous cystadenocarcinoma [OV]",
    /**/
    "Pancreatic adenocarcinoma [PAAD]",
    /**/
    "Pheochromocytoma and Paraganglioma [PCPG]",
    /**/
    "Prostate adenocarcinoma [PRAD]",
    /**/
    "Rectum adenocarcinoma [READ]",
    /**/
    "Sarcoma [SARC]",
    /**/
    "Skin Cutaneous Melanoma [SKCM]",
    /**/
    "Stomach adenocarcinoma [STAD]",
    /**/
    "Testicular Germ Cell Tumors [TGCT]",
    /**/
    "Thymoma [THYM]",
    /**/
    "Thyroid carcinoma [THCA]",
    /**/
    "Uterine Carcinosarcoma [UCS]",
    /**/
    "Uterine Corpus Endometrial Carcinoma [UCEC]",
    /**/
    "Uveal Melanoma [UVM]"
    /**/
];
