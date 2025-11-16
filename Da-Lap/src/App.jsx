import Leftbar from './components/leftbarCreate'
import Globalstyle from './components/globalstyle';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Mapdraw from './components/mapdraw';
import LeftbarStart from './components/leftbarStart';
import LeftbarMain from './components/leftbarMain';

function App() {

  return (
     <>
        <Routes>
          <Route path="/" element={<Leftbar />} />
          <Route path="/leftbarstart" element={<LeftbarStart/>}></Route>
          <Route path="/leftbarmain" element={<LeftbarMain/>}></Route>
        </Routes>
        <Globalstyle/>
        <Mapdraw />
     </>

      
      


      
  )
}

export default App
