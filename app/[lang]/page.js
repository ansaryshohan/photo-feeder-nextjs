import PhotoList from "@/components/PhotoList";

export default async function HomePage() {
  // console.log(process.env.BASE_API_URL)
  const response = await fetch(`${process.env.BASE_API_URL}/photos`)
  const photos= await response.json();

  return (
    <PhotoList photos={photos}/>
  );
}
