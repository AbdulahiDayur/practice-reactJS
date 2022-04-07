function Modal(props) {
  // function cancelHandler() {
  //   props.cancelBtn();
  // }
  // function confirmHandler() {
  //   props.onConfirm();
  //   console.log("DELETE CONFIRMED");
  // }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.cancelBtn}>
        Cancel
      </button>
      <button className="btn" onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
