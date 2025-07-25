import "./ModalWithForm.css";
import CloseBtn from "../../assets/close_btn.svg";

function ModalWithForm({
  isOpen,
  children,
  buttonText,
  title,
  activeModal,
  onClose,
}) {
  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={CloseBtn} alt="Close modal" className="modal__close-btn" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
