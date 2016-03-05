
 //scrollup

 
$(document).ready(function(){


    $('.hw-search-control').click(function (event) { 
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('hidden show');

    });

    /* scroll up */

    $('.nav-scroll-up').click(function (e) {
      
    $('html, body').animate({scrollTop: '0px'},1.7e3 );
    });

    /* end of scroll up */
 
     $('[data-toggle="tooltip"]').tooltip();   

    /* google search button animation*/
    $("a.hw-search-control.btn").click(function(){
      $("div#hw-google-search").css({width:"40px"}).animate({width: "200px"},300);

    });

    
    

    /* end */

 $(document).on('mouseenter', 'input.gsc-search-button.gsc-search-button-v2', function(){
         $("i.fa.fa-angle-right.search-arrow").css("color", "#ee2b7b");
});
  $(document).on('mouseleave', 'input.gsc-search-button.gsc-search-button-v2', function(){
         $("i.fa.fa-angle-right.search-arrow").css("color", "gray");
});


//filter for the blog
     $('#blog-author,#blog-category').change(function() {
         var  val1 = $("#blog-category").children('option:selected').data('value');
         var  val2 = $("#blog-author").children('option:selected').data('value');
         
         if(val1=='Categories' && val2=='Authors'){
          $(".hw-filter-li").each(function(){
                 $(this).show();
             });
          }

          else if(val1!='Categories' && val2=='Authors'){
          $(".hw-filter-li").each(function(){
           if($(this).hasClass(val1)){
             $(this).show();
             
           }
           else{
             $(this).hide();
           }
         });
          }

           else if(val1=='Categories' && val2!='Authors'){
          $(".hw-filter-li").each(function(){
           if($(this).hasClass(val2)){
             $(this).show();
             
           }
           else{
             $(this).hide();
           }
         });
          }

          else if(val1!='Categories' && val2!='Authors'){
          $(".hw-filter-li").each(function(){
           if($(this).hasClass(val2) && $(this).hasClass(val1))
           {
                 $(this).show();}
               else{
                 $(this).hide();
               }
         });
          }
     });

    /* we love parter */
    $('.home-hr').addClass("anim");
      $(".hw-ribbon-heading").animate({"opacity":"1"},644);
      $(".hw-ribbon-heading").delay(2000).animate({"opacity":"0"},644);

      $('.hw-ribbon-heading').mouseenter(function() {
      $(this).animate({"opacity":"1"},44);
    });

    $('.hw-ribbon-heading').mouseleave(function() {
      $(this).animate({"opacity":"0"},44);
    }); 



    $("ul.scroll-indicators.hide-scroll > li").click(function(){
     
       var data_tab = $(this).attr("data-tab");
        if( data_tab === '1')
       {
        $('#hw-fixed-footer-part').hide();
        $("#section-rib-part").animate({"opacity":"1"},644);
        $("#section-rib-part").delay(2000).animate({"opacity":"0"},644);
      }
      else if( data_tab === '4')
      {
        
        $("#section-rib-part1").animate({"opacity":"1"},644);
        $("#section-rib-part1").delay(2000).animate({"opacity":"0"},644);
      }
      else if (data_tab=='2'){
        $("#section-rib-part2").animate({"opacity":"1"},644);
        $("#section-rib-part2").delay(2000).animate({"opacity":"0"},644);
      }
    });

/* end of partner */

    /* smooth scroll*/
      $('.carousel').carousel();
    /* End of smooth scroll*/
  
    //homepage dropdown
      $(".header-dropdown-link .dropdown").css({display: "none"});
      
        $(".header-dropdown-link").mouseenter(function(){
          $(this).find(".dropdown").css({visibility: "visible",display: "none"}).show(268);;
        });

        $(".header-dropdown-link").mouseleave(function(){
            $(this).find(".dropdown").css({visibility: "hidden"});
        });

        $(".dropdown").mouseenter(function(){
            $('.header-dropdown-link').css({visibility: "visible !important"});
        });

    //homepage header mouse event 

        $('.hw-home').mouseover(function(){
            $("header nav").addClass('hw-fixed-header');
        });

        $('.hw-home').mouseout(function(){
            $("header nav").removeClass('hw-fixed-header');
        });

    //homepage hover mouse event

        $('.navbar-default').mouseover(function(){
            $("header nav").addClass('hw-hover-header');
        });

        $('.navbar-default').mouseout(function(){
            $("header nav").removeClass('hw-hover-header');
        });

$(".apst-wrapper").hide();
      //fixed header
        $(document).scroll(function(){
          var main = $(this).scrollTop();

          if(main >= 51) {
            if(!$('header').hasClass('hw-home')) {
              $("header nav").addClass('hw-fixed-header');
              $("main").css("margin-top","70px");
            }
            
          }
          else {
            $("header nav").removeClass('hw-fixed-header');
            $("main").css("margin-top","0px");
          }

        if(main >= 70) {
            if(!$('header').hasClass('hw-home')) {
              $(".navbar-default.hw-fixed-header").css("padding-bottom","0px")
            }
          }
          /*for scroll top button*/
           if(main >=50) {
              $(".our-thinking-apst-wrapper").show();
           }
           else{
              $(".our-thinking-apst-wrapper").hide();
           }
                  if(main >= 330) {
         $(".apst-wrapper").show();
         $(".engase-us-apst-wrapper").show();
           $(".collaborative-apst-wrapper").show();  
           $(".bootcamp-apst-wrapper").show();
          
          }
          else{
            $(".apst-wrapper").hide();
            $(".engase-us-apst-wrapper").hide();
            $(".collaborative-apst-wrapper").hide();  
            $(".bootcamp-apst-wrapper").hide();
            
          }
            if (( $(document).height() - $(window).height() ) - $(document).scrollTop() <= 123) {
              
              $(".apst-wrapper").css({"right":"4px","bottom":"-43px","position":"absolute"});
              $(".engase-us-apst-wrapper").css({"position":"absolute"});
               $(".collaborative-apst-wrapper").css({"right":"15px","bottom": "85px","position":"absolute"});
                $(".bootcamp-apst-wrapper").css({"bottom":"78px","position":"absolute"});
                 $(".our-thinking-apst-wrapper").css({"bottom":"54px","position":"absolute"});
            }
            else
            {
              $(".apst-wrapper").css({"right":"20px","bottom":"20px","position":"fixed"});
              $(".engase-us-apst-wrapper").css({"position":"fixed"});
                   $(".collaborative-apst-wrapper").css({"right":"20px","bottom": "20px","position":"fixed"});
                      $(".bootcamp-apst-wrapper").css({"bottom":"20px","position":"fixed"});
                       $(".our-thinking-apst-wrapper").css({"bottom":"20px","position":"fixed"});
            } 
            
        });

    // it-services

    // testimonial-carousel
      $('.testimonial-carousel .carousel-indicators li').click(function(){
        $(this).parents('.testimonial-carousel').find('.carousel').carousel(parseInt(this.getAttribute('data-to')));
      });
    // End of testimonial-carousel

        // ui-ux tab
          // $('.hw-ui-ux-carousel .carousel').carousel({
          //   interval: 100,
          //     pause: true
          // });
          $(window).load(function () {
              $('.hw-ui-ux-carousel .carousel').carousel("pause");
          });

          
          $('.play').click(function () {
                $(this).children('.fa-play').addClass("fa-play-active");


                $(this).prev(".pause").children(".fa-pause").removeClass("fa-pause-active");
                // $(this).siblings('.fa-pause').removeClass("fa-pause-active");
                 
                  
              $(this).parents('.hw-view-project').siblings('.carousel').carousel('cycle');
          });
          $('.pause').click(function () {
            $(this).children('.fa-pause').addClass("fa-pause-active");
             // $(this).siblings('.fa-play').removeClass("fa-play-active");
               $(this).next(".play").children(".fa-play").removeClass("fa-play-active");
              $(this).parents('.hw-view-project').siblings('.carousel').carousel('pause');
          });
        // End of ui-ux tab

      // End of it-services


      //equal height js

        equalheight = function(container){

        var currentTallest = 0,
             currentRowStart = 0,
             rowDivs = new Array(),
             $el,
             topPosition = 0;
         $(container).each(function() {

           $el = $(this);
           $($el).height('auto')
           topPostion = $el.position().top;

           if (currentRowStart != topPostion) {
             for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
               rowDivs[currentDiv].height(currentTallest);
             }
             rowDivs.length = 0; // empty the array
             currentRowStart = topPostion;
             currentTallest = $el.height();
             rowDivs.push($el);
           } else {
             rowDivs.push($el);
             currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
          }
           for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
             rowDivs[currentDiv].height(currentTallest);
           }
         });
        }

        $(window).load(function() {
          equalheight('.blog-grid .blog-content');
          $('.home-hr').addClass('anim');
        });


        $(window).resize(function(){
          equalheight('.blog-grid .blog-content');
        });
      // End of equal height js

       
       // upskilling 

      //filter
        $('.hw-upskilling-filter li').click(function(){
            $('.hw-upskilling-filter li').removeClass('active');
            $(this).addClass('active');

            var dataval = $(this).attr("data-value");

            $('.upskill-cont-filter').each(function(){
              if($(this).hasClass(dataval)) {
                $(this).css({'display':'block'});
              }
              else {
                $(this).css({'display':'none'});
              }
              
            });

        });


      // End of upskilling

      // upskilling-casestudy collapse

        //arrow - toggle rotate
        $('#upskill-accordion .accordion-toggle').click(function(){
          $(this).children().children().children().next().children().children().toggleClass("arrow-rotate");
        });
      // End of upskilling-casestudy collapse

      // service details
        $('.filter').click(function(){
          var dtab = $(this).attr("data-tab");
          
          $('.filter').removeClass('active');
          $(this).addClass('active');

          $('.filter-content').each(function(){
              var dval = $(this).attr("data-value");
              if(dtab == dval) {
                $(this).addClass('active');
              }
              else {
                  $(this).removeClass('active');
              }
          });
        });
      // End of service detials

 // casestudy

      //filter
        $('.hw-casestudy-filter li').click(function(){
          
            $('.hw-casestudy-filter li').removeClass('active');
            $(this).addClass('active');

            var dataval = $(this).attr("data-value");
           
            case_study_filter(dataval);

        });


      var case_study_filter = function(dataval) {
        $('.casestudy-cont-filter').each(function(){
        if($(this).hasClass(dataval)) {
          $(this).css({'display':'block'});
        }
        else {
          $(this).css({'display':'none'});
        }
        });
      }

      // End of casestudy

      /* job board*/
      $('.hw-job-view-btn').click(function() {
        $(this).addClass('view-color');
        $(this).parent('tr').next().removeClass('hide');
     });

       $('.view-close').click(function() {
         $(this).parents('tr').prev().find('.hw-job-view-btn').removeClass('view-color');
          
           $(this).parents('tr').addClass('hide');
       }); 
      

 
 $(document).on('click', '.pager', function(){
         $(".hw-jboard-view").prev().find('.hw-job-view-btn').removeClass('view-color');
           $(".hw-jboard-view").addClass('hide');
});

