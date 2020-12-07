$(function () {

    const slickArrowLeft = '<button class="slick-arrow slick-prev"><svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4 4.6L6.9 16.1L18.4 27.6L16.1 32.2L0 16.1L16.1 0L18.4 4.6Z" fill="white"/></svg></button>'
    const slickArrowRight = '<button class="slick-arrow slick-next"><svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4 4.6L6.9 16.1L18.4 27.6L16.1 32.2L0 16.1L16.1 0L18.4 4.6Z" fill="white"/></svg></button>'

    $('.main-banner .slick-slider').slick({
        prevArrow: slickArrowLeft,
        nextArrow: slickArrowRight,
        dots: true
    });

    function downloadAccordion(eCurrentTarget, eTarget, eElement, eSubList) {
        const currentTarget = $(eCurrentTarget);
        const listItem = eElement;

        if (listItem.is(eTarget) || listItem.children().is(eTarget)) {
            const currentTargetSubList = eSubList;

            if(listItem.parent().hasClass('list__item-active')) {
                if(currentTarget.parent().hasClass('list__item')) {
                    currentTarget.parent().find('.list__item__sub-list-level-3').slideUp(200);
                    currentTarget.parent().find('.list__item__sub-list-level-2').slideUp(200);
                }
                if(currentTarget.parent().hasClass('list__item__sub-list__item')) {
                    currentTarget.parent().find('.list__item__sub-list-level-3').slideUp(200);
                }
            }

            currentTargetSubList.slideToggle(200).parent().toggleClass('list__item-active');
        }
    }

    $('.download-accordion').find('.list .list__item .list__item-content').on('click', e => {
        const listItem = $('.download-accordion').find('.list .list__item .list__item-content');
        const subList = $(e.currentTarget).parent().find('.list__item__sub-list');

        downloadAccordion(e.currentTarget, e.target, listItem, subList);
        
    });

    $('.download-accordion').find('.list .list__item__sub-list__item-content').on('click', e => {
        const listItem = $('.download-accordion').find('.list .list__item__sub-list__item-content');
        const subList = $(e.currentTarget).parent().find('.list__item__sub-list-level-2');

        downloadAccordion(e.currentTarget, e.target, listItem, subList);
        
    });
    $('.download-accordion').find('.list .list__item__sub-list-level-2-content').on('click', e => {
        const listItem = $('.download-accordion').find('.list .list__item__sub-list-level-2-content');
        const subList = $(e.currentTarget).parent().find('.list__item__sub-list-level-3');
        
        downloadAccordion(e.currentTarget, e.target, listItem, subList);
        
    });

    $('.object-block').find('.main-slide').slick({
        prevArrow: slickArrowLeft,
        nextArrow: slickArrowRight,
        asNavFor: '.nav-slider'
    });

    $('.object-block').find('.nav-slider').slick({
        slidesToShow: 3,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.main-slide'
    });

    $('.object-block').find('.custom-slick-next').on('click', () => {
        $('.main-slide').slick('slickNext');
    });

    $('.reference-object-page').find('.select-item').on('click', e => {
        $(e.currentTarget).find('.select-item__sub-options').slideToggle(200);
        $(e.currentTarget).find('.select-item__sub-options .select-item__sub-options__item').on('click', e => {
            $(e.currentTarget).parents('.select-item').find('.select-item__content .selected-option').text($(e.currentTarget).text());
        });
    })
});