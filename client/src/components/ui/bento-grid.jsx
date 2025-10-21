import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        // Removed the fixed "18rem" height
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  showKnowMore = false,
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-start rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 shadow-lg  hover:shadow-2xl",
        "overflow-hidden !p-5",
        className
      )}
    >
      {/* subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 opacity-30 group-hover:opacity-50 transition duration-300"></div>

      {/* icon */}
      <div className="flex flex-row items-center gap-3">
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-800 text-purple-400 shadow-md group-hover:rotate-3 transition">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      {/* text */}
      <div className="relative z-10 !mt-4">
        {/* <h3 className="text-lg font-semibold text-white">{title}</h3> */}
        <p className="!mt-2 !text-sm !text-neutral-400 leading-relaxed">
          {description} <br />
          {showKnowMore && (
            <>
              <span className="">Know More</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};
