import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/Footer.module.css'

function Contact () {
  return (
    <div
      id='contact'
      className="flex flex-col lg:flex-row justify-start items-start gap-[1.5rem] text-white universalPadding w-full font-medium pb-[4rem]"
    >
      <div
        className="md:pl-[1.5rem] lg:pl-0 flex flex-col justify-start items-start gap-4"
      >
        <Link
          href='/'
          className="font-semibold text-2xl lg:text-4xl"
        >
          Leap AI x Palak
        </Link>

        <p
          className="text-grey w-full md:w-1/2 text-sm"
        >
          {`This website is inspired by tryleap.ai. This website application's sole purpose is to act as a cover letter for applicant Palak Jain for the Full-Stack Founding Engineer Role (Remote).`}
        </p>
        
      </div>

      <div
        className="md:pl-[1.5rem] lg:pl-0 flex flex-row justify-start items-start gap-[1.5rem] lg:gap-[3rem]"
      >
        <div
          className={styles.linksContainer}
        >
          <h1
            className="text-white"
          >
            Resources
          </h1>

          <Link
            href='https://docs.google.com/document/d/1kmWH9yf3Rbvol4Zo1tTjxVwY-sTmkbp4leaMOJVRcdc/edit?usp=sharing'
            className={styles.links}
          >
            Leap AI Feedback 
          </Link>

          <Link
            href='https://palakjain.hashnode.dev/'
            className={styles.links}
          >
            Blog
          </Link>

          <Link
            href='https://heypalakjain.vercel.app/'
            className={styles.links}
          >
            Portfolio
          </Link>
        </div>

        <div
          className={styles.linksContainer}
        >
          <h1
            className="text-white"
          >
            Contact
          </h1>

          <Link
            href='mailto:palakb188@gmail.com'
            className={styles.links}
          >
            Email
          </Link>

          <Link
            href='https://www.linkedin.com/in/palakjain9'
            className={styles.links}
          >
            LinkedIn
          </Link>

          <Link
            href='https://github.com/PalakJain9'
            className={styles.links}
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Footer () {
  return (
    <div
      className="flex flex-col justify-center items-center w-full gap-[3rem] md:gap-[5rem]"
    >
      <div
        className="flex justify-center items-center w-full universalPadding"
      >

        <div
          className="flex justify-center items-center w-full pt-[5rem] md:px-[1.5rem] lg:px-0"
        >
          <div
            className="relative flex justify-center items-center w-full py-[3.5rem] md:py-[5rem] lg:py-[10rem] rounded-3xl bg-black border border-backgroundGrey overflow-hidden drop-shadow-[0px_0px_45px_rgba(63,78,84,0.25)]"
          >
            <Image 
              src="/blueGrid.svg"
              alt="footer"
              width={100}
              height={100}
              className="w-2/3 absolute top-0 left-0 object-contain"
            />

            <div
              className="flex flex-col gap-[5rem] justify-center items-center w-full md:w-2/3 h-full"
            >
              <p
                className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center gradientText"
              >
                Our Leap AI. Magic of Palak. Boosts Growth.
              </p>

              <div
                className="z-10 flex flex-col lg:flex-row gap-4 justify-center items-center w-full h-full font-semibold"
              >
                <Link
                  href='mailto:palakb188@gmail.com'
                  className="w-full md:w-1/2 lg:w-1/3 bg-white p-[1rem] rounded-lg hover:bg-white/80 flex justify-center items-center lg:text-lg"
                >
                  Hire Palak
                </Link>

                <Link
                  href="https://drive.google.com/file/d/1xud80slg703595S8h1Kwkp_NEbBxR4WI/view?usp=sharing"
                  className="w-full md:w-1/2 lg:w-1/3 bg-darkGrey p-[1rem] text-white rounded-lg hover:bg-backgroundGrey flex justify-center items-center lg:text-lg"
                >
                  View Resume
                </Link>
              </div>
            </div>

            <Image 
              src="/greenGrid.svg"
              alt="footer"
              width={100}
              height={100}
              className="w-2/3 absolute bottom-0 right-0 object-contain"
            />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}