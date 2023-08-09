import Navbar from "./Navbar";
import styles from '@/styles/Hero.module.css'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

function MainHero () {
  return (
    <div
      className="flex justify-center items-center w-full universalPadding"
    >
      <div
        className="flex flex-row justify-between items-start w-full bg-backgroundGrey border border-darkGrey rounded-xl"
      >
        <div
          className="w-full 2xl:w-1/2 p-[2rem] lg:p-[3rem] xl:p-[4rem] flex flex-col justify-center items-center 2xl:items-start gap-8 text-grey text-center 2xl:text-left bg-backgroundGrey rounded-xl"
        >
          <h1
            className='font-semibold text-transparent text-4xl md:text-5xl lg:text-7xl bg-clip-text bg-gradient-to-b from-gradientBlue to-gradientAqua'
          >
            Deliver high-impact features with Palak
          </h1>

          <p
            className="lg:text-lg w-full xl:w-3/4"
          >
            Hi, I'm Palak, a full-stack developer. Ready to work hard, enhance customer & developer experience at Leap and make history.
          </p>

          <div
            className="w-full flex flex-col lg:flex-row justify-center 2xl:justify-start items-center gap-4"
          >
            <button
              className={`${styles.heroButtons} bg-white text-black hover:bg-white/80`}
            >
              View Resume
            </button>

            <button
              className={`${styles.heroButtons} bg-transparent text-white hover:bg-white/10 border border-darkGrey`}
            >
              Learn More about Palak
            </button>
          </div>
        </div>

        <div
          className="hidden 2xl:flex justify-end items-end w-full lg:w-1/2 p-[2rem] lg:p-[3rem] xl:p-[4rem] bg-backgroundGrey text-grey rounded-lg"
        >
          <Tabs 
            defaultValue="JavaScript" 
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
      className="flex flex-col justify-start items-start w-full h-full grow bg-black"
    >
      <Navbar />
      <MainHero />
    </div>
  )
}