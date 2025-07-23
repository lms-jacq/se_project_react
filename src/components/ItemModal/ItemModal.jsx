import "./ItemModal.css";
import CloseBtn from "../../assets/close_btn.svg";

function ItemModal({ activeModal, onClose, card, isOpen }) {
  return (
    // <div className={`modal ${isOpen && "modal_opened"}`}>
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      {/* // <div className={`modal ${activeModal === "preview" && "modal_opened"}`}> */}
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          close
        </button>
        <img src={card.link} alt="" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
