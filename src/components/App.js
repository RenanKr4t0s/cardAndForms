import { useState } from "react";

function App() {

  let [title, setTitle] = useState("Olá Visitante")

  function clickButton(){
    setTitle("Temos um click espertinho!!")
  }

  // minha solução para hover
  let changeColor = e => e.target.className = "btn btn-danger mt-1"
  function backColor (e) {
    e.target.className = "btn btn-primary mt-1"
  }

  // Solução do professor para hover
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
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <div class="input-group my-3">
              <span class="input-group-text" id="inputGroup-sizing-lg">😁</span>
              <input type="text" class="form-control" 
              aria-label="Sizing example input" placeholder='Escreva seu nome aqui' aria-describedby="inputGroup-sizing-lg"></input>
            </div>
            <button 
              onClick={clickButton}
              className="btn btn-primary mx-2 mt-1"
              onMouseOver={changeColor}
              onMouseOut={backColor}
            >Submit</button>
            <button 
              onClick={clickButton}
              className={over ? "btn btn-danger m-3" : "btn btn-secondary m-3"}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >Alisson Button </button>
          </div>
      </div>
    </div>
  );
}

export default App;
