export function handleSubmit(e) {
  e.preventDefault();

  console.log("::: Form Submitted :::");

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
        console.log(data);
      });
    } catch(error) {
      console.log("Error posting data to the server", error);
    }
  }

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    postData(formText);
}