/* google search */
    $(document).on('click', '.gsc-results-close-btn', function(){
      $("#hw-google-search").removeClass("show");
      $("#hw-google-search").addClass("hidden");
    });
    
    $('header').mouseleave(function () {
      if($("input#gsc-i-id1").val()=="")
      {
      $("#hw-google-search").removeClass("show");
      $("#hw-google-search").addClass("hidden");     
      }
    });
   
/* end google search */


        $('.job-apply-btn').click(function () {
          var job_title = $(this).parents('.hw-jboard-view').prev().find("td").first().text(); // for setting the job-title value to form
          $(".input_subject").val(job_title);
          $('.hw-jboard-view').addClass('hide');
          $('.apply-div').addClass('show'); 
        });

        $('.form-close').click(function() {

          $('.apply-div').removeClass('show');
           $('.view-act').removeClass('view-color');
           $('.hw-job-view-btn').removeClass('view-color');
        }); 

    /* end of job board*/

    $(window).on('load', function() {

      
        var cururl = window.location;
         var curid = cururl.hash.slice(1);
         $('.hw-casestudy-filter > li').each(function(){
                var dval = $(this).attr("data-value");

                if(curid == dval) {
                  $(this).addClass('active tagactive');
                }
                else {
                    $(this).removeClass('active tagactive');
                }
          });
         
         tabchange(curid);
         case_study_filter(curid);
    });

    //url change event
    $(window).on('hashchange', function(e){
        var cururl = window.location;
        var curid = cururl.hash.slice(1);
        tabchange(curid);
    });

    //onclick header menu, add active class to the respective tab and tab-content
    var tabchange = function(curid){
      if($('.nav-tabs').hasClass('hw-tablink')) {

              $('.hw-tablink > li').each(function(){
                var dtabval = $(this).attr('data-value');
                if( dtabval !== '') {
                  if(curid == dtabval) {
                    $('.hw-tablink > li').removeClass('active');
                      $(this).addClass('active');
                  }
                  else if( curid === 'portfolio' || curid === '') {
                      $('.hw-tablink > li').removeClass('active');
                      $('ul li[data-value="DataOps"]').addClass('active');
                  }
                }
                
              });

              $('.hw-tabcont-link > div').each(function(){
                var tabcont = $(this).attr('data-value');
                if(curid == tabcont) {
                  $('.hw-tabcont-link > div').removeClass('active in');
                      $(this).addClass('active in');
                  }

                if(curid == "Mobility") {
                       var item_width = $('#carousel_ul > li').width() + 20;
                      //make the sliding effect using jquery's anumate function '
                      $('#carousel_ul').animate({'left' : '-'+item_width+'px'},500);
                      // $(this).css({'cursor':'default','color':'#ccc'});
                      $('#right_scroll i').css({'cursor':'default','color':'#ccc'});
                       $('#left_scroll i').css({'cursor':'pointer','color':'#040404'});
                  }

              });
          }
    }

    $('.nav-tabs > li a').click(function(){
        var navtab = $(this).parents('.nav-tabs').offset().top - 95;
          $('html, body').animate({
            scrollTop: navtab}, 1000, 'linear');
    });

    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });



/* end of tag cloud*/
/*click for the portfolio in head*/
$("#anchor-portfolio").click(function(){
      tabchange('portfolio');
    });

