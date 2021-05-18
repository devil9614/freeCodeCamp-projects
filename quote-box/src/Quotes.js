import React, {useState} from 'react'
import axios from "axios";

const Quotes = () => {
    const [quote,setQuote] = useState("");
    const [author,setAuthor] = useState("");
    
    async function update(){
        const options = {
        method: 'GET',
        url: "https://api.quotable.io/random",
      };
      
      await axios.request(options).then(function (response) {
          setQuote(response.data.content);
          setAuthor(response.data.author);
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
    }
      
  return (
    <div>
        <h2>{quote}</h2>
        <p>{author}</p>
    </div>
  )
}

export default Quotes
