import './App.css'
import { Route, Routes } from "@solidjs/router";
import Overview from './pages/Overview';
import Day01 from './components/Day01';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" component={Overview}></Route>
        <Route path="/2023/day01" component={Day01}></Route>
      </Routes>
    </>

  )
}

export default App
