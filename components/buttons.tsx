"use client"
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { useRouter } from 'next/navigation';

export default function Buttons() {
  const router = useRouter();

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
      <HoverBorderGradient
        onClick={() => router.push('/chat')}
        containerClassName="rounded-full"
        as="button"
        className="bg-gray-300 px-6 py-3 text-sm font-medium text-black sm:text-base"
      >
        <span>Getting Started</span>
      </HoverBorderGradient>

      <HoverBorderGradient
        onClick={() => router.push('/how-it-works')}
        containerClassName="rounded-full"
        as="button"
        className="px-6 py-3 text-sm font-bold text-white sm:text-base"
      >
        <span>How it works</span>
      </HoverBorderGradient>
    </div>
  );
}
