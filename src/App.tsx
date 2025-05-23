
import "../src/App.css"
import LoginForm from "./components/organisms/LoginForm";
import Sidebar from "../src/components/organisms/SideBar";
import CashKickModal from "../src/components/organisms/FullConatiner"

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
