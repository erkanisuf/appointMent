import React from "react";
import { CloseIcon, NewAppointmentIcon } from "../../utils/IconsStyled";
import { ModalBackground } from "./ModalStyles";
interface IModal {
  children: React.ReactNode;
  open: boolean;

  succsess: boolean;
  error: boolean;
  closeModal: any;
}
const Modal: React.FC<IModal> = ({
  children,
  open,
  error,
  succsess,
  closeModal,
}) => {
  return (
    <ModalBackground open={open} buttonOpen={error || succsess}>
      <div>
        {children}
        <button onClick={() => closeModal(false)}>
          {error && (
            <>
              <CloseIcon />
              <span>Try again</span>
            </>
          )}
          {succsess && (
            <>
              <NewAppointmentIcon />
              <span>New appointment?</span>
            </>
          )}
        </button>
      </div>
    </ModalBackground>
  );
};

export default Modal;
