import Image from "next/image";
import Link from "next/link";

function Contact () {
  return (
    <div
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
          className="flex flex-col justify-start items-start gap-3 text-darkBlue lg:text-lg"
        >
          <h1
            className="text-white"
          >
            Resources
          </h1>

          <Link
            href='/'
            className=""
          >
            Leap AI Feedback 
          </Link>

          <Link
            href='/'
            className=""
          >
            Blog
          </Link>

          <Link
            href='/'
            className=""
          >
            Portfolio
          </Link>
        </div>

        <div
          className="flex flex-col justify-start items-start gap-3 text-darkBlue lg:text-lg"
        >
          <h1
            className="text-white"
          >
            Contact
          </h1>

          <Link
            href='/'
            className=""
          >
            Email
          </Link>

          <Link
            href='/'
            className=""
          >
            LinkedIn
          </Link>

          <Link
            href='/'
            className=""
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
      className="flex flex-col justify-center items-center w-full gap-[5rem]"
    >
      <div
        className="flex justify-center items-center w-full universalPadding"
      >

        <div
          className="flex justify-center items-center w-full pt-[5rem] md:px-[1.5rem] lg:px-0"
        >
          <div
            className="relative flex justify-center items-center w-full py-[4rem] md:py-[7rem] lg:py-[15rem] rounded-3xl bg-black border border-backgroundGrey overflow-hidden drop-shadow-[0px_0px_45px_rgba(63,78,84,0.25)]"
          >
            <Image 
              src="/blueGrid.svg"
              alt="footer"
              width={100}
              height={100}
              className="w-2/3 absolute top-0 left-0"
            />

            <div
              className="flex flex-col gap-8 justify-center items-center w-full md:w-2/3 h-full"
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
                  href="/"
                  className="w-full md:w-1/2 lg:w-1/3 bg-white p-[1rem] rounded-lg hover:bg-white/80 flex justify-center items-center lg:text-lg"
                >
                  Hire Palak
                </Link>

                <Link
                  href="/"
                  className="w-full md:w-1/2 lg:w-1/3 bg-backgroundGrey p-[1rem] text-white rounded-lg hover:bg-white/20 flex justify-center items-center lg:text-lg"
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
              className="w-2/3 absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}