import Image from "next/image";
import { getDictionary } from "./dictionaries";

export default async function Home({params: {lang}}) {
  const dictionary =await getDictionary(lang);
  console.log(dictionary);
  return (
    <div>photo feeder {dictionary.views} hello</div>
  );
}
