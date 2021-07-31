import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";

function App() {
  const [id,setID] = useLocalStorage()
  return (
    <>
    <h4 style={{marginRight:'5em', marginLeft:'5em', marginTop:'2em'}}> Welcome {id}</h4>
    <Login idSubmit={setID}></Login>
    </>
  )
}

export default App;
