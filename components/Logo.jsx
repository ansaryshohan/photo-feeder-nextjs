import Image from "next/image";

const Logo = () => {
  return (
    <a href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/lws_logo.png"
        alt="Lws"
        width={200}
        height={150}
      />
    </a>
  );
};

export default Logo;
