let request = new XMLHttpRequest();

let url = 'https://api.adviceslip.com/advice';

request.open('GET', url, true);

request.onload = function () {
  let data = JSON.parse(this.response);
};

request.onload = function () {
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    $('#advice').text(data['slip'].advice);
  }
};

request.send();

function reset() {
  let request = new XMLHttpRequest();

  let url = 'https://api.adviceslip.com/advice';

  request.open('GET', url, true);

  request.onload = function () {
    let data = JSON.parse(this.response);
  };

  request.onload = function () {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      $('#advice').text(data['slip'].advice);
    }
  };

  request.send();
}
