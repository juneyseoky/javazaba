import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';

function App() {
	const [data, setData] = useState('');
	useEffect(()=>{
		axios.get('/api')
		.then(res=>{
			setData(res.data);
		})
		.catch(error => {
			console.log("error",error);
		});
	},[]);
  return (
    <div>
    	<Header />
      	{data}
    </div>
  );
}

export default App;
