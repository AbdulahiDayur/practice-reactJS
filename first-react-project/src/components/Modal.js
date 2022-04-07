import { useState } from "react";

function Modal() {
  const [modalIsClosed, setmodalIsClosed] = useState(false);

  function exitModal() {
    setmodalIsClosed(true);
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={exitModal}>
        Cancel
      </button>
      <button className="btn">Confirm</button>
    </div>
  );
}

export default Modal;
