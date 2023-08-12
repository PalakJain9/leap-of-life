import Navbar from "./Navbar";
import styles from '@/styles/Hero.module.css'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Link from "next/link";

function MainHero () {
  return (
    <div
      className={`mt-[6rem] flex justify-center items-center w-full universalPadding ${styles.gradientBackground} pt-[1.5rem]`}
    >
      <div
        className="flex flex-row justify-between items-start w-full bg-backgroundGrey/90 border border-darkGrey rounded-xl"
      >
        <div
          className="w-full 2xl:w-1/2 p-[2rem] lg:p-[3rem] xl:p-[4rem] flex flex-col justify-center items-center 2xl:items-start gap-8 text-grey text-center 2xl:text-left rounded-xl"
        >
          <h1
            className='font-semibold text-4xl md:text-5xl lg:text-6xl gradientText'
          >
            Deliver high-impact features with Palak
          </h1>

          <p
            className="w-full xl:w-3/4"
          >
            Hi, I&apos;m Palak, a full-stack developer. Ready to work hard, enhance customer & developer experience at Leap and make history.
          </p>

          <div
            className="w-full flex flex-col lg:flex-row justify-center 2xl:justify-start items-center gap-4"
          >
            <Link
              href="https://drive.google.com/file/d/1xud80slg703595S8h1Kwkp_NEbBxR4WI/view?usp=sharing"
              className={`${styles.heroButtons} bg-white text-black hover:bg-white/80`}
            >
              View Resume
            </Link>

            <Link
              href='https://heypalakjain.vercel.app/'
              className={`${styles.heroButtons} bg-transparent text-white hover:bg-white/10 border border-darkGrey`}
            >
              Learn More about Palak
            </Link>
          </div>
        </div>

        <div
          className="hidden 2xl:flex justify-end items-end w-full lg:w-1/2 p-[2rem] lg:p-[3rem] xl:p-[4rem] text-grey rounded-lg"
        >
          <Tabs 
            defaultValue="Python" 
            className="w-full h-full justify-start items-start flex flex-col gap-4"
          >
            <TabsList
              className="bg-backgroundGrey gap-4 border-b border-darkGrey rounded-none"
            >
              <TabsTrigger 
                value="JavaScript"
                className={styles.tabButton}
              >
                JavaScript
              </TabsTrigger>
              
              <TabsTrigger 
                value="Python"
                className={styles.tabButton}
              >
                Python
              </TabsTrigger>
            </TabsList>

            <TabsContent value="JavaScript"
              className="w-full"
            >
              <div
                className={styles.tabText}
              >
                npm i @leap-ai/palak
              </div>
            </TabsContent>

            <TabsContent value="Python"
              className="w-full"
            >
              <div
                className={styles.tabText}
              >
                <p>{`import palak`}</p>
                
                <p>{`url = "https://api.tryleap.ai/add.palak"`}</p>
                
                <p>{`payload = {"prompt": "Add Palak to Leap AI"}`}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

      </div>
    </div>
  )
}

export default function Hero () {
  return (
    <div
      className="relative flex flex-col justify-start items-start w-full h-full grow bg-black"
    >
      <Navbar />
      <MainHero />
    </div>
  )
}