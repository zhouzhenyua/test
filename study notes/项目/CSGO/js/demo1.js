//import '@/css/main.scss';
//import '@cwd/libs/idangerous.swiper.css';
//import '@cwd/libs/jquery.lazyload.js';
//import '@cwd/common/common.js';
//import StackBlur from 'stackblur-canvas';
//import _ from '@cwd/common/pwrd.template.js';
//import wuqiData from '@/js/_wuqi_data.js';
//import moshiData from '@/js/_moshi_data.js';
//import {
//    dituData,
//    dituImages
//} from '@/js/_ditu_data.js';
//import {
//    weaponPropertyTemplate,
//    weaponTabsTemplate,
//    dituImageTemplate,
//    dituTemplate,
//    moshiTemplate
//} from '@/js/_main_template.js';


function swipers() {
    $('.box_skitter_medium').on('mouseover',function(){
        $(this).find('a').attr('target','_blank');
    });
    $('.box_skitter_medium').css({width: 880, height: 332}).skitter({
        auto_play: true,
        interval: 3000,
        hide_tools:true,
        navigation: false,
        dots: false,
        numbers: true,
        imageSwitched:function(index){
            $('.box_skitter_nav').children().eq(index).addClass('active').siblings().removeClass('active')
        }
    });
    let $container = $('.module-dianjing-container');
    let mySwiper = new Swiper('.swiper-container-dianjing', {
        onlyExternal: true,
        pagination: '.pagination',
        paginationClickable: true,
        loop: true,
        speed: 500,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        onSlideChangeStart: function () {
            let index = mySwiper.activeLoopIndex;
            $container.find('.swiper-box-bottom').children().hide().eq(index).show();
        }
    })
    $container.find('.arrow-left').on('click', function (e) {
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $container.find('.arrow-right').on('click', function (e) {
        e.preventDefault()
        mySwiper.swipeNext()
    })
}

/**
 * 游戏介绍
 */
function renderGameModule() {
    var type = '',
        isIE = !!window.ActiveXObject || "ActiveXObject" in window || navigator.userAgent.indexOf("Edge") > -1,
        $moduleGame = $('#moduleGame'),
        $moshi_tabbox = $('#moshi_tab_boxs'),
        $ditu_tabbox = $('#ditu_tabbox'),
        click = $.isMobile ? 'touchend' : 'click';
    return {
        init(){

            if ($.isMobile) {
                $('video').remove();
            }
            $('.j_tabs').tabs({events: click,});
            // 模式
            $moshi_tabbox.html(_.template(moshiTemplate)({'data':moshiData}));

            // 地图
            $ditu_tabbox.html(_.template(dituImageTemplate)({'data':dituImages}));

            this.events();
        },
        events(){
            // 换背景
            $moduleGame.on(click, '.j_changebg a', function (e) {
                var bgi = '',
                    dataBg = $(this).attr('data-bg'),
                    $bgVideo = $('#bg_video');

                if (dataBg === '1') {
                    bgi = require('@/images/bg_game_wuqi.jpg');
                    $bgVideo.show();
                    $('#bg_image').hide()
                } else if (dataBg === '2') {
                    bgi = require('@/images/bg_game_moshi.jpg');
                    $bgVideo.hide();
                    $('#bg_image').hide()
                } else if (dataBg === '3') {
                    bgi = require('@/images/bg_game_ditu.jpg');
                    $bgVideo.hide();
                    $('#bg_image').hide();
                }
                $moduleGame.css({
                    'background-image': `url(${bgi})`
                })
            })
            // 武器
            $moduleGame.on(click, '.weapon-tabs-item', function (e) {
                var $this = $(this),
                    $typeItem = $(this).parents('[data-type-item]');
                type = $typeItem.attr('data-type-item');

                var index = $this.index();
                var wuqi = wuqiData[type][index];
                wuqi.ct = require('@/images/icon_ct.png');
                wuqi.t = require('@/images/icon_t.png');
                var html = _.template(weaponPropertyTemplate)(wuqi);

                $typeItem.find('.j_property').html(html);
                $typeItem.find('.j_pic').html(`<img src="${wuqi.image}" alt="">`).animateCss('fadeIn');
                $this.addClass('active').siblings().removeClass('active');

                var $progress = $typeItem.find('.progress');
                setTimeout(() => {
                    $progress.each(function () {
                        $(this).css({ width: $(this).data('progress') + '%' })
                    })
                }, 0)
            })

            $moduleGame.on(click, '.j_tabs_navs a', function () {
                type = $(this).attr('data-type');
                var index = $(this).index();
                var wuqi = wuqiData[type];
                var html = _.template(weaponTabsTemplate)({ data: wuqi || [] });

                $('[data-type-item="' + type + '"]').find('.weapon-tabs').html(html);
                $('[data-type-item="' + type + '"]').find('.weapon-tabs-item').eq(0).trigger(click);

                $moduleGame.find('.ani').animateCss('fadeIn');
                setTimeout(() => {
                    $(window).trigger('scroll');
                },0);
            }).on(click,'[data-map]',function(){
                var map = $(this).attr('data-map');
                var ditu = dituData[map];
                $('#bg_image').html(`<img id="bg_img_${ditu.sub}" src="${ditu.image}">`).fadeIn(600);
                if (isIE) {
                    $('#bg_image').find('img').hide();
                    $('#bg_image').append(`<canvas id="bg_canvasg_${ditu.sub}"></canvas>`);
                    setTimeout(() => {
                        StackBlur.image(`bg_img_${ditu.sub}`, `bg_canvasg_${ditu.sub}`, 20, true);
                    }, 0);
                }
            })

            $('[data-type="shouqiang"]').trigger(click);

            // 地图弹层
            var $dituOverlay = $('#ditu_overlay'),
                $dituOverlayContainer = $('#ditu_overlay_container'),
                $dituOverlayBg = $('#ditu_overlay_bg');

            $ditu_tabbox.on(click, 'img', function (e) {
                let ditu = dituData[$(this).attr('data-name')];
                if(!ditu) return;
                let html = _.template(dituTemplate)(ditu);
                $dituOverlayBg.html(`<img id="bg_img_${ditu.sub}" src="${ditu.image}">`);
                $('#bg_image').html(`<img id="bg_img_${ditu.sub}2" src="${ditu.image}">`).fadeIn(600);
                if (isIE) {
                    $dituOverlayBg.find('img').hide();
                    $dituOverlayBg.append(`<canvas id="bg_canvasg_${ditu.sub}"></canvas>`);
                    $('#bg_image').find('img').hide();
                    $('#bg_image').append(`<canvas id="bg_canvasg_${ditu.sub}2"></canvas>`);
                    setTimeout(() => {
                        StackBlur.image(`bg_img_${ditu.sub}`, `bg_canvasg_${ditu.sub}`, 20, true);
                    }, 0);
                    setTimeout(() => {
                        StackBlur.image(`bg_img_${ditu.sub}2`, `bg_canvasg_${ditu.sub}2`, 20, true);
                    }, 0);
                }
                $dituOverlayContainer.html(html);
                $dituOverlay.fadeIn();
                $('[data-original]').lazyload({ effect: "fadeIn", skip_invisible: false});
                e.stopPropagation();
                return false;
            })

            $dituOverlay.on(click, '.j_close', function (e) {
                $(e.delegateTarget).fadeOut();
                e.stopPropagation();
                return false;
            })
            $moduleGame.on(click, 'a', function () {
                $dituOverlay.find('.j_close').trigger(click);
            })

        }
    }
}


function appInit() {
    swipers();
    renderGameModule().init();
    $('[data-original]').lazyload({ effect: "fadeIn", skip_invisible: false});
}

appInit();
/**
 * Created by 雨 on 2018/11/12.
 */
