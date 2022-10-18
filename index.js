import './index.css'
import img from './assets/achievements.png';

console.log('Hello World!')

const app = document.querySelector('#app')
const imgEl = document.createElement('img')
imgEl.classList.add('media')
imgEl.src = img

const h1 = document.createElement('h1')
h1.textContent = 'I love JavaScript'

app.append(imgEl, h1)
