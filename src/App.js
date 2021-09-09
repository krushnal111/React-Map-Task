import './App.css';
import Display from './components/Display';
import Form from './components/Form';
const App = () => {
 const onSetData = (event)=>{
   console.log(event)
 }
  return (
    <div>
    <Form onSetData={onSetData}/>
    <div><Display/></div> 
    
    
    </div>
  );
}

export default App;
