"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef();
  const router= useRouter()

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current.showModal();
    }
  }, []);

  const hideModal = () => {
    router.back()
  };

  return createPortal(
    <dialog
      onClose={hideModal}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100 relative"
      ref={modalRef}
    >
      <Image
        src={"/xmark.svg"}
        alt="close modal"
        width={20}
        height={20}
        className="absolute top-1 right-3"
        onClick={hideModal}
      />
      {children}
    </dialog>,
    document.getElementById("modal-div")
  );
};

export default Modal;
