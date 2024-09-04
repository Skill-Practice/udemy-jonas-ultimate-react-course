import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpenModal((show) => !show)}>
        Add new cabin
      </Button>

      {isOpenModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
