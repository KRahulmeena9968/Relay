import axios from 'axios';

const encodedParams = new URLSearchParams();
encodedParams.set('text', 'Have to choose to what that you will be doing!');

const options = {
  method: 'POST',
  url: 'https://twinword-sentiment-analysis.p.rapidapi.com/analyze/',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '03102a235emshe3976d5abb31bb5p18f00djsn24165ea6ae3a',
    'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}