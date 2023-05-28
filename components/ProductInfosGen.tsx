import { toast } from "react-hot-toast";

type ProductInfosGenProps = {
  generatedTitle: string;
  generatedShortDesc: string | null;
  generatedFullDesc: string | null;
  generatedCaringAdvice: string | null;
  color: string;
};

export const ProductInfosGen = (props: ProductInfosGenProps) => {
  const {
    generatedTitle,
    generatedShortDesc,
    generatedFullDesc,
    generatedCaringAdvice,
    color,
  } = props;

  let bg20;
  let bg50;
  let text;
  let border;

  switch (color) {
    case "primary":
      bg20 = "bg-primary-500/20";
      bg50 = "bg-primary-500/50";
      text = "text-primary-500";
      border = "border-primary-500";
      break;
    case "secondary":
      bg20 = "bg-secondary-500/20";
      bg50 = "bg-secondary-500/50";
      text = "text-secondary-500";
      border = "border-secondary-500";
      break;
    case "tertiary":
      bg20 = "bg-tertiary-500/20";
      bg50 = "bg-tertiary-500/50";
      text = "text-tertiary-500";
      border = "border-tertiary-500";
      break;

    default:
      bg20 = "bg-neutral-500/20";
      bg50 = "bg-neutral-500/50";
      text = "text-neutral-500";
      border = "border-neutral-500";
      break;
  }

  return (
    <div
      className={`flex flex-col group items-center justify-start max-w-xl shadow text-neutral-900 ${bg20} rounded-2xl duration-200 ease-in hover:shadow-xl w-1/3 hover:w-2/3 h-full`}
    >
      <div className="flex items-center justify-start w-full h-8 pl-4 space-x-2 bg-neutral-900/5 rounded-t-2xl">
        <span className={`w-3 h-3 rounded-full ${bg50}`}></span>
        <span className={`w-3 h-3 rounded-full ${bg50}`}></span>
        <span className={`w-3 h-3 rounded-full ${bg50}`}></span>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <p className={`w-full text-xl font-bold text-left uppercase ${text}`}>
          Title
        </p>
        <div
          className={`w-full p-4 font-mono leading-4 text-left transition duration-200 ease-in border-l-4 shadow-md rounded-r-xl bg-neutral-100 ${border} hover:bg-neutral-200 cursor-copy`}
        >
          <p
            onClick={() => {
              navigator.clipboard.writeText(generatedTitle);
              toast("Bio copied to clipboard", {
                icon: "✂️",
              });
            }}
          >
            {generatedTitle}
          </p>
        </div>
        <p
          className={`w-full mt-4 text-xl font-bold text-left uppercase ${text}`}
        >
          Short Description
        </p>
        <div
          className={`w-full p-4 line-clamp-6 group-hover:line-clamp-none  font-mono leading-4 text-left whitespace-pre-line transition border-l-4 shadow-md rounded-r-xl bg-neutral-100 ${border} hover:bg-neutral-200 cursor-copy`}
        >
          {generatedShortDesc && (
            <p
              onClick={() => {
                navigator.clipboard.writeText(generatedShortDesc);
                toast("Bio copied to clipboard", {
                  icon: "✂️",
                });
              }}
            >
              {generatedShortDesc}
            </p>
          )}
        </div>
        <p
          className={`w-full mt-4 text-xl font-bold text-left uppercase ${text}`}
        >
          Full Description
        </p>
        <div
          className={`w-full p-4 line-clamp-6 group-hover:line-clamp-none font-mono leading-4 text-left whitespace-pre-line transition border-l-4 shadow-md rounded-r-xl bg-neutral-100 ${border} hover:bg-neutral-200 cursor-copy`}
        >
          {generatedFullDesc && (
            <p
              onClick={() => {
                navigator.clipboard.writeText(generatedFullDesc);
                toast("Bio copied to clipboard", {
                  icon: "✂️",
                });
              }}
            >
              {generatedFullDesc}
            </p>
          )}
        </div>
        <p
          className={`w-full mt-4 text-xl font-bold text-left uppercase ${text}`}
        >
          Advices
        </p>
        <div
          className={`w-full p-4 line-clamp-6 group-hover:line-clamp-none  font-mono leading-4 text-left whitespace-pre-line transition border-l-4 shadow-md rounded-r-xl bg-neutral-100 ${border} hover:bg-neutral-200 cursor-copy`}
        >
          {generatedCaringAdvice && (
            <p
              onClick={() => {
                navigator.clipboard.writeText(generatedCaringAdvice);
                toast("Bio copied to clipboard", {
                  icon: "✂️",
                });
              }}
            >
              {generatedCaringAdvice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
