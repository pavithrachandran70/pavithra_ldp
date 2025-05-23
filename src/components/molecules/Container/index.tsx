
import {Heading,Text} from "../../atoms/Typograpghy";
import "./index.css";


const CashKickInfo = () => {
  return (
    
      <div  className="cashkick-info">
        <div className="heading">
      <Heading>Launch a new <br/>
      <span className="indent">Cash Kick</span></Heading>
      </div>
      <Text>
        <div className="para">
        You have upto $880,000.00 available <br/>
        <span className="head">for a new cash advance</span>
        </div>
      </Text>
    </div>
  );
};

export default CashKickInfo;