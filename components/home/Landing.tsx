import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className="relative h-[calc(100vh-64px)] min-h-[400px] w-screen">
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        <Image
          src="/landing.jpeg"
          alt="Insert Photo Here"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <MaxWidth>
        <div className="flex flex-col pt-[30vh]">
          <div className=" flex text-6xl">NUS Fintech Society</div>
          <div className="mt-1 mb-3 text-2xl italic text-[#005792D9]">
            Ideate. Innovate. Inspire
          </div>
          <div className="mt-3 flex-row text-xl">
            <b>Passionate -</b>
            Driving R&D in emerging realms of Blockchain and Machine Learning.
          </div>
          <div className="flex-row text-xl">
            <b>Goal Oriented -</b>
            Leading more than 100 members with a strong grasp of their fields.
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Landing;
