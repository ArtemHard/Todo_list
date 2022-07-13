import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { updateAllTodos } from "./components/redux/actionCreators/todosAC";

function App() {
  const dispatch = useDispatch()
  
  useEffect(()=> {
    dispatch(updateAllTodos())

  }, [])
  

  return (
    <div className="container py-5">
      <Header />
      <hr />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
