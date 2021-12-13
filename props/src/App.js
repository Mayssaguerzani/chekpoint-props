import './App.css';
import Profile from './Components/Profile/Profile';
import mayssa from './assets/mayssa.jpg';

function App() {
  return (
    <div className="App">
      
<Profile 
fullName="Mayssa"
bio="fullstack JS"
profession="web devloper"
>  <img src={mayssa}/>
 </Profile>


    </div>
  );
}

export default App;
