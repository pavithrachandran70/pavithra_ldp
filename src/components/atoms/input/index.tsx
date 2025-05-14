
// import "../input/index.css";
// import { Eye, EyeOff } from "lucide-react";
// import {useState} from "react";

// interface InputFieldProps {
//   type?: string;
//   placeholder: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   icon?:"email"|"password";
// }

// const InputField: React.FC<InputFieldProps> = ({ type = "text", placeholder, value, onChange,icon}) => {

//   const [showPassword, setShowPassword] = useState(false);

//   const isPassword = type === "password";

//   return (
//     <div className="input-container">
     
//   {icon === "email" && (
//         <span className="left-icon">
//          {icon === "email" && (
//         <span className="left-icon">
//          <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M1.98 13H5.77C6.53 13 7.22 13.43 7.56 14.11L8.45 15.9C9 17 10 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

//         </span>
//       )}
//         </span>
//       )}  



  









   




//     <input
//       // type={type}
//       type={isPassword && showPassword ? "text" : type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
      
//       className="input-field"
//     />
//      {isPassword && (
//         <span
//           className="icon"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//         </span>
//       )}
//   </div>
//   );
// };

// export default InputField;




import "../input/index.css";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface InputFieldProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: "email" | "password";
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  // Render left-side icons
  const renderLeftIcon = () => {
    if (icon === "email") {
      return (
        <span className="left-icon">
          <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.98 13H5.77C6.53 13 7.22 13.43 7.56 14.11L8.45 15.9C9 17 10 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </span>
      );
    }

    if (icon === "password") {
      return (
        <span className="left-icon">
          <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="#727080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9965 16H16.0054" stroke="#727080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9955 16H12.0045" stroke="#727080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99451 16H8.00349" stroke="#727080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </span>
      );
    }

    return null;
  };

  return (
    <div className="input-container">
      {renderLeftIcon()}

      <input
        type={isPassword && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-field ${icon ? "with-left-icon" : ""}`}
      />

      {isPassword && (
        <span className="right-icon" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      )}
    </div>
  );
};

export default InputField;
