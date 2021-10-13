// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



// import React, {useState} from 'react'; 
// import'./App.css'; 
// const App =() =>{ const [result, 
// setResult] =useState(""); const handclick =(e) =>{ 
// setResult(result.concat(e.target.name)); 
// } 
// const clear= () =>{ setResult(""); 
// } 
// const backspace=() =>{ setResult(result.slice(0, 
// -1)); // Or -1 
// } 
// const calculate =()=>{ 
//  try { 
//  setResult(eval(result).toString()); 
//  } catch(err){ 
// setResult("Error") 
//  } 
// } 
// return ( 
//  <> 
//  <div className="container"> 
//  <form> 
//  <input type="text" value={result}/> 
//  </form> 
//  <div className="keypad"> 
// <button className="highlight" onClick={clear} id="clear"> Clear</button> 
// <button className="highlight" onClick={backspace} id="backspace">C</button> 
// <button className="highlight" name="/" onClick={handclick}>&divide;</button> <button 
// name="7" onClick={handclick}>7</button> 
// <button name="8"onClick={handclick}>8</button> 
// <button name="9"onClick={handclick}>9</button> 
// <button className="highlight" name="*" onClick={handclick}>&times;</button> 
// <button name="4" onClick={handclick}>4</button> 
// <button name="5"onClick={handclick}>5</button> 
// <button name="6" onClick={handclick}>6</button> 
// <button className="highlight" name="-"onClick={handclick}>&ndash;</button> 
// <button name="1"onClick={handclick}>1</button> 
// <button name="2"onClick={handclick}>2</button> 
// <button name="3"onClick={handclick}>3</button> 
// <button className="highlight" name="+"onClick={handclick}>+</button> 
// <button name="0"onClick={handclick}>0</button> 
// <button name="."onClick={handclick}>.</button> 
// <button className="highlight" name="="onClick={calculate} id="result">=</button> 
//  </div> 
// </div> 
//  </> 
 
// ); 
// } 
// export default App;

// import React, {Component} from 'react';

// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             newItem:"",
//             list:[]
//         }
//     }

//     updateInput(key,value){
//         //update react state
//         this.setState({
//             [key]:value
//         });
//     }
//     addItem(){
//         // create item with unique id
//         const newItem={
//             id:1+Math.random(),
//             value:this.state.newItem.slice()

//         };
//         // copy of curent list of items
//         const list=[...this.state.list];

//         //add new item to list
//         list.push(newItem);
//       // update state with new list and reset newItem input
//            this.setState({
//              list,
//          newItem:""
//         });
//     }
//     deleteItem(id){
//         // copy current list of items
//         const list=[...this.state.list];

//         //filter out item being deleted
//         const updatedList = list.filter(item=> item.id !==id);

//         this.setState({list:updatedList});

//     }
//     render(){
//         return (
//             <div className="App">
//             <div>
//                 Add an Item...
//                 <br/>
//                 <input type="text" placeholder="Type item here..."  value={this.state.newItem} 
//                 onChange={e => this.updateInput("newItem", e.target.value)}/>
//                 <button onClick={()=>this.addItem}>
//                     Add
//                 </button>
//               <br/>
//               <ul>
//                   {this.state.list.map(item =>{
//                       return(
//                      <li key={item.id}>
//                          {item.value}

//                          <button onClick={()=> this.deleteItem(item.id)}>
//                              X
//                          </button>
//                          </li>
//                       )
//                   })}
//               </ul>
//             </div>
//             </div>
//         );
//     }
// }
// export default App;


// function App(){
//     return(
//         <>
//         <div className="headerline">
//             <span className="a">StudyS</span>
//             <span className="b">Register</span>
//             <span className="c">Login</span>
//        </div>
//         <div>Hello World!</div>
//         <div>Amisha Prajapati</div>
//         <div>Founder & CEO StudyS</div>
//         <div>Co-founder Candid Connections</div>
//         <button>Register</button>
//         <div className="myself"></div>
//         </>
//     );
// }
// export default App;