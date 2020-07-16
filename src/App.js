import React from 'react';
import './App.css';
import Jobs from './Jobs';

const apiurl='http://localhost:3001';

const mockjobs=[
  {title: 'sme1', company: 'accenture'},
  {title: 'techlead', company: 'google'}
]

async function fetchjobapi(updatecb){
    const res = await fetch(apiurl)
    const json= await res.json();
    json.length<1 ? updatecb(mockjobs):updatecb(json)
}

function App() {
  const [jobList,updatejobs]=React.useState([])
  React.useEffect(() => {fetchjobapi(updatejobs)},[])
  
  return (
    <div className="App">
     <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
