import SwitchKeyLogo1 from "./assets/SwitchKeyLogo1";
import Linkedin1 from "./assets/Linkedin1";
export default function LoginFlowSignInPage({ className = "" }) {
  return (
    <div
      className={`inline-flex w-full flex-row items-center bg-white pr-48 tracking-[0px] ${className}`}
    >
      <div className="flex flex-grow flex-wrap items-center justify-center gap-x-48 gap-y-48 self-stretch min-[1430px]:flex-nowrap" >
        <div className="font-roboto_flex flex flex-col items-center gap-y-3.5 self-stretch bg-neutral-300 px-32 py-80 text-center text-2xl font-bold leading-[normal] text-neutral-500 opacity-40" >
          <SwitchKeyLogo1 className="h-40 w-64 flex-shrink-0" />
          <div className="flex items-center justify-center">
            Let It Click
          </div>
        </div>
        <div className="font-inter flex w-[521px] flex-shrink-0 flex-col items-center pb-5" >
          <div className="flex flex-grow flex-col items-start justify-center self-stretch" >
            <div className="flex items-center text-left text-4xl font-bold leading-[normal] text-black" >
              Sign in
            </div>
            <div className="flex items-center text-left text-base leading-7">
              <span>
                <span className="font-normal text-neutral-500">
                  New to SwitchKey?
                </span>
                <span className="whitespace-pre-wrap font-bold text-neutral-500" >
                  {" "}
                </span>
                <span className="font-bold text-blue-400">Join Now</span>
                <span className="font-bold text-indigo-700" />
              </span>
            </div>
            <div className="flex items-end self-stretch pt-14 text-left text-base font-normal leading-[normal] text-black" >
              <div className="flex flex-grow items-center">Username</div>
            </div>
            <div className="flex flex-col items-center justify-end self-stretch pr-px pt-2 text-left text-base font-normal leading-[normal] text-neutral-400" >
              <div className="flex flex-grow items-center justify-center self-stretch rounded-xl border border-solid border-black py-3.5 pl-4 pr-2" >
                <div className="flex flex-grow items-center">
                  Enter your username
                </div>
              </div>
            </div>
            <div className="flex items-end self-stretch pt-8 text-left text-base font-normal leading-[normal] text-black" >
              <div className="flex flex-grow items-center">Password</div>
            </div>
            <div className="flex flex-col items-center justify-end self-stretch pr-px pt-2 text-left text-base font-normal leading-[normal] text-neutral-400" >
              <div className="flex flex-grow items-center justify-center self-stretch rounded-xl border border-solid border-black py-3.5 pl-4 pr-2" >
                <div className="flex flex-grow items-center">
                  Enter your password
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-56 gap-y-3 self-stretch pl-3 pt-2.5 text-left text-base leading-[normal] min-[1430px]:flex-nowrap" >
              <div className="flex items-center justify-center gap-x-3 self-stretch font-normal text-neutral-500" >
                <div className="h-6 w-6 flex-shrink-0 rounded-sm border border-solid border-black" />
                <div className="flex flex-grow flex-col items-center self-stretch pt-0.5" >
                  <div className="flex items-center self-stretch">
                    Remember me
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center self-stretch font-bold text-blue-500" >
                <div className="flex items-center self-stretch">
                  Forgot Password
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end self-stretch px-px pt-12 text-center text-xl font-bold leading-7 text-white" >
              <div className="flex items-center justify-center self-stretch rounded-xl bg-neutral-300 py-2.5 pl-3 pr-2.5" >
                Sign in
              </div>
            </div>
            <div className="flex flex-col items-center justify-end self-stretch pr-px pt-5 text-left text-base font-normal leading-[normal] text-neutral-400" >
              <div className="flex items-center justify-center gap-x-2.5 self-stretch" >
                <Line69 className="h-px w-60 flex-shrink-0" />
                <div className="flex h-5 w-5 flex-shrink-0 items-center">
                  Or
                </div>
                <Line70 className="h-px w-60 flex-shrink-0" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-end self-stretch pr-px pt-8 text-right text-base font-normal leading-[normal] text-black" >
              <div className="flex items-center justify-center self-stretch border border-solid border-black py-3 pl-3 pr-3.5" >
                <Linkedin1 className="z-[2] h-6 w-6 flex-shrink-0" />
                <div className="z-[1] flex w-36 flex-shrink-0 flex-col items-end justify-end" >
                  <div className="mr-0 flex flex-grow items-center justify-end self-stretch" >
                    Login with LinkedIn
                  </div>
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
