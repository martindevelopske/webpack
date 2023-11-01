import axios from 'axios'
const generateJoke= ()=>{
    const config={
        headers: {
            Accept: 'application/json'
        }
    }
    axios.get('https://icanhazdadjoke.com', config).then(res=>{
        document.getElementById('joke').innerHTML=res.data.joke
    })
    //return "I don't trust stairs. They are always up to something. Like a roof you might say..."

}
export default  generateJoke;