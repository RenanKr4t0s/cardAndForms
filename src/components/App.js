import { useState } from "react";

function App() {

  let [title, setTitle] = useState("Olá")
  let [tempTitle, setTempTitle] = useState()

  function clickButton(e){
    setTitle(tempTitle)
    e.preventDefault()

  }
  function handleChange(e){
    setTempTitle(e.target.value)
    console.log(tempTitle)
  }

  let [over, setOver] = useState(false)
  function handleMouseOver(){
    setOver(true)
  }
  function handleMouseOut(){
    setOver(false)
  }


  return (
    <div style={{height:"100vh"}} className="text-center p-5 d-flex justify-content-center bg-primary-subtle">
      <div style={{width:"20rem"}} className="card d-inline-block align-self-center p-4 bg-success-subtle">
          <img src="https://www.renandevramos.com.br/Assets/All%20blue.png" class="card-img-top my-2" alt="..." />
          <form class="card-body" onSubmit={clickButton}>
            <h5 class="card-title">{title}</h5>
            <div class="input-group my-3">
              <span class="input-group-text">😁</span>
              <input type="text" id="nome" class="form-control" onChange={handleChange} 
               placeholder='Escreva seu nome aqui'></input>
            </div>
            <button type="submit"
              className={over ? "btn btn-danger m-3" : "btn btn-primary m-3"}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >Submit</button>
          </form>
      </div>
    </div>
  );
}

export default App;
