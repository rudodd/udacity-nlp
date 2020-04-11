import { updateDom } from "./updateDom";

export function handleSubmit(e) {
  e.preventDefault();

  // URL validation solution from StackOverflow - https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url/49849482
  function isUrl(string) {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(string);
  }

  // Get all entry data from the server
  const getData = async ()=> {
    console.log('getting');
    const request = await fetch('/get-data');
    try {
      let analysis = await request.json();
      return analysis;
    } catch(error) {
      console.log('Error retrieving data from server', error);
    }
  }

  // Post current data to the server for the API call
  const postData = async (text)=> {
    const response = await fetch('/post-data', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({text}),
    });
    try {
      getData()
      .then(function(data){
        updateDom(data);
      });
    } catch(error) {
      console.log("Error posting data to the server", error);
    }
  }

  const showError = ()=> {
    document.querySelector('#url').classList.add('error');
    document.querySelector('.error-text').classList.remove('hidden');
  }

  const hideError = ()=> {
    document.querySelector('#url').classList.remove('error');
    document.querySelector('.error-text').classList.add('hidden');
  }

  // check what text was put into the form field
  let formUrl = document.getElementById('url').value ? document.getElementById('url').value : 0;
  if (isUrl(formUrl)) {
    hideError();
    postData(formUrl);
  } else {
    showError();
  }

}
