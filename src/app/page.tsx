import NavBar from '@/components/navBar';
import Image from 'next/image';

function HomePage() {
  return (
    <div className=" wrapper">
      <h1 className="absolute top-20  z-[100] font-bold uppercase text-end hero-text">
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
