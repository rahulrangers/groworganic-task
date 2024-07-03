import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Tables from "./Components/Tables";
const App=()=>{
return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/tables" element={<Tables/>}/>
  </Routes>
  </BrowserRouter>
)
}
export default App;