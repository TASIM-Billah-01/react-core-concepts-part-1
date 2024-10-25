import './App.css'

function App() {
  

  return (
    <>
    
      <h1>react core concepts - part : 1</h1>
      <Myinfo></Myinfo>
      <Versityinfo></Versityinfo>
      <Shop name="Laptop" price="55K"></Shop>
      <Shop name="Phone" price="35K"></Shop>
      <Shop name="Watch" price="3K"></Shop>
    </>
  )
}

function Myinfo() {
  const name = "Tasim";
  const versity = "DIU"
  const skills = ["html, ", "tailwind css, ", " java-script"];
  return (
    <div className='myInfo'>
      <h2> My name is : {name} <br /> I study in {versity} <br /> The skills i have acquired over-time {skills} </h2>
    </div>
  )
}


function Versityinfo() {

  const style12 = {
    padding : "10px",
    margin: "15px",
    border: "2px solid red",
    borderRadius : "10px"
  }

  return (
    <div style={style12}>
      <h2>DEPT : CSE, EEE, BBA ,LAW</h2>
    </div>
  )
}

function Shop(props) {
  // console.log(props);
  
  return (
    <div>
      <h2>The shop has : {props.name} and its price {props.price} </h2>
    </div>
  )
}

export default App
