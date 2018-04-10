import axios from 'axios';


const articleSearch = (topic) => {
  const APIKEY = '42497c43a2aa4403adabec95a660340a';
  const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKEY}&q=${topic}`;

  axios.get(queryURL)
    .then((articles) => {
      console.log(articles)
    }).catch((err) => {
      console.log(err)
    })
}

export default articleSearch;
