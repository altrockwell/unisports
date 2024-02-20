import NavBar from '@/components/navBar';
import Image from 'next/image';

function HomePage() {
  return (
    <div className=" wrapper">
      <h1 className="absolute top-20 z-[100] font-bold uppercase text-end hero-text">
        Meet New Summer Wave
      </h1>
      <div className="absolute max-h-[80vh] top-20 right-0 lg:right-[5vw] left-[20vw] bottom-14">
        <Image
          src="/pictures/people-running.jpg"
          alt="people running"
          fill={true}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div>
        <div className="absolute border-black border-t-2 w-[30vw] bottom-[7vh] left-[12vw]" />
        <div className="absolute border-black border-l-2  h-[73vh] bottom-[7vh] left-[12vw] " />
        <div className="triangle-right absolute left-[42vw] bottom-[7vh] translate-y-1/2 "></div>
      </div>
      <button
        className="border-black border-2 text-[28px] uppercase font-bold absolute bottom-[7vh] translate-y-1/2 right-[5vw] px-2"
        type="button"
      >
        Shop Now!
      </button>
    </div>
  );
}

export default HomePage;
