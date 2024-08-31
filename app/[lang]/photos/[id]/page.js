import PhotoDetails from "@/components/PhotoDetails";

const DynamicPhotoPage = async ({ params: { id, lang } }) => {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
  const photoDetails = await response.json();
  // console.log(photoDetails);

  return <PhotoDetails photoDetails={photoDetails} lang={lang} />;
};

export default DynamicPhotoPage;
