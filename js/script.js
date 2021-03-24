$('#add-Bag').on("click", ()=>{
    $('.cart').css('visibility', 'visible');
})

$('#tum').on("click", ()=>{
    $('.cart').css('visibility', 'hidden');
})

$('#mg1').on("click", ()=>{
    $('#bigImg1').fadeIn();
    $('#bigImg2').hide();
    $('#bigImg3').hide();

})

$('#mg2').on("click", ()=>{
    $('#bigImg2').fadeIn();
    $('#bigImg1').hide();
    $('#bigImg3').hide();
})

$('#mg3 ').on("click", ()=>{
    $('#bigImg2').hide();
    $('#bigImg1').hide();
    $('#bigImg3').fadeIn();
})
