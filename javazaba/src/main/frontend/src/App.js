import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
	const [data, setData] = useState('');
	useEffect(()=>{
		axios.get('http://localhost:8081/api')
		.then(res=>{
			setData(res.data);
		})
		.catch(error => {
			console.log("error",error);
		});
	});
  return (
    <div>
      {data}
    </div>
  );
}

export default App;
