import { useState } from "react";

const getInitials = (name = "") => {
  const words = name.replace(/[().]/g, "").split(" ").filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

export const CompanyLogo = ({ name, src, className = "h-14 w-14" }) => {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(src) && !errored;

  return (
    <div
      className={`flex items-center justify-center rounded-xl overflow-hidden shrink-0 border border-border/60 ${
        showImage ? "bg-white" : "glass"
      } ${className}`}
    >
      {showImage ? (
        <img
          src={src}
          alt={`${name} logo`}
          className="h-full w-full object-contain p-1"
          onError={() => setErrored(true)}
        />
      ) : (
        <span className="font-mono text-[11px] font-semibold text-primary">
          {getInitials(name)}
        </span>
      )}
    </div>
  );
};
