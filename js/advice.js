const reset = document.querySelector('#reset');

const getAdvice = async function () {
  try {
    const request = await fetch('https://api.adviceslip.com/advice');

    if (request.status >= 200 && request.status < 400) {
      const data = await request.json();
      $('#advice').text(data['slip'].advice);
    } else {
      throw new error('Sorry, could not get advice. Try Again');
    }
  } catch (err) {
    console.error(`${err}!!`);
  }
};
getAdvice();

// Generate New Advice
reset.addEventListener('click', getAdvice);

// Old Code
/*let request = new XMLHttpRequest();

let url = 'https://api.adviceslip.com/advice';

request.open('GET', url, true);

request.onload = function () {
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    $('#advice').text(data['slip'].advice);
  }
};

request.send();

// Generate New Advice
function reset() {
  let request = new XMLHttpRequest();

  let url = 'https://api.adviceslip.com/advice';

  request.open('GET', url, true);

  request.onload = function () {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      $('#advice').text(data['slip'].advice);
    }
  };

  request.send();
}
*/
