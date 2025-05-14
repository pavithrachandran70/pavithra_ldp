
import LoginFields from "../molecules/index";
import "../organisms/index.css";


const LoginForm: React.FC = () => {
  

  const handleLogin = (email: string,name:string) => {

    alert(`Email entered: ${email} name entered:${name}`);
    
  };

  return (
    <div className="login-form">
      <h2 className="login-title">Login to Seeder</h2>
      <h5>Enter Your mail id and password to login</h5>
      <LoginFields onLogin={handleLogin} />
    </div>
  );
};

export default LoginForm;
