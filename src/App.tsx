import LoginForm from "../src/components/organisms/index";
import "../src/App.css"
import Sidebar from "./component2/organisms/SideBar";
import CashKickModal from "./component3/organisms/FullConatiner";

const App: React.FC = () => {
  return (

    <div className="app-container">
      <LoginForm />
      <Sidebar/>
      <CashKickModal/>
      
      
</div>

   
  );
};

export default App;
