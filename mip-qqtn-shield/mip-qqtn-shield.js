/**
 * @file mip-qqtn-shield 获取下载地址，根据不同下载地址显示不同的提示,提示内容放入模版里的https json中。
 * @author gom3250@qq.com.
 * @version 1.0.0
 *  */
define(function (require) {
    var $ = require('zepto');
    var util = require('util');
    var platform = util.platform;
    var customElement = require('customElement').create();
    var fetchJsonp = require('fetch-jsonp');
    customElement.prototype.firstInviewCallback = function () {
        var ele = this.element;
        var fhieldurl = ele.getAttribute('data-shield');
        var pkurlm = $('#address').attr('href');
        var remotIpInfo = {
            ret: 1,
            start: -1,
            end: -1,
            country: '\u4e2d\u56fd',
            province: '\u6e56\u5317',
            city: '\u6b66\u6c49',
            district: '',
            isp: '',
            type: '',
            desc: ''
        };
        fetchJsonp('https://ca.6071.com/shield/index/c/' + fhieldurl, {
            jsonpCallback: 'callback'
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            var shieldOk = data.shieldOk;
            if (shieldOk === 'true') {
                var province = remotIpInfo.province;
                var city = remotIpInfo.city;
                var koCity = data.cityArray;
                if ($.inArray(city, koCity) !== -1) {
                    var arrayTextSize = data.mgcArrayText.length;
                    var arrayHtmlSize = data.mgcArrayHtml.length;
                    if (arrayTextSize === arrayHtmlSize) {
                        var i = 0;
                        for (i = 0; i < arrayTextSize; i++) {
                            var n = 0;
                            for (n = 0; n < data.mgcArrayText[i].length; n++) {
                                if (pkurlm.indexOf(data.mgcArrayText[i][n]) !== -1) {
                                    $('title').html(data.mgcArrayHtml[i][0]);
                                    $(ele).find('h1').html(data.mgcArrayHtml[i][1]);
                                    $(ele).find('.pic div img,.pic div mip-img').attr('src', data.mgcArrayHtml[i][2]);
                                    var prevImgSize = data.mgcArrayHtml[i][3].length;
                                    var prevImgHtml = '';
                                    var s = 0;
                                    for (s = 0; s < prevImgSize; s++) {
                                        var previmg = $(ele).find('.g-previmg-show li mip-img,.g-previmg-show li img');
                                        previmg.attr('src', data.mgcArrayHtml[i][3][s]);
                                    }
                                    $(ele).find('.f-maincms-cont').html('<p>' + data.mgcArrayHtml[i][4] + '</p>');
                                    if (platform.isIos()) {
                                        $(ele).find('.m-down-ul').each(function () {
                                            $(this).find('a').attr('href', 'javascript:;');
                                        });
                                    } else {
                                        $(ele).find('.m-down-ul').each(function () {
                                            $(this).find('a').attr('href', data.mgcArrayHtml[i][6]);
                                        });
                                    }
                                    $(ele).find('.g-tags-box,.g-key-ohter').hide();
                                    $(ele).find('#g-recomd-game,.g-down-information ul').hide();
                                    $(ele).find('.f-admorediv').hide();
                                    var shieldmore = $(ele).find('mip-showmore');
                                    shieldmore.attr('style', 'height: auto;padding-bottom:10px;visibility: visible;');
                                }
                            }
                        }
                    }
                }
            }
        });
    };
    return customElement;
});