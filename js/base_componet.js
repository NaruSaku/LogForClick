/**
 * Created by students on 2017/4/23.
 */
$(document).ready(function(){
    $(".navigation").append(
        '<div class="row"><div class="col-md-1 col-sm-1"></div>' +
        '<div class="col-md-2 col-sm-10"><img src="/img/logo/clickgwas_logo.png"/></div>' +
        '<div class="col-md-8 col-sm-10">' +
        '<ul class="pull-right">' +
        '<li>' +
        '<a id="home"href="/">Home</a>' +
        '</li>' +
        '<li>' +
        '<a id="data_analysis"href="/#analysis_function">Data Analysis</a>' +
        '</li>' +
        '<li>' +
        '<a id="demo"href="/demo/">Demo</a></li>' +
        '<li>' +
        '<a id="forum"href="http://forum.clickgwas.org/">Forum</a>' +
        '</li>' +
        '<li>' +
        '<a id="login"href="http://portal.clickgwas.org/">Login</a>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '<div class="col-md-1 col-sm-1">' +
        '</div>' +
        '</div>');
    $("#"+$("body").attr("active")).addClass("active");
    $(".footer").append('' +
        '<div class="row">' +
        '<div class="col-md-1"></div>' +
        '<div class="col-md-2 brand">' +
        '<a href="#"><img src="/img/logo/clickgwas_logo_blue.png"/></a>' +
        '<small><span>&copy;2016-2017 clickgwas.org</span></small>' +
        '</div>' +
        '<div class="col-md-8"><div class="info">' +
        '<h4 class="title">About Data</h4>' +
        '<div class="con"><a href="/#analysis_function">Analysis</a>' +
        '<a href="http://www.clickgwas.org/submitdata/">Submit</a></div>' +
        '</div><div class="info"><h4 class="title">Quick Entrance</h4>' +
        '<div class="con"><a href="http://www.clickgwas.org/newsandupdates/">News&Updates</a>' +
        '<a href="http://www.clickgwas.org/documents/">Documents</a>' +
        '<a href="http://www.clickgwas.org/papers/">Papers</a>' +
        '<a href="http://forum.clickgwas.org/">Forum</a>' +
        '</div></div>' +
        '<div class="info">' +
        '<h4 class="title">About</h4>' +
        '<div class="con">' +
        '<a href="http://www.clickgwas.org/about/">Our Project</a>' +
        '<a href="http://www.clickgwas.org/about/">Our Team</a>' +
        '<a href="http://www.clickgwas.org/about/">Contact US</a>' +
        '<a href="http://forum.clickgwas.org/faqs/">FAQs</a></div>' +
        '</div><div class="info"><h4 class="title">Links</h4>' +
        '<div class="con"><a href="http://www.clickgwas.org/">www.clickgwas.org</a>' +
        '<a href="http://www.tju.edu.cn/">Tianjin University</a>' +
        '<a href="http://www.utsouthwestern.edu/">UT Southwestern</a>' +
        '<a href="https://gdc.cancer.gov/">GDC</a><a href="https://www.nih.gov/">NIH</a>' +
        '</div></div></div><div class="col-md-1"></div></div>');
    $("a[href^='http://']").attr("target","_blank");
    $("a[href^='https://']").attr("target","_blank");
});