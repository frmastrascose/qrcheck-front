import { BrowserRouter } from 'react-router-dom';
import { Router } from "./router"
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
