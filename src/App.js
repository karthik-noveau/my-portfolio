import Navibar from "./components/navbar/Navibar";
import Home from "./components/pages/Home";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
