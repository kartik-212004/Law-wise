import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Cover } from '@/components/ui/cover';
import BorderBeamButton from '@/components/magicui/border-beam-button';
import { BorderBeam } from '@/components/magicui/border-beam';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';

export default function Home() {
  return (
    <main className="space-y-20 px-4 py-12 sm:px-8 md:px-16 lg:px-24">
      <div className="space-y-10 text-center">
        <h1 className="mx-auto flex max-w-4xl flex-col text-4xl leading-tight font-extrabold tracking-tight text-balance text-white sm:text-5xl sm:leading-[1.2] md:text-6xl">
          <span>
            <Cover>Get Instant </Cover> Legal Help from
          </span>
          <span className="bg-gradient-to-r from-[#838dad] to-[#ffffff] bg-clip-text text-transparent">
            Local Laws
          </span>
          <span className="bg-gradient-to-r from-[#838dad] to-[#3a54ff] bg-clip-text text-transparent">
            Gradient Text Example
          </span>
        </h1>

        <h2 className="mx-auto max-w-2xl text-base font-medium text-gray-400 sm:text-lg md:text-xl">
          AI-Powered Law Search Based on Your Location and Incident
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-gray-300 px-6 py-3 text-sm font-medium text-black sm:text-base"
          >
            <span>Getting Started</span>
          </HoverBorderGradient>

          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className=" px-6 py-3 text-sm font-bold text-white sm:text-base"
          >
            <span>How it works</span>
          </HoverBorderGradient>
        </div>
      </div>

      {/* Uncomment if needed */}
      {/* <div className="flex justify-center px-4">
        <div className="relative">
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-blue-500/20 via-blue-600/30 to-blue-700/20 blur-[100px]"></div>
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-xl bg-blue-900 opacity-40 blur-md"></div>
            <div className="relative rounded-xl bg-[#0b002b]">
              <Image
                className="h-auto w-full max-w-4xl rounded-lg shadow-2xl"
                height={800}
                width={1200}
                alt="diagram"
                src={Diagram}
                priority
              />
              <BorderBeam duration={8} size={100} />
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative px-2 sm:px-0">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
      </div>
      <div className="flex flex-row justify-center">
        <BorderBeamButton>Process</BorderBeamButton>
      </div>
    </main>
  );
}
