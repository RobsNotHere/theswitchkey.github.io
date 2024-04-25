import SwitchKeyLogo from "./assets/SwitchKeyLogo";
import CheckCircle from "./assets/CheckCircle";
import CheckCircle1 from "./assets/CheckCircle1";
import Line69 from "./assets/Line69";
import Line70 from "./assets/Line70";
import Linkedin from "./assets/Linkedin";
export default function LoginFlowProjectOwner({ className = "" }) {
  return (
    <div
      className={`font-inter inline-flex w-full flex-row items-center bg-white pr-40 tracking-[0px] ${className}`}
    >
      <div className="flex flex-grow flex-wrap items-center justify-center gap-x-40 gap-y-40 self-stretch min-[1430px]:flex-nowrap" >
        <div className="relative flex flex-col items-start justify-end gap-y-20 self-stretch bg-neutral-100 pb-20 pl-24 pr-64 pt-64 text-sm leading-[normal]" >
          <SwitchKeyLogo className="absolute left-28 top-28 h-20 w-32 flex-shrink-0" />
          <div className="relative flex items-end justify-center gap-x-3 text-left text-purple-500" >
            <div className="flex h-8 w-8 flex-shrink-0 flex-col items-center justify-center pb-px" >
              <CheckCircle className="h-8 w-8 flex-shrink-0" />
            </div>
            <div className="flex flex-grow flex-col items-start justify-center gap-y-1 self-stretch" >
              <div className="flex items-center font-bold">
                Your Details
              </div>
              <div className="flex items-center self-stretch font-normal">
                Provide your name and email
              </div>
            </div>
          </div>
          <div className="relative flex items-end gap-x-3 pr-14 text-center text-neutral-500" >
            <div className="flex h-8 w-8 flex-shrink-0 flex-col items-center justify-center pb-px" >
              <CheckCircle1 className="h-8 w-8 flex-shrink-0" />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1 self-stretch" >
              <div className="flex items-center justify-center self-stretch font-bold" >
                Choose a password
              </div>
              <div className="flex items-center justify-center self-stretch font-normal" >
                At least 8 characters
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-start pr-28 pt-96 text-left font-normal text-neutral-500" >
            <div className="flex items-center self-stretch">
              ©SwitchLink 2024
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-1 pb-12" >
          <div className="flex items-center justify-center self-stretch text-center text-[32px] font-bold leading-[normal] text-black" >
            Your Details
          </div>
          <div className="flex items-center justify-center self-stretch pr-0.5 text-center text-xl font-bold leading-[normal]" >
            <span>
              <span className="text-neutral-500">
                {"Already have an account? "}
              </span>
              <span className="text-indigo-700">Login</span>
            </span>
          </div>
          <div className="flex items-end self-stretch pt-9 text-left text-base font-normal leading-[normal] text-black" >
            <div className="flex flex-grow items-center">First name*</div>
          </div>
          <div className="flex flex-col items-center justify-end self-stretch pt-1 text-left text-base font-normal leading-[normal] text-neutral-400" >
            <div className="flex flex-grow items-center self-stretch rounded-xl border border-solid border-black px-4 py-3.5" >
              <div className="flex flex-col items-center pb-px">
                <div className="flex items-center self-stretch">
                  Enter your first name
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end self-stretch pt-7 text-left text-base font-normal leading-[normal] text-black" >
            <div className="flex flex-grow items-center">Last Name*</div>
          </div>
          <div className="flex flex-col items-center justify-end self-stretch pt-1 text-left text-base font-normal leading-[normal] text-neutral-400" >
            <div className="flex flex-grow items-center self-stretch rounded-xl border border-solid border-black px-4 py-3.5" >
              <div className="flex flex-col items-center pb-px">
                <div className="flex items-center self-stretch">
                  Enter your last name
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end self-stretch pt-7 text-left text-base font-normal leading-[normal] text-black" >
            <div className="flex flex-grow items-center">Email*</div>
          </div>
          <div className="flex flex-col items-center justify-end self-stretch pt-1 text-left text-base font-normal leading-[normal] text-neutral-400" >
            <div className="flex flex-grow items-center self-stretch rounded-xl border border-solid border-black px-4 py-3.5" >
              <div className="flex flex-col items-center pb-px">
                <div className="flex items-center self-stretch">
                  Enter your email
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end self-stretch pt-7 text-left text-base font-normal leading-[normal] text-black" >
            <div className="flex flex-grow items-center">Location*</div>
          </div>
          <div className="flex flex-col items-center justify-end self-stretch pt-1 text-left text-base font-normal leading-[normal] text-neutral-400" >
            <div className="flex flex-grow items-center self-stretch rounded-xl border border-solid border-black px-4 py-3.5" >
              <div className="flex flex-col items-center pb-px">
                <div className="flex items-center self-stretch">
                  Enter your location
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end self-stretch pl-px pt-7 text-center text-xl font-normal leading-7 text-white" >
            <div className="flex items-center justify-center self-stretch rounded-xl bg-purple-500 p-2.5" >
              <div className="flex items-center justify-center">
                Continue
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end self-stretch pt-3.5 text-left text-base font-normal leading-[normal] text-neutral-400" >
            <div className="flex items-center justify-center gap-x-2.5 self-stretch" >
              <Line69 className="h-px w-60 flex-shrink-0" />
              <div className="flex h-5 w-5 flex-shrink-0 items-center">
                Or
              </div>
              <Line70 className="h-px w-60 flex-shrink-0" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-end self-stretch pt-7 text-left text-base font-normal leading-[normal] text-black" >
            <div className="flex items-center justify-center gap-x-4 self-stretch border border-solid border-black p-3" >
              <Linkedin className="h-6 w-6 flex-shrink-0" />
              <div className="flex flex-col items-center pt-px">
                <div className="flex items-center self-stretch">
                  Sign up with LinkedIn
                </div>
              </div>
            </div>
          </div>
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