/* header hover */
        var initiall = $('.navbar-right > li > a:first-child').position().left;
         $('.header-right-line-animation').css({left:initiall+'px'});
        $('.navbar-right > li > a').mouseover(function(){

         var w = $(this).width();    
         var l = $(this).position().left;
         l += 16;
         $('.header-right-line-animation').css({width:w+'px', left:l+'px'});
       });

       $('.navbar-right > li > a').mouseout(function(){
         $('.header-right-line-animation').css({width:'0px'});
       });

     //left 
       $('.navbar-left > li > a').mouseover(function(){

         var w_left = $(this).width();    
         var l_left = $(this).position().left;
         l_left += 16;
         $('.header-left-line-animation').css({width:w_left+'px', left:l_left+'px'});
       });

       $('.navbar-left > li > a').mouseout(function(){
         $('.header-left-line-animation').css({width:'0px'});
       });



    /* end of header hover */  

    // talk to us
      $('.talk-to-us').bind('click', function(event) {
        var tabdetail = $(this).parents('.p-flex').offset().top;
              $('html, body').animate({
                  scrollTop: tabdetail}, 1500, 'linear');
      }); 


      //solution custom tab carousel
        $('#left_scroll i').css({'cursor':'default','color':'#ccc'});
        
        //when user clicks the right arrow for sliding right        
        $('#right_scroll i').click(function(){
          var item_width = $('#carousel_ul > li').width() + 20;
          $('#carousel_ul').animate({'left' : '-'+item_width+'px'},500);
          $(this).css({'cursor':'default','color':'#ccc'});
          $('#left_scroll i').css({'cursor':'pointer','color':'#040404'});
        });

        $('Portfolio-last_dropdown').click(function(){
             var item_width = $('#carousel_ul > li').width() + 20;
            //make the sliding effect using jquery's anumate function '
            $('#carousel_ul').animate({'left' : '-'+item_width+'px'},500);
            // $(this).css({'cursor':'default','color':'#ccc'});
            $('#left_scroll i').css({'cursor':'pointer','color':'#040404'});
        });
        
        //when user clicks the left arrow for sliding left
        $('#left_scroll i').click(function(){
            var item_width = $('#carousel_ul > li').width();
            $('#carousel_ul').animate({'left' : '0px'},500);
            $(this).css({'cursor':'default','color':'#ccc'});
            $('#right_scroll i').css({'cursor':'pointer','color':'#040404'});
          });

         $('.Portfolio-first_dropdown').click(function(){
            var item_width = $('#carousel_ul > li').width();
            $('#carousel_ul').animate({'left' : '0px'},500);
            $('#left_scroll i').css({'cursor':'default','color':'#ccc'});
            $('#right_scroll i').css({'cursor':'pointer','color':'#040404'});
          });
    // End of solution custom tab carousel

     

     
     //casestudy toggle and collapse functionality
     $('.case-studies-control-grid > li').click(function(e){
        e.preventDefault();
        var target=$(this).attr('data-tab');
         if($(this).hasClass('active')) {
              $(this).removeClass('active');
              $('.case-studies-control-holder > div[data-tab="'+target+'"]').stop(1,1).slideUp();
          }
          else {
              $(".case-studies-control-grid > li.active").removeClass('active');
              $(this).addClass('active');
              $('.case-studies-control-holder > div').stop(1,1).slideUp();
              $('.case-studies-control-holder > div[data-tab="'+target+'"]').stop(1,1).slideDown();
          }
      });
      






       
    /*  end color of service color */


/* for searching the job and location */


function jobPostSplitter(){
  $('table.job-table').each(function() {
    $('.job-table').next(".pager").remove();
    var currentPage = 0;
    var numPerPage = 5;
    var $table = $(this);
    $table.bind('repaginate', function() {
        $table.find('tbody .shown-item').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
    });
    $table.trigger('repaginate');
    var numRows = $table.find('tbody .shown-item').length;
    var numPages = Math.ceil(numRows / numPerPage);
    var $pager = $('<div class="pager"></div>');
    if(numPages>1)
    {
    for (var page = 0; page < numPages; page++) {
        $('<span class="page-number"></span>').text(page + 1).bind('click', {
            newPage: page
        }, function(event) {
            currentPage = event.data['newPage'];
            $table.trigger('repaginate');
            $(this).addClass('active').siblings().removeClass('active');
        }).appendTo($pager).addClass('clickable');
    }
     $pager.insertAfter($table).find('span.page-number:first').addClass('active');
   }
   if(numRows==0)
   {
    $pager = $('<div class="pager"><p>sorry, we dont have any job opening for this job title/location</p></div>');
    $pager.insertAfter($table);
   }
});
}




function jobSearchFunction(){
   var keyword_job = $(".serch-the-job").parent().prev().prev().children().val() + " ";
   var location_job = $(".serch-the-job").parent().prev().children().val() + " ";

   var job_title,job_location;
   keyword_job = keyword_job.trim().toLowerCase();
   location_job = location_job.trim().toLowerCase();

if(keyword_job=="" && location_job=="")  //for empty search
    {
      $('.job-list-item').each(function(){
        $(this).show();
        $(this).addClass('shown-item');
      });
    }
 else if(keyword_job=="")  // for only job location
     {
       $('.job-list-item').each(function(){
         job_location = $(this).find("td:nth-child(2)").text();
         job_location = job_location.trim().toLowerCase();
         if(job_location.search(location_job)  > -1 )
           {
            $(this).show();
            $(this).addClass('shown-item');
           }
           else{
            $(this).hide();
            $(this).removeClass('shown-item');
           } 
       });      }
 else if(location_job=="")   //for only job title
  {
     $('.job-list-item').each(function(){
      job_title = $(this).children().first().text();
      job_title = job_title.trim().toLowerCase();
      if(job_title.search(keyword_job)  > -1 )
        {
          $(this).show();
          $(this).addClass('shown-item');

        }
        else{
          $(this).hide();
          $(this).removeClass('shown-item');
        } 
    });
  }
else      //for both job tiltle and location
    {
      $('.job-list-item').each(function(){
        job_title = $(this).children().first().text();
        job_title = job_title.trim().toLowerCase();

         job_location = $(this).find("td:nth-child(2)").text();
         job_location = job_location.trim().toLowerCase();

          if(job_title.search(keyword_job) > -1 && job_location.search(location_job) > -1)
            {
              $(this).show();
               $(this).addClass('shown-item');
            }
            else{
              $(this).hide();
              $(this).removeClass('shown-item');
            } 
         });
      }
      }



jobSearchFunction();    
jobPostSplitter();          
  /*   upon clicking search button  */
    $(".serch-the-job").click( function() {
      jobSearchFunction();
      jobPostSplitter();
     });

  /*   upon enter button  */

    $('#job-title').keydown(function(e) {
      if (e.keyCode == 13) {
       jobSearchFunction();
       jobPostSplitter()
       }
      });

    $('#job-location').keydown(function(e) {
      if (e.keyCode == 13) {
       jobSearchFunction();
       jobPostSplitter();
       }
      });

/* end for searching the job and location */

