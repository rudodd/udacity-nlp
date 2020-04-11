import { handleSubmit } from './js/formHandler';
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

//console.log(checkForName);

document.querySelector('form input[type=submit]').addEventListener('click', (e)=> {
  handleSubmit(e);
});

//alert("I EXIST")
console.log("CHANGE!!");
