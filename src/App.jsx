import Card from "./card"
import Data from "./data.json"
import { v4 as uuidv4 } from 'uuid';

function App() {
  
console.log(uuidv4 ())
  

  return (
    <>
      <div className="bg-amber-400 text-center"><h1 className="px-[10px] py-[10px] text-3xl">Todo App</h1></div>
      
{Data.map((item)=> { 
  const {title,desc,dateTime} = item 
   return(

<Card key={uuidv4 ()} titleText={title} descText={desc} dateTime={dateTime}/>
)} )}     
    </>
  )
}

export default App
