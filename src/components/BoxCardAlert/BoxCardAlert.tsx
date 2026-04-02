import { useState } from "react";
import "./BoxCardAlert.scss";

interface BoxCardAlertProps {
  status: string;
  children: React.ReactNode;
}

const BoxCardAlert = ({ status, children }: BoxCardAlertProps) => {
  const [show, setShow] = useState(true);

  return (
    <div className={show ? '' : 'hidden'}>
      <div className={`box ${status}`}>
        {children}
        <button className="trigger" onClick={() => setShow(!show)}>Hide</button>
      </div>
    </div>
  );
};

export default BoxCardAlert;
