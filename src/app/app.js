import { BrowserRouter, Routes, Route, Link } from "next/router";

import Home from "./page";
import DashboardPage from "./view/page";

function App() {
    return (
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<DashboardPage />} />
  
      
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;