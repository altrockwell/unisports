import NavBar from '@/components/navBar';
import Image from 'next/image';

function HomePage() {
  return (
    <div className=" wrapper">
      <h1 className="absolute top-20 z-[3] font-bold uppercase text-end hero-text">
        Meet New Summer Wave
      </h1>
      <div className="absolute max-h-[80vh] top-20 right-0 lg:right-[5vw] left-[20vw] 2xl:left-[15vw] bottom-14">
        <Image
          src="/pictures/people-running.jpg"
          alt="people running"
          fill={true}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div>
        <div className="absolute border-black border-t-2 w-[30vw] md:w-[55vw] lg:w-[65vw] 2xl:w-[71vw] bottom-[7vh] lg:bottom-[5vh] 2xl:bottom-[8vh] left-[12vw] 2xl:left-[11vw]" />
        <div className="absolute border-black border-l-2  h-[73vh] lg:h-[65vh] 2xl:h-[70vh] bottom-[7vh] lg:bottom-[5vh] left-[12vw] 2xl:bottom-[8vh] 2xl:left-[11vw]" />
        <div className="triangle-right absolute left-[42vw] md:left-[67vw] lg:left-[77vw] 2xl:left-[82vw] bottom-[7vh] lg:bottom-[5vh] 2xl:bottom-[8vh] translate-y-1/2 "></div>
      </div>
      <button
        className="border-black border-2 text-[28px] 2xl:text-[40px] uppercase font-bold absolute bottom-[7vh] lg:bottom-[5vh] 2xl:bottom-[8vh] translate-y-1/2 right-[5vw] px-2"
        type="button"
      >
        Shop Now!
      </button>
    </div>
  );
}

export default HomePage;
