import PhotoDetails from "@/components/PhotoDetails";

const DynamicPhotoPage = async ({ params: { id, lang } }) => {
  return <PhotoDetails lang={lang} id={id} />;
};

export default DynamicPhotoPage;
