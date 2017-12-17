$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#loading').hide(); // will first fade out the loading animation 

});



// Function for SearchBar

function SearchBarShow(){
    $(".Search").toggleClass('hidden');
    $(".Cross").toggleClass('showme');
    $(".SearchBt").show("slide",{direction:"down"},500);
}
function SearchBarHide(){
    $(".Search").toggleClass('hidden');
    $(".Cross").toggleClass('showme');
      $(".SearchBt").hide("slide",{direction:"down"},500);
}


// function for slider
$(document).ready(function(){
//function for slider
var slideInDiv=1;
var slideOutdiv=0;
var countPlus=5;
var countMinus=0;
var slideNo=1;
var theInterval;
function slideThis(){
    slideNo++;
    slideInDiv++;
    slideOutdiv++;
    if(slideNo<countPlus){
         $(".slide"+slideOutdiv).hide("slide",{direction:"left"},1000);
        $(".slide"+slideInDiv).show("slide",{direction:"right"},1000);
    }
   else{
        $(".slide4").hide("slide",{direction:"left"},1000);
       $(".slide1").show("slide",{direction:"right"},1000);
       slideNo=1;
       slideInDiv=1;
       slideOutdiv=0;
   }
};
    function startSlide() {
    theInterval = setInterval(slideThis, 5000);
}
function stopSlide() {
    clearInterval(theInterval);
}
    
    $(function () {
    startSlide();
    $('.MainSlider').hover(function () {
        stopSlide();
    }, function () {
        startSlide();
    })
});
    
    //function for next button
    
  $(".RightArrow").click(function(){
           slideNo++;
    slideInDiv++;
    slideOutdiv++;
    if(slideNo<countPlus){
         $(".slide"+slideOutdiv).hide("slide",{direction:"left"},1000);
        $(".slide"+slideInDiv).show("slide",{direction:"right"},1000);
    }
   else{
        $(".slide4").hide("slide",{direction:"left"},1000);
       $(".slide1").show("slide",{direction:"right"},1000);
       slideNo=1;
       slideInDiv=1;
       slideOutdiv=0;
   }
  })
    
    
    //function for prev button
    
     $(".LeftArrow").click(function(){
             slideNo--;
    slideInDiv--;
    slideOutdiv--;
    var add=slideOutdiv+2;
    if(slideNo>countMinus){
         $(".slide"+add).hide("slide",{direction:"right"},1000);
        $(".slide"+slideInDiv).show("slide",{direction:"left"},1000);
    }
   else{
        $(".slide1").hide("slide",{direction:"right"},1000);
       $(".slide4").show("slide",{direction:"left"},1000);
       slideNo=4;
       slideInDiv=4;
       slideOutdiv=3;
   }
  })
    
    
    
    
} );



//Function for Testimonial

$(document).ready(function(){
    Responsive();
    $(window).resize(function(){
    Responsive();
    });
    
});
    
function Responsive(){
    
  var jj=$(".testimonial").width();
    var kk=jj;
	var slideCount = $('#slider ul li').length;
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * kk;
		$('#slider ul li').css({ width:kk, height: slideHeight });
	$('#slider').css({ width: kk, height: slideHeight });
	$('#slider ul').css({ width: sliderUlWidth});
    

    $('.first').click(function () {
        $('#slider ul').animate({
            left: - kk*0
        },1000);
        $(".ok").removeClass("okActive");
        $(this).addClass("okActive");
    });

    $('.second').click(function () {
        $('#slider ul').animate({
            left: - kk*1
        },1000);
        $(".ok").removeClass("okActive");
        $(this).addClass("okActive");
    });
    
    $('.third').click(function () {
        $('#slider ul').animate({
            left: - kk*2
        },1000);
        $(".ok").removeClass("okActive");
        $(this).addClass("okActive");
    });
    
    
    $('.forth').click(function () {
        $('#slider ul').animate({
            left: - kk*3
        },1000);
        $(".ok").removeClass("okActive");
        $(this).addClass("okActive");
    });
    
    
    $('.fifth').click(function () {
        $('#slider ul').animate({
            left: - kk*4
        },1000);
        $(".ok").removeClass("okActive");
        $(this).addClass("okActive");
    });
    
    
}
