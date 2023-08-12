import Achievement from '@/components/Achievement'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div
      className='flex flex-col justify-start items-start w-full h-full'
    >
      <Hero />
      <Achievement />
      <Footer />
    </div>
  )
}
