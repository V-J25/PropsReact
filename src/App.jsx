import React from 'react'
import Realcard from './components/realcard.jsx'

const App = () => {
  const students = [
  { name: "Vansh", age: 20 },
  { name: "Rahul", age: 21 },
  { name: "Amit", age: 19 }
];
  return (
    <div className='full'>
 { students.map(function(ele){

return <Realcard user={ele.name} saal={ele.age}/>})}
    </div>
     
  )
}

export default App