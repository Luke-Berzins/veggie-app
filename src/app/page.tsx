import Image from 'next/image';
import Interactive from '@/clientComponents/Interactive';

export default function Home() {
  return (
    <main className="flex flex-col items-center border-black-800 h-screen w-screen overflow-x-hidden">
      {/* Displaying the Image */}
      <Image
        src="/images/cow.png" // Path relative to the `public` folder
        alt="Cow"
        width={500} // Desired width in pixels
        height={500} // Desired height in pixels
      />
      <Interactive />
    </main>
  );
}