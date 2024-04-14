import Component1 from "/src/components/assets/Component1";
import Line59 from "/src/components/assets/Line59";
export default function LandingPage({ className = "" }) {
  return (
    <div className={`inline-flex w-full flex-row tracking-[0px] ${className}`}>
      <div className="flex h-full w-full flex-col items-start gap-y-2.5 overflow-clip bg-white pt-7" >
        <div className="font-inter flex items-end justify-center gap-x-60 self-stretch px-24 leading-[normal] text-black" >
          <Component1 className="h-14 w-24 flex-shrink-0" />
          <div className="flex flex-grow flex-wrap items-center justify-center gap-x-12 gap-y-2 self-stretch [min-width:90px] min-[1430px]:flex-nowrap" >
            <div className="flex items-center text-left text-sm font-normal leading-[normal]" >
              Project Design
            </div>
            <div className="flex items-center text-left text-sm font-normal leading-[normal]" >
              Work Opportunities
            </div>
            <div className="flex items-center text-left text-sm font-normal leading-[normal]" >
              Manufacturing and Inspection
            </div>
            <div className="flex items-center text-left text-sm font-normal leading-[normal]" >
              Logistics
            </div>
            <div className="flex items-center text-left text-sm font-normal leading-[normal]" >
              Licensing
            </div>
            <div className="flex items-center justify-center self-stretch rounded-3xl bg-yellow-400 px-7 py-4 text-center text-[15px] font-bold leading-[normal]" >
              <div className="flex flex-grow items-center justify-center">
                Start Here
              </div>
            </div>
          </div>
        </div>
        <div className="font-inter flex h-[650px] flex-shrink-0 flex-col items-center justify-end self-stretch pt-9 font-bold" >
          <div className="bg-pexels-photo-43430301 relative flex max-h-full max-w-full flex-grow flex-col items-center justify-center self-stretch bg-no-repeat [background-position:0px_-100.47px] [background-size:100%_156%]" >
            <div className="relative w-[1440px] flex-grow bg-black/20" />
            <div className="absolute left-24 top-40 flex h-52 w-[664px] flex-shrink-0 flex-col items-start justify-center" >
              <div className="text-left text-xl leading-7 text-white">
                Welcome to
              </div>
              <div className="text-left text-5xl leading-[normal] text-white">
                SwitchKey
              </div>
              <div className="mt-5 flex items-center justify-center rounded-3xl bg-yellow-400 px-7 py-4 text-center text-[15px] leading-[normal] text-black" >
                Start Here
              </div>
              <div className="flex items-center self-stretch pt-5 text-left text-xl leading-7 text-white" >
                Unlock Your Project's Potential: From Idea to Launch with SwitchKey
              </div>
            </div>
          </div>
        </div>
        <div className="font-inter flex h-96 flex-shrink-0 items-end self-stretch pr-24 pt-14 text-left leading-[normal]" >
          <div className="flex flex-grow items-center justify-end gap-x-32 self-stretch pl-24" >
            <div className="flex w-[505px] flex-shrink-0 flex-col items-center justify-center pb-2.5" >
              <div className="flex flex-grow flex-col items-start justify-center gap-y-2 self-stretch" >
                <div className="flex items-center text-[15px] font-bold leading-[normal] text-black" >
                  WHO WE ARE
                </div>
                <div className="flex items-center self-stretch text-[32px] font-bold leading-[normal] text-black" >
                  We help you empower your projects with SwitchKey
                </div>
                <div className="flex items-center self-stretch pt-10 text-[15px] font-normal leading-[normal] text-neutral-700" >
                  <span>
                    {
                      "SwitchKey is the ultimate platform for turning your visionary projects into reality. We connect project owners with the finest freelancers, provide state-of-the-art project management tools, and offer comprehensive solutions for distribution, procurement, and ad management. "
                    }
                    <br />
                    <br />
                    Whether you're starting a small project or managing a large-scale operation, SwitchKey streamlines the process from inception to completion, ensuring your projects succeed with efficiency and ease.
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-pexels-fauxels-31846131 w-[610px] flex-shrink-0 self-stretch bg-cover bg-center" />
          </div>
        </div>
        <div className="font-inter flex items-center justify-center self-stretch pt-16 text-center text-[32px] font-bold leading-[normal] text-black" >
          Services We Offer:
        </div>
        <div className="font-inter flex flex-col items-start justify-end self-stretch pr-24 pt-[598px] leading-[normal]" >
          <div className="flex flex-wrap items-start justify-end gap-x-32 gap-y-32 self-stretch pl-24 min-[1430px]:flex-nowrap" >
            <div className="flex w-[505px] flex-shrink-0 flex-col items-start justify-center gap-y-2 text-left" >
              <div className="flex items-center text-[15px] font-bold leading-[normal] text-black" >
                OUR MISSION
              </div>
              <div className="flex items-center self-stretch text-[32px] font-bold leading-[normal] text-black" >
                Innovation, Connection, Success
              </div>
              <div className="flex items-center self-stretch pt-6 text-[15px] font-normal leading-[normal] text-neutral-700" >
                <span>
                  {
                    "At SwitchKey, we pledge to empower every step of your project's lifecycle. From the spark of an idea to the final touches of execution, we are committed to fostering innovation, enabling seamless connections with skilled freelancers, and ensuring the success of your venture. "
                  }
                  <br />
                  <br />
                  Our platform is built on the cornerstone of trust, offering a comprehensive suite of tools designed for efficiency and excellence in project management, manufacturing, development, and distribution. Join SwitchKey, where every project is a journey toward remarkable achievement.
                </span>
              </div>
            </div>
            <div className="flex w-[610px] flex-shrink-0 items-center justify-center gap-x-5 self-stretch text-center text-[15px] leading-[normal] text-black" >
              <div className="flex w-72 flex-shrink-0 flex-col items-center justify-center gap-y-4 self-stretch rounded-3xl bg-white px-3 pb-5 pt-3 drop-shadow-lg" >
                <img
                  className="h-44 w-64 flex-shrink-0 rounded-3xl object-cover object-center"
                  src="/assets/image-4.png"
                 />
                <div className="flex items-center justify-center self-stretch pr-0.5 pt-7 font-bold" >
                  Embrace the SwitchKey Advantage
                </div>
                <div className="flex items-center justify-center self-stretch font-normal" >
                  Harness our network, tools, and support to take your projects from concept to completion.
                </div>
              </div>
              <div className="flex w-72 flex-shrink-0 flex-col items-center justify-center gap-y-3 self-stretch rounded-3xl bg-white pb-2 drop-shadow-lg" >
                <img
                  className="h-44 w-64 flex-shrink-0 rounded-3xl object-cover object-center"
                  src="/assets/image-5.png"
                 />
                <div className="mr-0 flex w-80 items-center justify-center pt-9 font-bold" >
                  Discover How We Elevate Projects
                </div>
                <div className="flex w-72 items-center justify-center font-normal" >
                  Tap into a world where your projects thrive, driven by our integration of resources and expertise.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-inter flex items-center self-stretch px-24 text-center text-[15px] font-bold leading-[normal] text-black" >
          <div className="flex items-center justify-center self-stretch rounded-3xl bg-yellow-400 py-5 pl-7 pr-8" >
            Learn more about SwitchKey
          </div>
        </div>
        <div className="font-open_sans flex items-end self-stretch px-24 pt-16 text-left text-2xl font-bold leading-[normal] text-blue-950" >
          Frequently Asked Questions
        </div>
        <div className="font-open_sans flex items-center self-stretch px-24 pt-9 text-left text-lg font-semibold leading-[normal] text-black" >
          Why does SwitchKey?
        </div>
        <div className="font-open_sans flex items-center self-stretch px-24 pt-9 text-left text-base font-normal leading-[normal] text-black" >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </div>
        <div className="flex h-14 flex-shrink-0 items-end justify-center self-stretch" >
          <div className="h-[3px] w-[1240px] flex-shrink-0 bg-neutral-300" />
        </div>
        <div className="font-open_sans flex items-center self-stretch px-24 pt-9 text-left text-lg font-semibold leading-[normal] text-black" >
          Is it possible to change my account email?
        </div>
        <div className="flex h-14 flex-shrink-0 items-end justify-center self-stretch" >
          <div className="h-[3px] w-[1240px] flex-shrink-0 bg-neutral-300" />
        </div>
        <div className="font-open_sans flex items-center self-stretch px-24 pt-9 text-left text-lg font-semibold leading-[normal] text-black" >
          Is it possible to change my account email?
        </div>
        <div className="flex h-14 flex-shrink-0 items-end justify-center self-stretch" >
          <div className="h-[3px] w-[1240px] flex-shrink-0 bg-neutral-300" />
        </div>
        <div className="font-open_sans mt-96 flex flex-col items-center justify-end gap-y-16 self-stretch bg-black px-20 pb-16 pt-7 text-left text-sm leading-normal text-white" >
          <div className="flex flex-wrap items-center justify-center gap-x-32 gap-y-8 self-stretch px-[503px] min-[1430px]:flex-nowrap" >
            <div className="flex h-16 w-16 flex-shrink-0 flex-col items-start justify-center gap-y-1.5" >
              <div className="self-stretch font-bold">Company</div>
              <div className="flex items-end self-stretch pt-[3.1px] font-normal" >
                About us
              </div>
              <div className="font-normal">Contact</div>
            </div>
            <div className="flex flex-col items-start justify-center gap-y-1.5 self-stretch" >
              <div className="font-bold">Support</div>
              <div className="flex items-end self-stretch pt-[3.1px] font-normal" >
                Help Centre
              </div>
              <div className="self-stretch font-normal">
                Privacy Policy
              </div>
            </div>
          </div>
          <Line59 className="h-px w-[1280px] flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
