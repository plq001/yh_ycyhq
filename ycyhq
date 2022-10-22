// ==UserScript==
// @name         淘宝天猫隐藏优惠券
// @namespace    http://tbtmycyhq.yhq
// @version      0.1
// @description  淘宝/天猫购物助手，在浏览淘宝天猫的时候自动显示当前商品是否有粉丝福利购优惠(内部优惠券、隐藏优惠券、内部券、隐藏券)，让你买的比别人更便宜！
// @author       无声风雪
// @match             *://*.taobao.com/*
// @match             *://*.tmall.com/*
// @match             *://chaoshi.detail.tmall.com/*
// @match             *://*.tmall.hk/*
// @match             *://*.jd.com/*
// @match             *://*.jd.hk/*
// @exclude           *://login.taobao.com/*
// @exclude           *://login.tmall.com/*
// @exclude           *://uland.taobao.com/*
// @exclude           *://pages.tmall.com/*
// @exclude           *://wq.jd.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_setClipboard
// @grant GM_log
// @grant GM_xmlhttpRequest
// @grant unsafeWindow
// @grant window.close
// @grant window.focus
// @connect *
// @require           https://cdn.bootcdn.net/ajax/libs/jquery/1.8.3/jquery.min.js
// @require           https://cdn.bootcdn.net/ajax/libs/jquery.qrcode/1.0/jquery.qrcode.min.js
// @antifeature       referral-link 【应GreasyFork代码规范要求：含有优惠券查询功能的脚本必须添加此提示！在此感谢大家的理解...】
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement('link');
    style.href = 'https://qxm.iwapan.com/yh_style.css';
    style.rel = 'stylesheet';
    style.type = 'text/css';
    document.getElementsByTagName('head').item(0).appendChild(style);
    var serv = 'https://qxm.iwapan.com/yhq_chajian_js.aspx?ly=yh&';
    var url = location.href;
    var time = 50;

     if (url.indexOf("//item.taobao.com/item") != -1 || url.indexOf("//detail.tmall.com/item") != -1 || url.indexOf("//chaoshi.detail.tmall.com/item") != -1 || url.indexOf("//detail.tmall.hk/hk/item") != -1 || url.indexOf("//detail.tmall.hk/item") != -1) {

         function QueryString(item){
            var sValue = location.search.match(new RegExp("[\?\&]"+item+"=([^\&]*)(\&?)", "i"))
            return sValue?sValue[1]:sValue
        }

        $.get(serv+'tb_shangpin_id='+QueryString("id"), function(data) {
            var obj=$.parseJSON(data);
            console.log(obj.yhq[0].yhq_url);
            var dis_res_html="";
          dis_res_html=dis_res_html+"<div class='qxm_yhq'>";
	 dis_res_html=dis_res_html+"<a style='font-size: 10px;color:#fff' target='_blank'  href='"+obj.yhq[0].yhq_url+"'><div class='par'><span>"+obj.yhq[0].yhq_name+"</span></div></a>";
	 dis_res_html=dis_res_html+"<a style='font-size: 10px;color:#fff' target='_blank'  href='"+obj.yhq[0].yhq_url+"'>"+"<div class='copy'>点击领取</div></a>";
	 dis_res_html=dis_res_html+"";
	 dis_res_html=dis_res_html+"</div>";

      setTimeout( function () {
                $('.skuWrapper').after(dis_res_html);
            }, 1000);
        })
    }
})();
