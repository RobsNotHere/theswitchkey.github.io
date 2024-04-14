import Component1 from "/src/components/assets/Component1";
export default function SWITCHKEYLogo({ className = "" }) {
  return (
    <div
      className={`inline-flex w-full flex-col items-start bg-white px-8 py-10 ${className}`}
    >
      <div className="flex flex-col items-center pb-2.5">
        <Component1 className="h-16 w-28 flex-shrink-0" />
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
