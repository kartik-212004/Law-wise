import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Cover } from '@/components/ui/cover';
import BorderBeamButton from '@/components/magicui/border-beam-button';
import Card from '@/components/ui/card';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import Newsletter from '@/components/Newsletter';
import RadialGlow from '@/components/ui/RadialGlow';
import { AnimatedBeamDemo } from '@/components/ui/gemini';

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="container mx-auto max-w-6xl px-2 sm:px-8 md:px-16 lg:px-24">
        <main className="space-y-16 py-12">
          {/* Hero Section */}
          <section className="space-y-10 text-center">
            <h1 className="mx-auto flex max-w-4xl flex-col text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.2] md:text-6xl">
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
                className="px-6 py-3 text-sm font-bold text-white sm:text-base"
              >
                <span>How it works</span>
              </HoverBorderGradient>
            </div>
          </section>

          {/* Video Section */}
          <section className="relative px-2 sm:px-0">
            <HeroVideoDialog
              className="relative z-10 block dark:hidden"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
              thumbnailAlt="Hero Video"
            />
          </section>

          {/* Process Section */}
          <section className="relative space-y-6">
            <div className="relative z-10 flex justify-center">
              <BorderBeamButton>Process</BorderBeamButton>
            </div>

            <div className="relative z-10 text-center text-white">
              <h2 className="text-3xl leading-snug font-semibold">
                Three Simple Steps
                <br />
                to Get Legal Help
              </h2>
            </div>

            <div className="relative z-10">
              <Card />
            </div>

            <div className="flex justify-center">
              <AnimatedBeamDemo />
            </div>
            <div></div>
          </section>
          <Newsletter />
        </main>
      </div>

      <RadialGlow
        position="center-left"
        size="lg"
        color="blue"
        intensity={0.15}
        blur={140}
        halfOffScreen={true}
        offsetY={300}
      />
    </div>
  );
}
