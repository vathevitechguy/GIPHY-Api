const searchInput = document.querySelector('.searchQ');
const btnSearch = document.querySelector('.btn-search');

// Get Api: Asynchronous
const letSee = async function () {
  $('#result').css('display', 'block');
  $('#bodyy').text('');
  let keyword = $(searchInput).val();
  $('#searchVal').text(keyword);
  try {
    const getApi = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=yvfvXNuWXDn0sD6Cvmy7Z38rR7WanX3F`
    );

    if (getApi.status >= 200 && getApi.status < 400) {
      const res = await getApi.json();
      const data = await res.data;
      data.forEach(async (dt) => {
        await $('#bodyy').append(`
        <div class="col-md-3 col-lg-3 mb-md-0 mb-4" style="overflow:hidden; margin-bottom: 30px !important;">
          <img src=${dt.images.fixed_height.url} class="gifdiv">
        </div>
        `);
      });
    } else {
      throw new Error('Something went Wrong');
    }
  } catch (err) {
    console.error(`${err} !!!!!!!!!!`);
  }
};

btnSearch.addEventListener('click', letSee);
// searchInput.addEventListener('keydown', function (e) {
//   e.preventDefault();
//   if (e.key === 'Enter' && $(searchInput).val() != ''){
//     letSee();
//   }
// });

function help() {
  $('#help').css('display', 'block');
}

function closeHelp() {
  $('#help').css('display', 'none');
}

//Activation Key
/*
//rVeCO4fnPWt76cdVHVt5fB43PzHqwKOa
//https://api.adviceslip.com/advice/search/spiders
*/

// Old Fetch Api Code
/*
const letSee = function () {
  $('#result').css('display', 'block');
  $('#bodyy').text('');
  let keyword = $(searchInput).val();

  $('#searchVal').text(keyword);
  let request = new XMLHttpRequest();
  let url =
    'https://api.giphy.com/v1/gifs/search?q=' +
    keyword +
    '&api_key=yvfvXNuWXDn0sD6Cvmy7Z38rR7WanX3F';

  request.open('GET', url, true);

  request.onload = function () {
    let res = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      for (let i = 0; i < 10; i++) {
        $('#bodyy').append(
          `<img src=  ${res.data[i].images.downsized_large.url} >`
        );
        //$('body').append('src',(res.data[i].images.downsized_large.url));
      }
    }
  };

  //OPTIONAL

  let newRequest = new XMLHttpRequest();
  let newUrl = 'https://api.adviceslip.com/advice/search/' + keyword;
  newRequest.open('GET', newUrl, true);
  newRequest.onload = function () {
    let newRes = JSON.parse(this.response);
    if (newRequest.status >= 200 && newRequest.status < 400) {
      let resAdv = newRes.slips[0].advice;
      console.log(resAdv);
      $('#advice').text(resAdv);
    }
  };

  request.send();
  newRequest.send();
};
*/

// Change Navbar Color on scroll
/*
$(window).scroll(function() {
 var value = $(this).scrollTop();
 if (value > 5)
     $(".navbarTrans").css({'color':'#000 !important'});
   console.log("Working")
 else
     $(".logo").attr("src", topIMG);
     $(".main-menu > ul > li > a ").css({'color':'#000'});
     $("#reg-btn").css({'color':'#fff !important'});
     $("#log-btn").css({'color':'#000'});
     $(".scroll-to-top").css({'display': 'inline'});
 if (value < 5)
     $(".main-menu > ul > li > a ").css({'color':'#fff'});
 });
*/
