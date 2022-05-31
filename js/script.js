function letSee() {

  $("#result").css("display","block");
  $("#bodyy").text("");
  let searchInput = $(".searchQ").val();
  
  $("#searchVal").text(searchInput);
  let request = new XMLHttpRequest();
  let url = "https://api.giphy.com/v1/gifs/search?q="+searchInput+"&api_key=yvfvXNuWXDn0sD6Cvmy7Z38rR7WanX3F";

  request.open("GET", url, true);

  request.onload = function() {

    let res = JSON.parse(this.response); 
    
    if (request.status >= 200 && request.status < 400) {

      
      for (let i = 0; i < 10;i++) {
        
        $("#bodyy").append(`<img src=  ${res.data[i].images.downsized_large.url} >`);
        //$('body').append('src',(res.data[i].images.downsized_large.url));
      }  

    }

    
  };


//OPTIONAL
  
  let newRequest = new XMLHttpRequest();
  let newUrl = "https://api.adviceslip.com/advice/search/"+searchInput;
  newRequest.open("GET", newUrl, true);
  newRequest.onload = function() {

    let newRes = JSON.parse(this.response);
    if (newRequest.status >= 200 && newRequest.status < 400) {
      let resAdv = newRes.slips[0].advice;
      console.log(resAdv);
      $("#advice").text(resAdv);
    }

    
  };
  
  

  request.send();
  newRequest.send();
}

//Activation Key 
//rVeCO4fnPWt76cdVHVt5fB43PzHqwKOa

//https://api.adviceslip.com/advice/search/spiders

function help(){
  $("#help").css("display","block");
}

function closeHelp(){
  $("#help").css("display","none");
}

// Change Navbar Color on scroll
       // $(window).scroll(function() {
       //  var value = $(this).scrollTop();
       //  if (value > 5)
       //      $(".navbarTrans").css({'color':'#000 !important'});
       //    console.log("Working")
       //  else
       //      $(".logo").attr("src", topIMG);
       //      $(".main-menu > ul > li > a ").css({'color':'#000'});
       //      $("#reg-btn").css({'color':'#fff !important'});
       //      $("#log-btn").css({'color':'#000'});
       //      $(".scroll-to-top").css({'display': 'inline'});
       //  if (value < 5)
       //      $(".main-menu > ul > li > a ").css({'color':'#fff'});
       //  });


// // IIFE Function
// (function LoadApp(){
//    console.log("App is loading");
//   console.log("App is loaded");
// })();
     
