import Modal from "@src/components/Modal";
import { LoginSignupForm } from "./LoginSignupForm";

export const AuthModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal title={"Authentication"} onClose={onClose}>
      <LoginSignupForm onAuthenticate={onClose} />
    </Modal>
  );
};