/* for google search engine */

  (function() {
var cx = '012091172359027849241:ukd4iabk1_g';
var gcse = document.createElement('script');
gcse.type = 'text/javascript';
gcse.async = true;
gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
'//cse.google.com/cse.js?cx=' + cx;
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(gcse, s);
})();
/* end for google search engine */
   

  var height_pixel = $("#blog-banner-data-ops").css('height');
  $("#blog-banner-data-ops").click(function(){
    if( $(this).css('height') === height_pixel )
    {
      $("#blog-banner-devops").animate({'height' : '0%'},844);
      $(this).css(  "z-index", "1");
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '10%'},444);
      $(this).find(".hw-hm-animate-arrow-icon").hide(); 
      $(this).animate({'height' : '100vh'},844);  
    }
    else{
      $(this).animate({'height' : '50vh'},844);
      $(this).find(".hw-hm-animate-arrow-icon").show();  
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '27%'},444); 
      $(this).css(  "z-index", "0");
      $("#blog-banner-devops").animate({'height' : '50vh'},844);
    }
  });
  $("#blog-banner-data-ops").mouseleave(function(){
      $(this).animate({'height' : '50vh'},844); 
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '27%'},444); 
      $(this).css(  "z-index", "0");  
      $(this).find(".hw-hm-animate-arrow-icon").show(); 
      $("#blog-banner-devops").animate({'height' : '50vh'},844);       
    }); 


  $("#blog-banner-devops").click(function(){

    if( $(this).css('height') === height_pixel )
    {
     
      $(this).css(  "z-index", "1");
      $(this).find(".hw-blog-banner-img").animate({'margin-top' : '25%'},444);
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '12%'},444); 
      $(this).find(".hw-hm-animate-arrow-icon").hide();
      $("#blog-banner-data-ops").animate({'top' : '-100%'},844); 
      $(this).animate({'height' : '100vh'},844);  
    }
    else{
      $(this).find(".hw-blog-banner-img").animate({'margin-top' : '20%'},444);  
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '27%'},444); 
      $(this).animate({'height' : '50vh'},844);
      $(this).find(".hw-hm-animate-arrow-icon").show();   
      $(this).css(  "z-index", "0");
      $("#blog-banner-data-ops").animate({'top' : '0%'},844); 
    }
  });
  $("#blog-banner-devops").mouseleave(function(){
      $(this).find(".hw-blog-banner-img").animate({'margin-top' : '20%'},444);
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '27%'},444); 
      $(this).animate({'height' : '50vh'},844); 
      $(this).css(  "z-index", "0");  
      $(this).find(".hw-hm-animate-arrow-icon").show(); 
      $("#blog-banner-data-ops").animate({'top' : '0%'},844);     
        }); 



  $("#blog-banner-data-science").click(function(){

    if( $(this).css('height') === height_pixel )
    {
      $("#blog-banner-we-are-thinkers").animate({'top' : '-100%'},844); 
      $(this).css(  "z-index", "1");
      $(this).find(".hw-blog-banner-img").animate({'margin-top' : '25%'},444); 
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '12%'},444); 
      $(this).find(".hw-hm-animate-arrow-icon").hide(); 
      $(this).animate({'height' : '100vh'},844);   
    }
    else{
      $(this).find(".hw-blog-banner-img").animate({'margin-top' : '20%'},444);  
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '27%'},444); 
      $(this).animate({'height' : '50vh'},844); 
      $(this).css(  "z-index", "0");  
      $(this).find(".hw-hm-animate-arrow-icon").show(); 
      $("#blog-banner-we-are-thinkers").animate({'top' : '0%'},844);  
    }
  });
  $("#blog-banner-data-science").mouseleave(function(){
      $(this).find(".hw-blog-banner-img").animate({'margin-top' : '20%'},444);
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '27%'},444); 
      $(this).animate({'height' : '50vh'},844); 
      $(this).css(  "z-index", "0");  
      $(this).find(".hw-hm-animate-arrow-icon").show(); 
      $("#blog-banner-we-are-thinkers").animate({'top' : '0%'},844); 
        }); 

        /* for the 3d row*/
  $("#blog-banner-ux-ui").click(function(){

    if( $(this).css('height') === height_pixel )
    {
      $("#blog-banner-mobility").animate({'height' : '0vh'},844);
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '13%'},444); 
      $(this).css(  "z-index", "1");
      $(this).find(".hw-hm-animate-arrow-icon").hide(); 
      $(this).animate({'height' : '100vh'},844);    
    }
    else{
      $(this).animate({'height' : '50vh'},844); 
      $(this).css(  "z-index", "0");  
      $(this).find(".hw-hm-animate-arrow-icon").show(); 
      $("#blog-banner-mobility").animate({'height' : '50vh'},844);
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '27%'},444);     
    }
  });
  $("#blog-banner-ux-ui").mouseleave(function(){
      $(this).animate({'height' : '50vh'},844); 
      $(this).css(  "z-index", "0");  
      $(this).find(".hw-hm-animate-arrow-icon").show(); 
      $("#blog-banner-mobility").animate({'height' : '50vh'},844); 
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '27%'},444);   
    }); 


  $("#blog-banner-mobility").click(function(){

    if( $(this).css('height') === height_pixel )
    {
      $("#blog-banner-ux-ui").animate({'top' : '-100%'},844); 
      $(this).css(  "z-index", "1"); 
      $(this).find(".hw-blog-banner-img").animate({'margin-top' : '25%'},444);
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '12%'},444); 
      $(this).find(".hw-hm-animate-arrow-icon").hide(); 
      $(this).animate({'height' : '100vh'},844); 
    }
    else{
      $(this).find(".hw-blog-banner-img").animate({'margin-top' : '20%'},444);
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '27%'},444); 
      $(this).animate({'height' : '50vh'},844); 
      $(this).css(  "z-index", "0");  
      $(this).find(".hw-hm-animate-arrow-icon").show(); 
      $("#blog-banner-ux-ui").animate({'top' : '0%'},844); 
    }
  });
  $("#blog-banner-mobility").mouseleave(function(){
      $(this).find(".hw-blog-banner-img").animate({'margin-top' : '20%'},444);
      $(this).children().next(".blog-banner-posts-content").animate({'margin-top' : '27%'},444); 
      $(this).animate({'height' : '50vh'},844); 
      $(this).css(  "z-index", "0");  
      $(this).find(".hw-hm-animate-arrow-icon").show(); 
      $("#blog-banner-ux-ui").animate({'top' : '0%'},844);  
  });      

/*our thinking */

