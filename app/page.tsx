import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Cover } from '@/components/ui/cover';
import Image from 'next/image';
import Diagram from '../public/page.png';

export default function Home() {
  return (
    <main className="space-y-16">
      <div className="space-y-10">
        <h1 className="text-center font-extrabold text-5xl flex flex-col leading-16 tracking-wide">
          <span>
            <Cover>Get Instant </Cover> Legal Help from
          </span>
          <span className="bg-gradient-to-r to-[#ffffff] from-[#838dad] bg-clip-text text-transparent">
            Local Laws
          </span>
          <span className="bg-gradient-to-r from-[#838dad] to-[#3a54ff] bg-clip-text text-transparent">
            Gradient Text Example
          </span>
        </h1>

        <h2 className="text-center text-2xl text-gray-400">
          AI-Powered Law Search Based on Your Location and Incident
        </h2>

        <div className="space-x-4 flex flex-row items-center justify-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="text-black bg-gray-300 flex items-center"
          >
            <span>Getting Started</span>
          </HoverBorderGradient>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="text-white bg-radial from-[#050f55] from-40% to-[#09114d] font-bold flex items-center"
          >
            <span>How it works</span>
          </HoverBorderGradient>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center px-4">
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-blue-600/30 to-blue-700/20 rounded-3xl blur-[300px]"></div>

          <div className="relative">
            <Image
              className="w-full max-w-4xl h-auto rounded-2xl shadow-2xl"
              height={800}
              width={1200}
              alt="diagram"
              src={Diagram}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
