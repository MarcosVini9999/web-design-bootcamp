import "./PopUp.css";

export const PopUp = () => {
  const toggleModal = () => {
    const bodyClassList = document.body.classList;
    if (bodyClassList.contains("open")) {
      bodyClassList.remove("open");
      bodyClassList.add("closed");
    } else {
      bodyClassList.remove("closed");
      bodyClassList.add("open");
    }
  };

  return (
    <div className="popup-container">
      <button onClick={toggleModal} type="button" className="popup-button">
        Open Modal
      </button>
      <div className="modal-background" onClick={toggleModal}></div>
      <div className="modal">
        <h2>Modal Window</h2>
        <p>
          You have opened the modal, they are great for displaying critical informations or
          confirming actions!
        </p>
      </div>
    </div>
  );
};
