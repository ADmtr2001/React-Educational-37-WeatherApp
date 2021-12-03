import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Main from "./components/Main";
import Start from "./components/Start";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='main' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
