// ==UserScript==
// @name         【最新可用！】淘宝天猫隐藏优惠券
// @namespace    http://tbtmycyhq.yhq
// @version      1.4
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
// @license MIT
// @antifeature       referral-link 【按照规范要求，本脚本因包含查询优惠券需要添加此提示，感谢大家支持】
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
            var dis_res_html="";
            if(data!="null"){
            var obj=$.parseJSON(data);
           // console.log(obj.yhq[0].yhq_url);
          dis_res_html=dis_res_html+"<div class='qxm_yhq'>";
	 dis_res_html=dis_res_html+"<a style='font-size: 10px;color:#fff' target='_blank'  href='"+obj.yhq[0].yhq_url+"'><div class='par'><span>"+obj.yhq[0].yhq_name+"</span></div></a>";
	 dis_res_html=dis_res_html+"<a style='font-size: 10px;color:#fff' target='_blank'  href='"+obj.yhq[0].yhq_url+"'>"+"<div class='copy'>点击领取</div></a>";
	 dis_res_html=dis_res_html+"";
	 dis_res_html=dis_res_html+"</div>";
            }else
            {
                dis_res_html=dis_res_html+"<div class='qxm_yhq'>";
	 dis_res_html=dis_res_html+"<a style='font-size: 10px;color:#fff' target='_blank'  href='#'><div class='par'><span>未找到优惠券</span></div></a>";
	 dis_res_html=dis_res_html+"<a style='font-size: 10px;color:#fff' target='_blank'  href='#'><div class='copy'></div></a>";
	 dis_res_html=dis_res_html+"";
	 dis_res_html=dis_res_html+"</div>";
            }
      setTimeout( function () {
             if(document.getElementById('J_isku')){$('.J_isku').after(dis_res_html);}
             if(document.getElementById('tb-key')){$('.tb-key').after(dis_res_html);}
             if(document.getElementById('skuWrapper')){ $('.skuWrapper').after(dis_res_html);}
             if(document.getElementsByClassName('J_isku')){$('.J_isku').after(dis_res_html);}
             if(document.getElementsByClassName('tb-key')){$('.tb-key').after(dis_res_html);}
             if(document.getElementsByClassName('skuWrapper')){ $('.skuWrapper').after(dis_res_html);}
            }, 1000);
        })
    }
})();
