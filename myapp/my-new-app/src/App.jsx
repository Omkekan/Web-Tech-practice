import './App.css';
import FunctionCo from './component/FunctionCo';
import ClassComp from './component/ClassComp';
import FriendDetailsComp from './Task/FriendDetailsComp';
import MydetailsComp from './Task/MydetailsComp';
import GreetingComp from './component/greetingscomp';
// Ensure your imports match the exact file names
import Butinc from './Task/Butinc';
import Butdec from './Task/Butdec';
import Parentcom from './component/Parentcom';
import ChildCom from './component/Childcom';
import Condition from './component/Condition';  
import Myimgcom from './component/Myimgcom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Errorboundry from './component/Errorboundry';
import Usercomp from './component/Usercomp';
import UseStateHookComp from './hooks/UseStateHookCom';


function App() {
  return (
    <div className="App">
      <h1>Welcome You ALL!!</h1>
      <h4>It's Nice To Meet You!</h4>

      

      <Errorboundry>
        <Usercomp> Om </Usercomp>
      </Errorboundry>
      
      <FunctionCo Fname="Om" Lname="Kekan" className=""/>
      <ClassComp/>
      
      <FriendDetailsComp Fname="Darshan" Lname="Raut" contact={1234567890} Gender="Male" Address="Bane Compound" />
      
      <MydetailsComp Fname="Om" Lname="Kekan" Contact={123456789} Gender="Male" Address="Mumbai Central" />

      {/* FIXED: Components must start with an uppercase letter */}
      <Butinc variant="primary"/>
      <Butdec />

      <Parentcom />
      <ChildCom />
      <Condition />

      <Myimgcom />
      
      <UseStateHookComp/>

      <GreetingComp />
    </div>
  );
}

export default App;