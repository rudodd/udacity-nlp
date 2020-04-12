# Rustin's NLP Project

## What it does
This little app consists of a simple form that allows a URL to be submitted.  The submitted URL is then run though the Aylien text analysis API and the results are shown to the user.

## How it works
The app first uses regex to determine if the form field contains a URL.  If it does not, an error message is presented to the user. If it does contain a URL, it posts the URL to the server, where an async call is made to the Aylien API.  Upon completion of the API call, it saves the data off to the textAnalysis object and resolves. Once the Aylien API call has resolved, an async get call is made to the server to retieve the data that was saved off to the textAnalysis object.  Once this async function has resolved, the DOM is updated to show the results of the API query.

Additionally there is "Clear results" button that removes previous results, or errors, and resets the form.