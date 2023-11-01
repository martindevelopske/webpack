import './styles/main.scss'
import generateJoke from "./generateJoke";
import image from './assets/docker.png'
console.log("logging 1....")
const img=document.getElementById('laughImg')
img.src=image;
const jokeBtn=document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)
console.log(generateJoke())