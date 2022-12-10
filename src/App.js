import React from 'react'
import TableA from './components/TableA'
import './assets/styles/style.css'

const data = require('./utils/data/csvjson.json');

const App = () => {
  
  return <>
    <TableA mockData={data} />
  </>

}

export default App;