var which_one_clicked = 0;

  $("#hw-weresolve").click(function(){
    if(which_one_clicked == 0){
      which_one_clicked=1;
      $("#hw-ribbon-our-thinking-footer").css("display","none");
      $(this).css("cursor","default");
      $(this).removeClass("business-value-hover");
      $(this).animate({'width' : '100%','height' : '77.4vh'},844); 
      $("#hw-we-practice").animate({'width' : '0%','height' : '0vh'},844); 
      $("#hw-we-partner").animate({'width' : '0%','height' : '0vh'},844); 
      $("#hw-we-accelarate").animate({'width' : '0%','height' : '0vh'},844);
      setTimeout(function () {$("#hw-weresolve").addClass("ot-werelve-wepractice"); },800);
      $("#collapse-image-1").css("display","block");
      $("#collapse-image-1").animate({"opacity":"1"},844);
      $(".business-value-content h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({"margin-bottom":"7%"},844);
    }
    });

   $("#hw-we-practice").click(function(){
    if(which_one_clicked == 0){
      which_one_clicked=2;
      $("#hw-ribbon-our-thinking-footer").css("display","none");
      $(this).css("cursor","default");
      $(this).removeClass("business-value-hover");
      $(this).animate({'width' : '100%','height' : '77.4vh'},844); 
      $("#hw-weresolve").animate({'width' : '0%','height' : '0vh'},844); 
      $("#hw-we-partner").animate({'width' : '0%','height' : '0vh'},844); 
      $("#hw-we-accelarate").animate({'width' : '0%','height' : '0vh'},844);
      setTimeout(function () {$("#hw-we-practice").addClass("ot-werelve-wepractice"); },800);
      $("#collapse-image-2").css("display","block");
      $("#collapse-image-2").animate({"opacity":"1"},844);
      $(".business-value-content h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({"margin-bottom":"7%"},844);
    }
    });

     $("#hw-we-accelarate").click(function(){
      if(which_one_clicked == 0){
      which_one_clicked=3;
      $("#hw-ribbon-our-thinking-footer").css("display","none");
      $(this).css("cursor","default");
      $(this).removeClass("business-value-hover");
      $(this).animate({'width' : '100%','height' : '77.4vh'},844); 
      $("#hw-we-partner").animate({'width' : '0%','height' : '0vh'},844);
      $("#hw-we-practice").animate({'width' : '0%','height' : '0vh'},844); 
      $("#hw-weresolve").animate({'width' : '0%','height' : '0vh'},844);  
      setTimeout(function () {$("#hw-we-accelarate").addClass("ot-wepartner-weaccelrte");
      $("#buisness-tab").removeClass("business-value-height"); },800);
      $("#collapse-image-3").css("display","block");
      $("#collapse-image-3").animate({"opacity":"1"},844);
      $(".business-value-content h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({"margin-bottom":"7%"},944);
    }
    });

   $("#hw-we-partner").click(function(){
    if(which_one_clicked == 0){
      which_one_clicked=4;
      $("#hw-ribbon-our-thinking-footer").css("display","none");
      $(this).css("cursor","default");
      $(this).removeClass("business-value-hover");
      $(this).animate({'width' : '100%','height' : '77.4vh'},844);        
      $("#hw-we-accelarate").animate({'width' : '0%','height' : '0vh'},844); 
      $("#hw-we-practice").animate({'width' : '0%','height' : '0vh'},844); 
      $("#hw-weresolve").animate({'width' : '0%','height' : '0vh'},844); 
      setTimeout(function () {$("#hw-we-partner").addClass("ot-wepartner-weaccelrte");
      $("#buisness-tab").removeClass("business-value-height"); },800);
      
      $("#collapse-image-4").css("display","block");
      $("#collapse-image-4").animate({"opacity":"1"},844);
      $(".business-value-content h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({"margin-bottom":"7%"},844);
}
    });

   $(".collapse-button").click(function(){
          var navtab = $(".bs-example").offset().top + 0;
                  $('html, body').animate({
            scrollTop: navtab}, 500, 'linear');
        if(which_one_clicked == 4){
          which_one_clicked = 0;
          $("#hw-we-partner").removeClass("ot-wepartner-weaccelrte");
          $("#buisness-tab").addClass("business-value-height"); 
          $("#collapse-image-4").css("display","none");
          $("#collapse-image-4").animate({"opacity":"0"},844);
          $("#hw-we-partner").css("cursor","pointer");
          $("#hw-we-partner").addClass("business-value-hover");
          $("#hw-we-partner").animate({'height' : '77.4vh'},0); 
          $("#hw-we-partner").css("bottom","0");
        }
        else if(which_one_clicked == 3){
          which_one_clicked = 0;
          $("#hw-we-accelarate").removeClass("ot-wepartner-weaccelrte");
          $("#buisness-tab").addClass("business-value-height"); 
          $("#collapse-image-3").css("display","none");
          $("#collapse-image-3").animate({"opacity":"0"},844);
          $("#hw-we-accelarate").css("cursor","pointer");
          $("#hw-we-accelarate").addClass("business-value-hover");
          $("#hw-we-accelarate").animate({'height' : '77.4vh'},0); 
          $("#hw-we-accelarate").css("bottom","0");
        }
        else if(which_one_clicked == 2){
          which_one_clicked = 0;
          $("#hw-we-practice").removeClass("ot-werelve-wepractice");
          $("#collapse-image-2").css("display","none");
          $("#collapse-image-2").animate({"opacity":"0"},844);
          $("#hw-we-practice").addClass("business-value-hover");
          $("#hw-we-practice").css("cursor","pointer");
          $("#hw-we-practice").animate({'height' : '77.4vh'},0); 
        }
        else if(which_one_clicked == 1){
          which_one_clicked = 0;
          $("#hw-weresolve").removeClass("ot-werelve-wepractice"); 
          $("#collapse-image-1").css("display","none");
          $("#collapse-image-1").animate({"opacity":"0"},844);
          $("#hw-weresolve").css("cursor","pointer");
          $("#hw-weresolve").addClass("business-value-hover");
          $("#hw-weresolve").animate({'height' : '77.4vh'},0); 
        }
      
      
        setTimeout(function(){$("#hw-ribbon-our-thinking-footer").css("display","block");}, 1000);
      $(".business-value-content h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({"margin-bottom":"29%"},844);
      $("#hw-we-partner").animate({'width' : '50%','height' : '38.7vh'},844);       
      $("#hw-we-accelarate").animate({'width' : '50%','height' : '38.7vh'},844); 
      $("#hw-we-practice").animate({'width' : '50%','height' : '38.7vh'},844); 
      $("#hw-weresolve").animate({'width' : '50%','height' : '38.7vh'},844); 
    });
  
   $("ul.p-flex li").click(function(){
               if(which_one_clicked == 4){
          which_one_clicked = 0;
          $("#hw-we-partner").removeClass("ot-wepartner-weaccelrte");
          $("#buisness-tab").addClass("business-value-height"); 
          $("#collapse-image-4").css("display","none");
          $("#collapse-image-4").animate({"opacity":"0"},844);
          $("#hw-we-partner").css("cursor","pointer");
          $("#hw-we-partner").addClass("business-value-hover");
          $("#hw-we-partner").animate({'height' : '77.4vh'},0); 
          $("#hw-we-partner").css("bottom","0");
        }
        else if(which_one_clicked == 3){
          which_one_clicked = 0;
          $("#hw-we-accelarate").removeClass("ot-wepartner-weaccelrte");
          $("#buisness-tab").addClass("business-value-height"); 
          $("#collapse-image-3").css("display","none");
          $("#collapse-image-3").animate({"opacity":"0"},844);
          $("#hw-we-accelarate").css("cursor","pointer");
          $("#hw-we-accelarate").addClass("business-value-hover");
          $("#hw-we-accelarate").animate({'height' : '77.4vh'},0); 
          $("#hw-we-accelarate").css("bottom","0");
        }
        else if(which_one_clicked == 2){
          which_one_clicked = 0;
          $("#hw-we-practice").removeClass("ot-werelve-wepractice");
          $("#collapse-image-2").css("display","none");
          $("#collapse-image-2").animate({"opacity":"0"},844);
          $("#hw-we-practice").addClass("business-value-hover");
          $("#hw-we-practice").css("cursor","pointer");
          $("#hw-we-practice").animate({'height' : '77.4vh'},0); 
        }
        else if(which_one_clicked == 1){
          which_one_clicked = 0;
          $("#hw-weresolve").removeClass("ot-werelve-wepractice"); 
          $("#collapse-image-1").css("display","none");
          $("#collapse-image-1").animate({"opacity":"0"},844);
          $("#hw-weresolve").css("cursor","pointer");
          $("#hw-weresolve").addClass("business-value-hover");
          $("#hw-weresolve").animate({'height' : '77.4vh'},0); 
        }
      
      
        setTimeout(function(){$("#hw-ribbon-our-thinking-footer").css("display","block");}, 0);
      $(".business-value-content h1.text-center.gotham-rounded-light.heading.hw-copyright").animate({"margin-bottom":"29%"},844);
      $("#hw-we-partner").animate({'width' : '50%','height' : '38.7vh'},0);       
      $("#hw-we-accelarate").animate({'width' : '50%','height' : '38.7vh'},0); 
      $("#hw-we-practice").animate({'width' : '50%','height' : '38.7vh'},0); 
      $("#hw-weresolve").animate({'width' : '50%','height' : '38.7vh'},0); 
    });



/*for burger menu*/
 $('#nav-hamburger-icon').click(function(){
   if($("#hw-right-nav-menu").css("width")=="0px")
     {
       $("#hw-right-nav-menu").animate({'width':'142px'},700);
       $(".hide-scroll").hide();
       $("#nav-hamburger-icon").hide();
   // $(this).toggleClass('open');
   }
   else{
     $("#hw-right-nav-menu").animate({'width':'0px'},500);
     $(".hide-scroll").show();
     $("#nav-hamburger-icon").show();
     // $(this).toggleClass('open');
   }
     });

   $("section").click(function(){
      if($("#hw-right-nav-menu").css("width")=="142px")
     {
     // $("#nav-hamburger-icon").toggleClass('open');
     $("#hw-right-nav-menu").animate({'width':'0px'},500);
      $(".hide-scroll").show();
     $("#nav-hamburger-icon").show();

    }
  });

     $("#nav-cross-button").click(function(){
      if($("#hw-right-nav-menu").css("width")=="142px")
     {
     // $("#nav-hamburger-icon").toggleClass('open');
     $("#hw-right-nav-menu").animate({'width':'0px'},500);
      $(".hide-scroll").show();
     $("#nav-hamburger-icon").show();

    }
   });
   /*end*/

/*for filtering in case study*/
var no_of_total_case_study_item=0;
$(".casestudy-category-init").each(function(){
  no_of_total_case_study_item++;
      });
$("#case-studies-total-no").text(no_of_total_case_study_item);
function case_study_filter_function(){
    $(".no_of_matched_case_item").remove();
    var no_of_matched_item=0;
     if ($("#case-studies-dataops-checkbox").prop('checked')==true){
      $(".casestudy-category-init").each(function(){
        if($(this).text().toLowerCase().trim()=="dataops"){
          $(".casestudy-ul ul ").find(".dataops").css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".casestudy-category-init").each(function(){
        if($(this).text().toLowerCase().trim()=="dataops"){
          $(".casestudy-ul ul ").find(".dataops").css("display","none");
        }
      });
      }

     if ($("#case-studies-devops-checkbox").prop('checked')==true){
      $(".casestudy-category-init").each(function(){
        if($(this).text().toLowerCase().trim()=="devops"){
          $(".casestudy-ul ul ").find(".devops").css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".casestudy-category-init").each(function(){
        if($(this).text().toLowerCase().trim()=="devops"){
          $(".casestudy-ul ul ").find(".devops").css("display","none");
        }
      });
      }

      if ($("#case-studies-datascie-checkbox").prop('checked')==true){
      $(".casestudy-category-init").each(function(){
        if($(this).text().toLowerCase().trim()=="data science"){
          $(".casestudy-ul ul ").find(".data").css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".casestudy-category-init").each(function(){
        if($(this).text().toLowerCase().trim()=="data science"){
          $(".casestudy-ul ul ").find(".data").css("display","none");
        }
      });
      }

      if ($("#case-studies-ui-ux-checkbox").prop('checked')==true){
      $(".casestudy-category-init").each(function(){
        if($(this).text().toLowerCase().trim()=="ui"){
          $(".casestudy-ul ul ").find(".ui").css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".casestudy-category-init").each(function(){
        if($(this).text().toLowerCase().trim()=="ui"){
          $(".casestudy-ul ul ").find(".ui").css("display","none");
        }
      });
      }
      if ($("#case-studies-mobility-checkbox").prop('checked')==true){
      $(".casestudy-category-init").each(function(){
        if($(this).text().toLowerCase().trim()=="mobility"){
          $(".casestudy-ul ul ").find(".mobility").css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".casestudy-category-init").each(function(){
        if($(this).text().toLowerCase().trim()=="mobility"){
          $(".casestudy-ul ul ").find(".mobility").css("display","none");
        }
      });
      }
      
      if ($("#case-studies-client-checkbox").prop('checked')==true){
      $(".casestudy-category-init").each(function(){
        if($(this).text().toLowerCase().trim()=="client work"){
          $(".casestudy-ul ul ").find(".client").css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".casestudy-category-init").each(function(){
        if($(this).text().toLowerCase().trim()=="client work"){
          $(".casestudy-ul ul ").find(".client").css("display","none");
        }
      });
      }
      $("#case-studies-total-no").text(no_of_matched_item+"/"+no_of_total_case_study_item);
      if(no_of_matched_item==0)
        $(".casestudy-ul ul ").append('<div class="gotham-rounded-light no_of_matched_case_item text-center" style="color:#ee2b7b"><p>sorry, no match found</p></div>');
}

  $("#case-studies-mobility-checkbox,#case-studies-client-checkbox,#case-studies-dataops-checkbox,#case-studies-devops-checkbox,#case-studies-datascie-checkbox,#case-studies-ui-ux-checkbox").click(function(){
case_study_filter_function();
});

/*end filtering in case study*/ 

/*for filtering in bootcamp*/

var no_of_total_bootcamp_item=0;
$(".upskill-cont-filter").each(function(){
  no_of_total_bootcamp_item++;
      });
$("#bootcamp-filter-total-no").text(no_of_total_bootcamp_item);

function bootcamp_filter_function(){
    $(".no_of_matched_case_item").remove();
    var no_of_matched_item=0;
     if ($("#bootcamp-dataops-checkbox").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="dataops"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="dataops"){
          $(this).css("display","none");
        }
      });
      }

     if ($("#bootcamp-devops-checkbox").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="devops"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="devops"){
          $(this).css("display","none");
        }
      });
      }

      if ($("#bootcamp-datascie-checkbox").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="data science"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="data science"){
          $(this).css("display","none");
        }
      });
      }

      if ($("#bootcamp-ui-ux-checkbox").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="ui"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="ui"){
          $(this).css("display","none");
        }
      });
      }
      if ($("#bootcamp-mobility-checkbox").prop('checked')==true){
      $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="mobility"){
          $(this).css({opacity: 0,display: 'block'}).animate({opacity:1},500);
          no_of_matched_item++;
        }

      });
      }
      else
      {
        $(".upskill-cont-filter").each(function(){
        if($(this).children().children().first().text().toLowerCase().trim()=="mobility"){
          $(this).css("display","none");
        }
      });
      }
      
      $("#bootcamp-filter-total-no").text(no_of_matched_item+"/"+no_of_total_bootcamp_item);
      if(no_of_matched_item==0)
      $(".hw-upskilling-details  ").append('<div class="gotham-rounded-light no_of_matched_case_item text-center" style="color:#ee2b7b;margin-top:40px;margin-bottom:40px"><p>sorry, no match found</p></div>');
}

  $("#bootcamp-mobility-checkbox,#bootcamp-client-checkbox,#bootcamp-dataops-checkbox,#bootcamp-devops-checkbox,#bootcamp-datascie-checkbox,#bootcamp-ui-ux-checkbox").click(function(){
bootcamp_filter_function();
});


 
/*end filtering in bootcamp*/ 

/*start of company page animation banner*/
$("#xmlid_company_date")


$('g[id="XMLID_2_"],#xmlid_company_date').mouseenter(function(){
  $("#xmlid_company_date").text("2014");
  $("#xmlid2_circle_desc").show();
  $(this).children('g:last-child').find("path").attr("class", "XMLID_2_-rotate");
});

$('#xmlid_company_date').mouseenter(function(){
  $("#xmlid2_circle_desc").show();
});

$('g[id="XMLID_3_"]').mouseenter(function(){
  $("#xmlid_company_date").text("2016");
  $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
  $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

  $(this).next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.1) translateX(-59%) translateY(-27%)" ,"-moz-transform" : "scale(1.1) translateX(-4.5%) translateY(-4.5%)" });//
  $(this).next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.08) translateX(-32%) translateY(-13%)" ,"-moz-transform" : "scale(1.08) translateX(-3.6%) translateY(-3.6%)"  });
  $(this).next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.06) translateX(-20%) translateY(-9%)" ,"-moz-transform" : "scale(1.06) translateX(-2.7%) translateY(-2.7%)" });
  $(this).next().next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.04) translateX(-12%) translateY(-5%)" ,"-moz-transform" : "scale(1.04) translateX(-1.8%) translateY(-2%)" });
});
$('g[id="XMLID_4_"]').mouseenter(function(){
  $("#xmlid_company_date").text("2014");
  $("#xmlid_circle_desc").text("Team").css({"font-size": 0}).animate({"font-size": 18},500);
  $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
  $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");


  $(this).next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.1) translateX(-39%) translateY(-19%)" ,"-moz-transform" : "scale(1.1) translateX(-4.5%) translateY(-4%)" });//
  $(this).next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.08) translateX(-25%) translateY(-12%)" ,"-moz-transform" : "scale(1.08) translateX(-3.5%) translateY(-3.7%)" });
  $(this).next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.06) translateX(-17%) translateY(-7%)" , "-moz-transform" : "scale(1.06) translateX(-2.8%) translateY(-3%)"});
  $(this).next().next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.04) translateX(-10%) translateY(-4%)" ,"-moz-transform" : "scale(1.04) translateX(-2%) translateY(-2%)" });

  $(this).prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.9) translateX(108%) translateY(51%)" ,"-moz-transform" : "scale(0.9) translateX(5.5%) translateY(5.3%)" });
});
$('g[id="XMLID_5_"]').mouseenter(function(){
  $("#xmlid_company_date").text("2016");
  $("#xmlid5_circle_desc").css({"opacity": 0,"display":"block"}).animate({"opacity": 1},900);
  $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
  $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

  $(this).next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.1) translateX(-31%) translateY(-15%)" ,"-moz-transform" : "scale(1.1) translateX(-4.5%) translateY(-4.5%)"  });//
  $(this).next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.08) translateX(-22%) translateY(-10%)" , "-moz-transform" : "scale(1.08) translateX(-3.7%) translateY(-3.5%)"});
  $(this).next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.06) translateX(-15%) translateY(-7%)" ,"-moz-transform" : "scale(1.06) translateX(-2.8%) translateY(-2.7%)" });
  $(this).next().next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.04) translateX(-9%) translateY(-4%)" ,"-moz-transform" : "scale(1.04) translateX(-2%) translateY(-2%)" });

  $(this).prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.9) translateX(71%) translateY(34%)" , "-moz-transform" : "scale(0.9) translateX(5.5%) translateY(5.3%)"});
  $(this).prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.95) translateX(52%) translateY(24%)" ,"-moz-transform" : "scale(0.95) translateX(2.7%) translateY(2.6%)" });//
});
$('g[id="XMLID_7_"]').mouseenter(function(){
  $("#xmlid_company_date").text("2016");
  $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
  $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

  $(this).next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.1) translateX(-27%) translateY(-12%)" ,"-moz-transform" : "scale(1.1) translateX(-4.5%) translateY(-4.5%)" });//
  $(this).next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.08) translateX(-19%) translateY(-9%)" ,"-moz-transform" : "scale(1.08) translateX(-3.7%) translateY(-3.5%)" });
  $(this).next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.06) translateX(-13%) translateY(-6%)" ,"-moz-transform" : "scale(1.06) translateX(-2.8%) translateY(-3%)" });
  $(this).next().next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.04) translateX(-8%) translateY(-3%)" ,"-moz-transform" : "scale(1.04) translateX(-2%) translateY(-2%)" });
  $(this).next().next().next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.04) translateX(-7%) translateY(-3%)" ,"-moz-transform" : "scale(1.04) translateX(-2%) translateY(-2%)" });

  $(this).prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.9) translateX(49%) translateY(25%)" ,"-moz-transform" : "scale(0.9) translateX(5.5%) translateY(5.8%)"  });
  $(this).prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.93) translateX(47%) translateY(24%)" ,"-moz-transform" : "scale(0.93) translateX(3.6%) translateY(3.6%)"  });//
  $(this).prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.96) translateX(40%) translateY(19%)" ,"-moz-transform" : "scale(0.96) translateX(2%) translateY(2%)"  });//
});
$('g[id="XMLID_8_"]').mouseenter(function(){
  $("#xmlid_company_date").text("2016");
  $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
  $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

  $(this).next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.1) translateX(-24%) translateY(-11%)" , "-moz-transform" : "scale(1.08) translateX(-3.7%) translateY(-3.6%)" });//
  $(this).next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.08) translateX(-17%) translateY(-8%)" , "-moz-transform" : "scale(1.08) translateX(-3.7%) translateY(-3.6%)"});
  $(this).next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.06) translateX(-12%) translateY(-5%)" , "-moz-transform" : "scale(1.06) translateX(-2.8%) translateY(-2.6%)"});
  $(this).next().next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.04) translateX(-7%) translateY(-3.5%)" , "-moz-transform" : "scale(1.04) translateX(-1.8%) translateY(-2%)"});
  $(this).next().next().next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.02) translateX(-3%) translateY(-1.5%)" , "-moz-transform" : "scale(1.02) translateX(-1%) translateY(-1.1%)"});

  $(this).prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.9) translateX(38%) translateY(19%)" , "-moz-transform" : "scale(0.9) translateX(5.5%) translateY(5.3%)" });
  $(this).prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.92) translateX(39%) translateY(19%)" , "-moz-transform" : "scale(0.92) translateX(4.4%) translateY(4.5%)"});//
  $(this).prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.94) translateX(41%) translateY(19%)" ,"-moz-transform" : "scale(0.94) translateX(3.1%) translateY(3%)" });
  $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.96) translateX(40%) translateY(19%)" , "-moz-transform" : "scale(0.96) translateX(2%) translateY(2%)"});//
});
$('g[id="XMLID_9_"]').mouseenter(function(){
  $("#xmlid_company_date").text("2016");
  $("#xmlid9_circle_desc").css({"opacity": 0,"display":"block"}).animate({"opacity": 1},900);
  $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
  $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

  $(this).next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.08) translateX(-17%) translateY(-8%)" , "-moz-transform" : "scale(1.06) translateX(-2.8%) translateY(-2.7%)" });//
  $(this).next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.06) translateX(-11.5%) translateY(-5.5%)" ,"-moz-transform" : "scale(1.06) translateX(-2.8%) translateY(-2.7%)" });
  $(this).next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.04) translateX(-8%) translateY(-3%)" , "-moz-transform" : "scale(1.04) translateX(-2%) translateY(-2%)"});
  $(this).next().next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.02) translateX(-3%) translateY(-1.5%)" , "-moz-transform" : "scale(1.02) translateX(-1%) translateY(-1%)"});
  $(this).next().next().next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.008) translateX(-1%) translateY(-0.5%)" , "-moz-transform" : "scale(1.008) translateX(-0.6%) translateY(-0.5%)"});

  $(this).prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.9) translateX(33%) translateY(16%)" , "-moz-transform" : "scale(0.92) translateX(4.2%) translateY(4%)"});
  $(this).prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.92) translateX(30%) translateY(14%)" , "-moz-transform" : "scale(0.92) translateX(4.2%) translateY(4.1%)"});//
  $(this).prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.94) translateX(28%) translateY(14%)" , "-moz-transform" : "scale(0.94) translateX(3.2%) translateY(3.3%)"});
  $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.96) translateX(26%) translateY(13%)" , "-moz-transform" : "scale(0.96) translateX(2%) translateY(2%)"});//
});
$('g[id="XMLID_10_"]').mouseenter(function(){
  $("#xmlid_company_date").text("2016");
  $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
  $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

  $(this).next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.07) translateX(-13%) translateY(-6%)" , "-moz-transform" : "scale(1.07) translateX(-3.3%) translateY(-3.2%)"});//
  $(this).next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.06) translateX(-10.5%) translateY(-5%)" , "-moz-transform" : "scale(1.06) translateX(-2.8%) translateY(-2.8%)"});
  $(this).next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.04) translateX(-7%) translateY(-3%)" ,"-moz-transform" : "scale(1.04) translateX(-1.9%) translateY(-1.8%)"  });
  $(this).next().next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.02) translateX(-3%) translateY(-1.5%)" , "-moz-transform" : "scale(1.02) translateX(-1%) translateY(-1%)"});
  $(this).next().next().next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.01) translateX(-1.5%) translateY(-1%)" , "-moz-transform" : "scale(1.01) translateX(-0.5%) translateY(-0.4%)"});

  $(this).prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.91) translateX(25.5%) translateY(12%)" , "-moz-transform" : "scale(0.91) translateX(4.8%) translateY(4.5%)"});
  $(this).prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.92) translateX(25%) translateY(12%)" , "-moz-transform" : "scale(0.92) translateX(4.2%) translateY(4%)" });//
  $(this).prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.94) translateX(22%) translateY(10%)" ,"-moz-transform" : "scale(0.94) translateX(3%) translateY(3%)"  });
  $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.96) translateX(19%) translateY(9%)" , "-moz-transform" : "scale(0.96) translateX(2.1%) translateY(2.2%)"});//
});
$('g[id="XMLID_11_"]').mouseenter(function(){
  $("#xmlid_company_date").text("2016");
  $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
  $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

  $(this).next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.06) translateX(-10.6%) translateY(-5%)" , "-moz-transform" : "scale(1.06) translateX(-2.8%) translateY(-3%)" });//
  $(this).next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.04) translateX(-6.5%) translateY(-3%)" , "-moz-transform" : "scale(1.04) translateX(-1.9%) translateY(-1.8%)"});
  $(this).next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.02) translateX(-3%) translateY(-2%)" , "-moz-transform" : "scale(1.02) translateX(-1%) translateY(-1%)"});
  $(this).next().next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.01) translateX(-1.5%) translateY(-1%)" , "-moz-transform" : "scale(1.01) translateX(-0.5%) translateY(-0.4%)"});
  $("#XMLID_MAIN_").css({"-webkit-transform" : "scale(1.02) translateX(-2%) translateY(-2%)" , "-moz-transform" : "scale(1.02) translateX(-0.9%) translateY(-1.3%)"});//for main

  $(this).prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.94) translateX(14.5%) translateY(7%)" , "-moz-transform" : "scale(0.94) translateX(3.12%) translateY(3.1%)"});
  $(this).prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.95) translateX(13.5%) translateY(6%)" , "-moz-transform" : "scale(0.95) translateX(2.6%) translateY(2.5%)"});//
  $(this).prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.96) translateX(12.5%) translateY(5%)" ,"-moz-transform" : "scale(0.96) translateX(2%) translateY(1.9%)" });
  $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.98) translateX(8%) translateY(3%)" , "-moz-transform" : "scale(0.98) translateX(1%) translateY(1%)"});//
});
$('g[id="XMLID_12_"]').mouseenter(function(){
  $("#xmlid_company_date").text("2016");
  $("#xmlid12_circle_desc").css({"opacity": 0,"display":"block"}).animate({"opacity": 1},900);
  $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
  $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

  $(this).next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.05) translateX(-8.3%) translateY(-4%)" , "-moz-transform" : "scale(1.04) translateX(-1.9%) translateY(-1.8%)"});//
  $(this).next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.06) translateX(-9%) translateY(-5%)" , "-moz-transform" : "scale(1.06) translateX(-2.8%) translateY(-2.6%)"});
  $(this).next().next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.02) translateX(-3%) translateY(-1.2%)" , "-moz-transform" : "scale(1.02) translateX(-1%) translateY(-1%)"});
  $("#XMLID_MAIN_").css({"-webkit-transform" : "scale(1.06) translateX(-7%) translateY(-5%)" ,"-moz-transform" : "scale(1.06) translateX(-2.5%) translateY(-2.5%)" });//for main

  $(this).prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.94) translateX(12.9%) translateY(6%)" , "-moz-transform" : "scale(0.94) translateX(3.2%) translateY(3%)"});
  $(this).prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.95) translateX(11.5%) translateY(5.5%)" , "-moz-transform" : "scale(0.95) translateX(2.5%) translateY(2.5%)"});//
  $(this).prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.96) translateX(10.5%) translateY(5%)" , "-moz-transform" : "scale(0.96) translateX(2%) translateY(2%)"});
  $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.98) translateX(6%) translateY(3%)" , "-moz-transform" : "scale(0.98) translateX(1%) translateY(1%)"});//
});
$('g[id="XMLID_13_"]').mouseenter(function(){
  $("#xmlid_company_date").text("2016");
  $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
  $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");

  $(this).next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.03) translateX(-4.3%) translateY(-3%)" , "-moz-transform" : "scale(1.03) translateX(-1.5%) translateY(-1.4%)" });//
  $(this).next().next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.03) translateX(-4.3%) translateY(-2%)" , "-moz-transform" : "scale(1.03) translateX(-1.5%) translateY(-1.4%)" });//
  $("#XMLID_MAIN_").css({"-webkit-transform" : "scale(1.08) translateX(-9%) translateY(-6%)" , "-moz-transform" : "scale(1.08) translateX(-3.5%) translateY(-4%)"});//for main

  $(this).prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.95) translateX(10%) translateY(4.5%)" , "-moz-transform" : "scale(0.95) translateX(2.6%) translateY(2.5%)"});
  $(this).prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.95) translateX(10.5%) translateY(5%)" ,"-moz-transform" : "scale(0.95) translateX(2.6%) translateY(2.6%)" });//
  $(this).prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.96) translateX(9.5%) translateY(4.5%)" ,"-moz-transform" : "scale(0.96) translateX(2%) translateY(2.1%)" });
  $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.98) translateX(5%) translateY(2%)" , "-moz-transform" : "scale(0.98) translateX(1%) translateY(1%)"});//
});//done
$('g[id="XMLID_14_"]').mouseenter(function(){
  $("#xmlid_company_date").text("2016");
  $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
  $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");
  $(this).next().children('g:last-child').find("path").css({"-webkit-transform" : "scale(1.06) translateX(-8.5%) translateY(-4.3%)" , "-moz-transform" : "scale(1.06) translateX(-2.8%) translateY(-2.8%)" });//
  $("#XMLID_MAIN_").css({"-webkit-transform" : "scale(1.097) translateX(-12%) translateY(-7%)" , "-moz-transform" : "scale(1.097) translateX(-4%) translateY(-4%)"});//for main

  $(this).prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.95) translateX(9%) translateY(4.5%)" , "-moz-transform" : "scale(0.95) translateX(2.5%) translateY(2.5%)"});
  $(this).prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.95) translateX(9.5%) translateY(5%)" ,"-moz-transform" : "scale(0.95) translateX(2.5%) translateY(2.5%)"  });//
  $(this).prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.96) translateX(8.5%) translateY(4.5%)" , "-moz-transform" : "scale(0.96) translateX(2%) translateY(2%)"});
  $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.98) translateX(4%) translateY(2%)" , "-moz-transform" : "scale(0.98) translateX(1%) translateY(1%)" });//
});

