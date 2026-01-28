import Link from "next/link";
import Image from "next/image";

const logo = () => {
  const isAnimating = true;

  return (
    <Link href="/">
      {/* <Image src='/logo.svg' width={54} height={54} priority alt="" /> */}
      {isAnimating ? (
        <span className="font-bold text-4xl text-gray-900 dark:text-white inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
            <li>Akshay.</li>
            <li>अक्षय.</li>
            <li>ಅಕ್ಷಯ್.</li>
            <li>ਅਕਸ਼ੈ.</li>
            <li>অক্ষয়.</li>
            <li aria-hidden="true">Akshay</li>
          </ul>
        </span>
      ) : (
        <div className="font-bold text-4xl text-gray-900 dark:text-white">
          Akshay.
        </div>
      )}
    </Link>
  );
};

export default logo;
