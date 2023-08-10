import Image from "next/image";
import styles from '@/styles/Achievement.module.css'
import Link from "next/link";

function Card (
  { children } : 
  { children: React.ReactNode }
) {
  return (
    <div
      className="w-full flex flex-col xl:flex-row-reverse gap-6 justify-center xl:gap-[6rem] pt-[5rem] items-center"
    >
      {children}
      {/* <Link
        href='/'
        className="bg-white text-black p-[1rem] rounded-lg hover:bg-white/80"
      >
        Learn More
      </Link> */}
    </div>
  )
}

export default function Achievement () {
  return (
    <div
      className='w-full universalPadding text-white flex flex-col justify-center items-center grow gap-6 pt-[7rem] font-semibold text-center'
    >
      <h1
        className="gradientText text-lg"
      >
        {`<FEATURES />`}
      </h1>

      <h2
        className="text-3xl lg:text-4xl xl:text-5xl w-full md:w-1/2"
      >
        Build the next generation of Leap AI apps with Palak
      </h2>

      <Card> 
        <div
          className={styles.imgContainer}
        >
          <Image 
            src='/bnlw.svg'
            alt='hi'
            width={100}
            height={100}
            className="w-full"
          />
        </div>

        <div
          className={styles.textContainer}
        >
          {/* heading */}
          <p
            className={styles.headings}
          >
            <span
              className={styles.highlightText}
            >
              Lead Full-Stack Engineer
            </span> 
            @ banasthali vidyapith
          </p>

          {/* description */}
          <p
            className={styles.description}
          >
            Enhanced student performance by 20% of 16k+ students amid confusion about recruitments by developing a web app providing job details, and resources for preparation. Built REST API with Node.js bringing about 20% reduction in response time between server and client applications.
          </p>
        </div>
      </Card>

      {/* card 2 */}
      <Card> 
        <div
          className={styles.imgContainer}
        >
          <Image 
            src='/tymely.svg'
            alt='hi'
            width={100}
            height={100}
            className="w-full"
          />
        </div>

        <div
          className={styles.textContainer}
        >
          {/* heading */}
          <p
            className={styles.headings}
          >
            <span
              className={styles.highlightText}
            >
              Frontend Engineer
            </span> 
            @tymely
          </p>

          {/* description */}
          <p
            className={styles.description}
          >
            Addressed the challenge of deadline management and work-related stress by building web app with reminders and AI-generated step-by-step roadmaps. Over 250+ users reported a 20% increase in productivity.
          </p>
        </div>
      </Card>

      {/* card 3 */}
      <Card> 
        <div
          className={styles.imgContainer}
        >
          <Image 
            src='/gdsc.svg'
            alt='hi'
            width={100}
            height={100}
            className="w-full"
          />
        </div>

        <div
          className={styles.textContainer}
        >
          {/* heading */}
          <p
            className={styles.headings}
          >
            <span
              className={styles.highlightText}
            >
              Google DSC:
            </span> 
            Tech & Content Head
          </p>

          {/* description */}
          <p
            className={styles.description}
          >
            Encouraged 2000+ women to proceed in tech and strengthened the technical community by 31% by leading a team of 14 women and delivering 5+ tutorials on Algorithms, 30+ high-quality content on various technologies.
          </p>
        </div>
      </Card>

      {/* card 4 */}
      <Card> 
        <div
          className={styles.imgContainer}
        >
          <Image 
            src='/recruitify.svg'
            alt='hi'
            width={100}
            height={100}
            className="w-full"
          />
        </div>

        <div
          className={styles.textContainer}
        >
          {/* heading */}
          <p
            className={styles.headings}
          >
            <span
              className={styles.highlightText}
            >
              Improving Hiring
            </span> 
            by building Recruitify
          </p>

          {/* description */}
          <p
            className={styles.description}
          >
            Reduced setup time of placement portals by 100%, benefiting 1M+ students. Now you can easily start you web app in seconds and share authentic information about recruitments.
          </p>
        </div>
      </Card>

      {/* card 5 */}
      <Card> 
        <div
          className={styles.imgContainer}
        >
          <Image 
            src='/figma.svg'
            alt='hi'
            width={100}
            height={100}
            className="w-full"
          />
        </div>

        <div
          className={styles.textContainer}
        >
          {/* heading */}
          <p
            className={styles.headings}
          >
            <span
              className={styles.highlightText}
            >
              Friends of Figma
            </span> 
            : Content Lead
          </p>

          {/* description */}
          <p
            className={styles.description}
          >
            Building and growing the first-ever Figma community in Punjab (India) with 100+ design enthusiasts.
          </p>
        </div>
      </Card>

      {/* card 6 */}
      <Card> 
        <div
          className={styles.imgContainer}
        >
          <Image 
            src='/bug.svg'
            alt='hi'
            width={100}
            height={100}
            className="w-full"
          />
        </div>

        <div
          className={styles.textContainer}
        >
          {/* heading */}
          <p
            className={styles.headings}
          >
            <span
              className={styles.highlightText}
            >
              Bug Reports
            </span> 
             to boost growth
          </p>

          {/* description */}
          <p
            className={styles.description}
          >
            Contributed significantly to a early stage startup's growth by improving the overall experience of 10,000+ users by reporting 2 bugs and providing 7+ feedback.
          </p>
        </div>
      </Card>
    </div>
  )
}