$('g[id="XMLID_15_"]').mouseenter(function(){
  $("#xmlid_company_date").text("2016");
  $("#xmlid15_circle_desc").css({"opacity": 0,"display":"block"}).animate({"opacity": 1},900);
  $(this).children('g:first-child').next().attr("class", "xmlid-shown-path");
  $(this).children('g:last-child').find("path").attr("class", "xmlid-hidden-path");
  $("#XMLID_MAIN_").css({"-webkit-transform" : "scale(1.097) translateX(-12%) translateY(-7%)" , "-moz-transform" : "scale(1.097) translateX(-4%) translateY(-4%)"});//for main

  $(this).prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.95) translateX(9%) translateY(4.5%)" , "-moz-transform" : "scale(0.95) translateX(2.5%) translateY(2.5%)"});
  $(this).prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.95) translateX(9.5%) translateY(5%)" ,"-moz-transform" : "scale(0.95) translateX(2.5%) translateY(2.5%)"  });//
  $(this).prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.96) translateX(8.5%) translateY(4.5%)" , "-moz-transform" : "scale(0.96) translateX(2%) translateY(2%)"});
  $(this).prev().prev().prev().prev().children('g:last-child').find("path").css({"-webkit-transform" : "scale(0.98) translateX(4%) translateY(2%)" , "-moz-transform" : "scale(0.98) translateX(1%) translateY(1%)" });//
});


