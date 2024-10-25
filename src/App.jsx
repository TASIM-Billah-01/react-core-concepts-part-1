import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import Bookstore from './Bookstore';
function App() {

  const actors = ["manna", "sakib khan", "josim uddin", "siyam"]; 
  
  const singers = [
    {id: 1, name: "james", age:54 },
    {id: 2, name: "ayub bachchu", age:44 },
    {id: 3, name: "minar", age:38 },
    {id: 4, name: "pritom hasan", age:28 },
  ]

  const books = [
    {id: 1, name: "physics", price:135},
    {id: 2, name: "chemestry", price:155},
    {id: 3, name: "math", price:125},
    {id: 4, name: "biology", price:115},
   
  ]
  return (
    <>
    
      <h1>react core concepts - part : 1</h1>
      {/* <Myinfo></Myinfo>
      <Versityinfo></Versityinfo>
      <Shop name="Laptop" price="55K"></Shop>
      <Shop name="Phone" price="35K"></Shop>
      <Shop name="Watch" price="3K"></Shop>
      <Cgpa grade="A" cgpa="3.70"></Cgpa>
      <Cgpa grade="B" cgpa="3.40"></Cgpa>
      <Cgpa ></Cgpa> */}
      {/* <Todo pending="Module-37 " isDone={true}></Todo>
      <Todo pending="Module-38 " isDone={false}></Todo>
      <Todo pending="Module-39 " isDone={true}></Todo> */}
      {/* <Actor actor2={"Salman Shah"}></Actor> */}
      {/* {
        actors.map(actor1 =>  <Actor actor2={actor1}></Actor> )
      } */}
      {/* {
        // map.singers( singer => <Singer singer={singer}></Singer> )
        singers.map(singer => <Singer singer={singer}></Singer>)
      } */}
      <Bookstore books12={books}></Bookstore>
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

function Cgpa({grade = "A", cgpa = "3.72"}) {
  return (
    <div style={
      {
        padding : "10px",
        margin: "20px",
        border : "2px solid yellow",
        borderRadius : "10px"
      }
    }>
      <h2>My cgpa in different semester : Grade {grade} , Cgpa {cgpa} </h2>
    </div>
  )
}

export default App
