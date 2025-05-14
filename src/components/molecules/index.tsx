
import { useState } from "react";
import InputField from "../atoms/input/index";
import Button from "../atoms/Button/index";
import "../molecules/index.css"


interface LoginFieldsProps {
  onLogin: (email: string,password:string) => void;
}

const LoginFields: React.FC<LoginFieldsProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState(""); 
  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState(""); 
 
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      valid = false;
    } else {
      setEmailError("");
    }
 


  if (password.trim() === "") {
    setPasswordError("Password is required.");
    valid = false;
  } else if (password.length < 6) { 
    setPasswordError("Password must be at least 6 characters.");
    valid = false;
  } else {
    setPasswordError("");
  }


  if (valid) {
    onLogin(email,password);
  }
};


  return (
    <div className="login-fields">
      <div >
        

      <InputField
    
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value) }
         icon="email"
      />
      {emailError && <p className="error-text">{emailError}</p>}
       
    </div>

      <InputField
        type="password"  
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
           icon="password"
      />
      {passwordError && <p className="error-text">{passwordError}</p>}

      <Button label="Continue"  onClick={handleLogin} />
     
    </div>
  );
};

export default LoginFields;
