import NavBar from '@/components/navBar';
import Image from 'next/image';

function HomePage() {
  return (
    <div className=" ">
      <h1 className="absolute left-[5vw] top-20  z-10 font-bold uppercase text-end w-96 text-6xl">
        Meet New Summer Wave
      </h1>
      <div className="absolute max-h-[80vh] top-20 right-0 md:right-[5vw] left-[20vw] bottom-14">
        <Image
          src="/pictures/people-running.jpg"
          alt="people running"
          fill={true}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
}

export default HomePage;
