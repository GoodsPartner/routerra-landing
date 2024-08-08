import info from '@/assets/info.png'

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
    //my-8 sm:flex-row sm:justify-between sm:gap-10
    <section className="bg-purple-gradient m-0 p-0 py-16 sm:py-28 ">
      <div className={'container mx-auto flex flex-col md:flex-row sm:justify-between sm:gap-10'}>
        <div className="sm:flex-1 sm:self-">
          <h2 className="section-tittle pb-6 text-3xl sm:text-5xl">{data.title}</h2>
          {data.description.map((item) => {
            return <p className="text-base md:text-xl pb-6">{item}</p>;
          })}
        </div>
        <div className="flex flex-col items-end  sm:self-end sm:flex-1">
            <div>
              <img src={info} alt="" className="self-start" />
            </div>
          </div>
        </div>
    </section>
  );
};
