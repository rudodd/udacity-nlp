export function updateDom(data) {

  if (data != null) {
    const hideOverlay = ()=> {
      document.querySelector('.overlay').classList.remove('show');
    }

    let polarity = data.polarity;
    let subjectivity = data.subjectivity;
    let polarityConfidence = Math.floor(data.polarity_confidence * 100) + '%';
    let subjectivityConfidence = Math.floor(data.subjectivity_confidence * 100) + '%';
    let analysisString =
    `<div class="results-container">
      <h2>Results of analysis:</h2>
      <table>
        <thead>
          <tr>
            <td>&nbsp;</td>
            <th>Result</th>
            <th>Confidence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Polarity</th>
            <td>${polarity}</td>
            <td>${polarityConfidence}</td>
          </tr>
          <tr>
            <th scope="row">Subjectivity</th>
            <td>${subjectivity}</td>
            <td>${subjectivityConfidence}</td>
          </tr>
        </tbody>
      </table>
    </div>`;
    document.querySelector('#results').innerHTML = analysisString;
    hideOverlay();
  } else {
    return false;
  }

}