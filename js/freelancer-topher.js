/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


 $(function(){

    $(".dropdown-menu li a").click(function(){

      $("#numpeople").text($(this).text());
      $("#numpeople").val($(this).text());

   });

});

$(function(){
$( "#select0" ).click(function(){
    $("#homeless").html("<a href='#portfolioModal1' class='portfolio-link' data-toggle='modal'><div class='caption'><div class='caption-content'><p>Homeless Shelters</p></div></div><img src='img/Selected.jpg' class='img-responsive'  alt=''></a>")
    $("#homeless-modal").html("<img src='img/homeless.jpg' class='img-responsive img-centered' alt=''><p>Help homeless people in your area at a shelter</p><button type='button' class='btn btn-default' data-dismiss='modal'><i class='fa fa-times'></i> Close</button>")});
});
$(function(){
$( "#select1" ).click(function(){
    $("#soup").html("<a href='#portfolioModal2' class='portfolio-link' data-toggle='modal'><div class='caption'><div class='caption-content'><p>Soup Kitchens</p></div></div><img src='img/Selected.jpg' class='img-responsive'  alt=''></a>")
    $("#soup-modal").html("<img src='img/soup.jpg' class='img-responsive img-centered' alt=''><p>Help feed the hungry at a local soup kitchen</p><button type='button' class='btn btn-default' data-dismiss='modal'><i class='fa fa-times'></i> Close</button>")});
});
$(function(){
$( "#select2" ).click(function(){
    $("#environment").html("<a href='#portfolioModal3' class='portfolio-link' data-toggle='modal'><div class='caption'><div class='caption-content'><p>Environment</p></div></div><img src='img/Selected.jpg' class='img-responsive'  alt=''></a>")
    $("#environment-modal").html("<img src='img/environment.jpg' class='img-responsive img-centered' alt=''><p>Help at local environmentally focused organizations</p><button type='button' class='btn btn-default' data-dismiss='modal'><i class='fa fa-times'></i> Close</button>")});
});
$(function(){
$( "#select3" ).click(function(){
    $("#mentoring").html("<a href='#portfolioModal4' class='portfolio-link' data-toggle='modal'><div class='caption'><div class='caption-content'><p>Mentoring</p></div></div><img src='img/Selected.jpg' class='img-responsive'  alt=''></a>")
    $("#mentoring-modal").html("<img src='img/mentoring.jpg' class='img-responsive img-centered' alt=''><p>Mentor local youth</p><button type='button' class='btn btn-default' data-dismiss='modal'><i class='fa fa-times'></i> Close</button>")});

});
$(function(){
$( "#select4" ).click(function(){
    $("#vote").html("<a href='#portfolioModal5' class='portfolio-link' data-toggle='modal'><div class='caption'><div class='caption-content'><p>Politics</p></div></div><img src='img/Selected.jpg' class='img-responsive'  alt=''></a>")
    $("#vote-modal").html("<img src='img/vote.jpg' class='img-responsive img-centered' alt=''><p>Help make a difference at local politcally focused organizations</p><button type='button' class='btn btn-default' data-dismiss='modal'><i class='fa fa-times'></i> Close</button>")});
});
$(function(){
$( "#select5" ).click(function(){
    $("#religion").html("<a href='#portfolioModal6' class='portfolio-link' data-toggle='modal'><div class='caption'><div class='caption-content'><p>Religion</p></div></div><img src='img/Selected.jpg' class='img-responsive'  alt=''></a>")
    $("#religion-modal").html("<img src='img/religion.jpg' class='img-responsive img-centered' alt=''><p>Help at local religious organizations</p><button type='button' class='btn btn-default' data-dismiss='modal'><i class='fa fa-times'></i> Close</button>")});
  
});
