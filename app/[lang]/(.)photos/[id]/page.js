import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

const InterceptingPhotoPage = async ({ params: { id, lang } }) => {

  return (
    <Modal>
      <PhotoDetails  lang={lang} id={id} />
    </Modal>
  );
};

export default InterceptingPhotoPage;
