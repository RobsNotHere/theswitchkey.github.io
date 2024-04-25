import CheckCircle2 from "./assets/CheckCircle2";
export default function LoginFlowProjectOwner1({ className = "" }) {
  return (
    <div
      className={`font-inter relative inline-flex w-full flex-col items-end gap-y-1 bg-white pb-[522px] pl-[763px] pr-40 pt-36 tracking-[0px] ${className}`}
    >
      <div className="relative flex items-center justify-end px-28 text-right text-[32px] font-bold leading-[normal] text-black" >
        Choose a password
      </div>
      <div className="relative flex items-center justify-end px-40 text-right text-xl font-bold leading-[normal] text-neutral-500" >
        At least 8 characters
      </div>
      <div className="relative flex items-end justify-center pr-96 pt-9 text-center text-base font-normal leading-[normal] text-black" >
        <div className="flex flex-grow items-center justify-center">
          Enter Password*
        </div>
      </div>
      <div className="relative flex items-center rounded-xl border border-solid border-black py-3.5 pl-4 pr-80 text-left text-base font-normal leading-[normal] text-neutral-400" >
        <div className="flex flex-col items-center pb-px">
          <div className="flex items-center self-stretch">
            Enter your password
          </div>
        </div>
      </div>
      <div className="relative flex items-end justify-center pr-96 pt-7 text-center text-base font-normal leading-[normal] text-black" >
        <div className="flex flex-grow items-center justify-center">
          Confirm Password*
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-end pt-1 text-left text-base font-normal leading-[normal] text-neutral-400" >
        <div className="flex flex-grow items-center self-stretch rounded-xl border border-solid border-black py-3.5 pl-4 pr-80" >
          <div className="flex flex-col items-center pb-px">
            <div className="flex items-center self-stretch">
              Confirm your password
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-end pt-7 text-center text-xl font-normal leading-7 text-white" >
        <div className="flex items-center justify-center self-stretch rounded-xl bg-purple-500 px-56 py-2.5" >
          <div className="flex items-center justify-center">Continue</div>
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 flex w-[605px] flex-col items-start justify-end gap-y-20 bg-neutral-100 pb-20 pl-24 pr-64 pt-64 text-sm leading-[normal]" >
        <SwitchKeyLogo className="absolute left-28 top-28 h-20 w-32 flex-shrink-0" />
        <div className="relative flex items-end justify-center gap-x-3 text-left text-purple-500" >
          <div className="flex h-8 w-8 flex-shrink-0 flex-col items-center justify-center pb-px" >
            <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
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
        <div className="relative flex items-end justify-center gap-x-3 text-center text-purple-500" >
          <div className="flex h-8 w-8 flex-shrink-0 flex-col items-center justify-center pb-px" >
            <CheckCircle2 className="h-8 w-8 flex-shrink-0" />
          </div>
          <div className="flex flex-grow flex-col items-center justify-center gap-y-1 self-stretch" >
            <div className="flex items-center justify-center self-stretch font-bold" >
              Choose a password
            </div>
            <div className="flex items-center justify-center self-stretch font-normal" >
              At least 8 characters
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center pt-96 text-left font-normal text-neutral-500" >
          <div className="flex items-center self-stretch">
            ©SwitchLink 2024
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
