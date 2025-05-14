import CashKickInfo from "../../molecules/Container";
import Button from "../../atoms/Button"
import "../../organisms/FullConatiner/index.css"



const CashKickModal = () => {
  return (
    <div className="cashkick-modal">
      <CashKickInfo />
      <Button className="but">New Cash Kick</Button>
    </div>
  );
};

export default CashKickModal;