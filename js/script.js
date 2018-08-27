let btnClick = false,
    sectionShop = $('.shop-wrapper'),
    hiddenContent = sectionShop.find('#shop-content-hidden'),
    btnShowMore = sectionShop.find('#show-more');

btnShowMore.on('click', function(){
    hiddenContent.slideToggle();
    btnClick = !btnClick;
    if(btnClick)
        btnShowMore.text('Ver menos');
    else
        btnShowMore.text('Ver más artículos');
});