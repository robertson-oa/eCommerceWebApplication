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

$(".fa-plus").click(function(){
    if(Number($(".number").text()) < 10){

    $(".number").text(Number($(".number").text())+1);
    }
})

$(".fa-minus").click(function(){
    if(Number($(".number").text()) > 1){

        $(".number").text(Number($(".number").text())-1);
    }
})