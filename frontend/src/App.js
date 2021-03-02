import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import {gql, useQuery} from '@apollo/client'

const query = gql`
query {
  hello
 }
`
function App() {
  const {loading, data} = useQuery(query)
  const [datavalue, setDataValue] = useState('null')
  useEffect(() => {
    setDataValue(data)
  },[loading])


  return (
    <div className="App">
      {data ? <p>data</p> : <p>no data</p>}
    </div>
  );
}

export default App;
