import { Button } from "@/components/ui/button.tsx";
import whyUs from "@/assets/why-us-diagram.svg";
import info from "@/assets/info.svg";

const data = {
  title: "Why us",
  description: [
    "Routerra has extensive experience in building custom route optimisation solutions for enterprise level customers.",
    "Still small medium businesses lacking simple and stable yet affordable solution with comprehensive functionality to cover day-to-day needs for route optimization",
    "We see opportunity to expose our core engine with most useful functionality to address those needs.",
  ],
};

export const WhyUs = () => {
  return (
    <section className="flex flex-col my-8 sm:flex-row sm:justify-between sm:gap-10">
      <div className="sm:flex-1 sm:self-">
        <h2 className="section-tittle pb-6">{data.title}</h2>
        {data.description.map((item) => {
          return <p className="text-base pb-6">{item}</p>;
        })}
      </div>
      <div className="flex flex-col items-end  sm:self-end sm:flex-1">
        <img className="w-[85%] h-auto py-4" src={whyUs} alt="" />
        <div className="w-[90%]">
          <div className="flex justify-between">
            <h2 className="font-bold text-[8px]">
              Suggestions for improvement from AI
            </h2>
            <Button
              className={
                "bg-white text-[#1976d2] text-[6px] uppercase h-4 py-[2px] px-[5px] rounded-sm"
              }
              style={{
                background:
                  "linear-gradient(45deg, #fff4e9 0%, #fff 26.41%, #fff 64.14%, #fff 83.6%, #e3e8ff 100%);",
                border: "0.54px solid rgba(25, 118, 210, 0.5)",
              }}
            >
              All Suggestions
            </Button>
          </div>
          <div
            className="flex justify-between gap-1 px-3 py-1 mt-3 rounded-[3px]"
            style={{
              backdropFilter: "blur(3.2215609550476074px)",
              boxShadow: "0 0 2px 0 rgba(42, 15, 84, 0.16)",
              background: "rgba(255, 255, 255, 0.4)",
            }}
          >
            <img src={info} alt="" className="self-start" />
            <div className="flex-auto leading-loose">
              <p className="font-medium text-[8px]">FAN DOM cafe bar</p>
              <p className="text-[7px]">Coordinate update</p>
            </div>
            <a className="font-medium uppercase text-[8px]" href="#">
              Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
