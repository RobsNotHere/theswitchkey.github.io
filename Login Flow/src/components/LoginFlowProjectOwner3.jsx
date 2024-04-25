export default function LoginFlowProjectOwner3({ className = "" }) {
  return (
    <div
      className={`font-inter relative inline-flex w-full flex-col items-center gap-y-20 bg-white py-96 pl-[774px] pr-40 tracking-[0px] ${className}`}
    >
      <div className="relative flex items-center justify-end text-right text-6xl font-bold leading-[normal] text-black" >
        You are all set!
      </div>
      <div className="relative flex w-[501px] items-center justify-center rounded-xl bg-purple-500 p-2.5 text-center text-xl font-semibold leading-7 text-white" >
        <div className="flex w-48 flex-shrink-0 flex-col items-center justify-center pt-px" >
          <div className="flex flex-grow items-center justify-center self-stretch" >
            Go To Dashboard
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 flex w-[605px] flex-col items-start justify-end gap-y-20 bg-neutral-100 pb-20 pl-24 pr-64 pt-64 text-sm leading-[normal]" >
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
        <div className="relative flex items-end justify-center gap-x-3 text-center text-purple-500" >
          <div className="flex h-8 w-8 flex-shrink-0 flex-col items-center justify-center pb-px" >
            <CheckCircle className="h-8 w-8 flex-shrink-0" />
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
        <SwitchKeyLogo className="absolute left-28 top-28 h-20 w-32 flex-shrink-0" />
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
