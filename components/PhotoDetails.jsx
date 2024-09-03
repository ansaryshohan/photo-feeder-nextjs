import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

const PhotoDetails = async ({ lang, id }) => {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
  const photoDetails = await response.json();
  const dictionary = await getDictionary(lang);
  // console.log(dictionary)
  return (
    <div className="container my-4 lg:my-8">
      <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
        <div className="col-span-12 lg:col-span-8 border rounded-xl">
          <Image
            className="max-w-full h-full max-h-[70vh] mx-auto"
            src={photoDetails.url}
            alt={photoDetails.title}
            height={700}
            width={700}
          />
        </div>

        <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
          <h2 className="text-lg lg:text-2xl font-bold mb-2">
            {photoDetails.title}
          </h2>
          <div className="text-xs lg:text-sm text-black/60 mb-6">
            {photoDetails.tags.map((tag) => `#${tag} `)}
          </div>

          <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
            <div className="flex justify-between">
              <span>{dictionary.views}</span>
              <span className="font-bold">10M</span>
            </div>

            <div className="flex justify-between">
              <span>{dictionary.share}</span>
              <span className="font-bold">10M</span>
            </div>

            <div className="flex justify-between">
              <span>{dictionary.uploadedOn}</span>
              <span className="font-bold">31 January 2024</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <Image
                  className="size-12 lg:size-14 rounded-full border"
                  src={photoDetails.author.avatar}
                  alt="avatar"
                  width={50}
                  height={50}
                />
                <div className="spacy-y-3">
                  <h6 className="lg:text-lg font-bold">
                    {photoDetails.author.name}
                  </h6>
                  <p className="text-black/60 text-xs lg:text-sm">
                    {photoDetails.author.followers} Followers
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                <Image
                  src="/follow.svg"
                  alt="follow icon"
                  className="w-5 h-5"
                  width={25}
                  height={25}
                />
                Follow
              </button>
            </div>

            <p className="text-xs lg:text-sm text-black/60">
              {photoDetails.author.bio}
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-stretch gap-3">
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image
                  src="/heart.svg"
                  alt="heart icon"
                  className="w-5 h-5"
                  width={25}
                  height={25}
                />
                100
              </button>
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image
                  src="/save.svg"
                  alt="save icon"
                  className="w-5 h-5"
                  width={25}
                  height={25}
                />
                Save
              </button>
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image
                  src="/share.svg"
                  alt="share icon"
                  className="w-5 h-5"
                  width={25}
                  height={25}
                />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetails;