$('g[id^="XMLID_"],g#XMLID_MAIN_').mouseleave(function(){
  $("#xmlid_company_date").text("2014");
  $(".xmlid_circle_desc").hide();
  $(this).children('g:first-child').next().attr("class", "xmlid-hidden-path");
  $(this).children('g:last-child').find("path").attr("class", "");
  $('g[id^="XMLID_"]').prev().children('g:last-child').find("path").css("transform", "scale(1) translateX(0%) translateY( 0%)");
  $('g[id="XMLID_15_"]').children('g:last-child').find("path").css("transform", "scale(1) translateX(0%) translateY(0%)");
  $("#XMLID_MAIN_").css("transform", "scale(1) translateX(0%) translateY(0%)");
});
$('#all-the-path').mouseleave(function(){

  $("#xmlid_startup_circle_desc").css({"opacity": 0,"display":"block"}).animate({"opacity": 1},900);
  $("#xmlid_startup_desc").css({"opacity": 0,"display":"block"}).animate({"opacity": 1},900);
});
$('#xmlid_startup_circle_desc,#xmlid_startup_circle_desc').mouseover(function(){
  $("#xmlid_startup_circle_desc").show();
  $("#xmlid_startup_desc").show();
});
$('#all-the-path').mouseover(function(){

  $("#xmlid_startup_circle_desc").hide();
  $("#xmlid_startup_desc").hide();
});



$('.xmlid4-hover-small-circle,.xmlid5-hover-small-circle').mouseenter(function(){
  $(this).next().children('g:first-child').attr("class", "xmlid-hidden-line-path xmlid-shown-line-path xmlid-line-anime");
  var _this = $(this);
  _this.next().children("g:not(:first-child)").css("opacity","0");
  _this.next().children("g:not(:first-child)").attr("class", "xmlid-hidden-line-path xmlid-shown-line-path");
  setTimeout(function () { _this.next().children("g:not(:first-child)").animate({"opacity":"1"},500); },800);
});


$('.xmlid4-hover-small-circle,.xmlid5-hover-small-circle').mouseleave(function(){
  $(this).next().children('g:first-child').attr("class", "xmlid-hidden-line-path");
  $(this).next().children().attr("class", "xmlid-hidden-line-path");
  $('.xmlid4-hover-small-circle,.xmlid5-hover-small-circle').next().children().attr("class", "xmlid-hidden-line-path");
});

$('.xmlid4-hover-small-circle,.xmlid5-hover-small-circle').next().children().attr("class", "xmlid-hidden-line-path");


$("#company-anime-banner path").animate({"opacity":"1"},5000);

/*end company banner anime*/
});
