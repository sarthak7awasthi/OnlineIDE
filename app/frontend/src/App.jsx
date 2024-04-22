import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import CustomEditor from './codeIDE/CustomEditor';


function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomEditor />} />
         
        <Route path="/editor" element={<CustomEditor />} />
        


      

      </Routes>
    </div>
  );
}



export default App;
