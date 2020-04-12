import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

document.querySelector('.clear-button').addEventListener('click', function() {
  document.querySelector('#url').classList.remove('error');
  document.querySelector('.error-text').classList.add('hidden');
  document.getElementById('url').value = null;
  document.querySelector('#results').innerHTML = null;
});

document.querySelector('form input[type=submit]').addEventListener('click', (e)=> {
  handleSubmit(e);
});
