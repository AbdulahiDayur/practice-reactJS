import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function deleteHandler() {
    setmodalIsOpen(true);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {modalIsOpen ? <Modal /> : false}
      {modalIsOpen ? <Backdrop /> : false}
    </div>
  );
}

export default Todo;