import { Button } from "@/components/ui/button.tsx";
import list_tem from "@/assets/price-list-item.svg";

const data = {
  tittle: "Genuinely affordable solution",
  advantage: [
    "NO more Quality VS Price compromise",
    "NO hidden costs or progressive fee",
    "Wait list users got 80% off",
    "Month long full refund policy",
  ],
  currency: "$",
  plans: [
    {
      title: "Starter",
      oldPrice: 10,
      newPrice: 2,
      duration: "month",
      descreption: "80% discount for waitlist users",
      features: [
        "Delivery or pickup creation",
        "Auto-configuration based on point description",
        "Geo-grouping for tasks",
        "Address geocoding",
        "Client book",
        "Auto or Manual car usage modes",
        "Route balancing",
        "Exporting",
      ],
    },
    {
      title: "Business",
      oldPrice: 20,
      newPrice: 10,
      duration: "per vehicle/month",
      descreption: "80% discount for waitlist users",
      features: [
        "All Starter features",
        "Order types",
        "Zones",
        "Statistics",
        "AI Analysis",
        "Full enterprise support",
      ],
    },
  ],
};

export const Price = () => {
  return (
    <section className={'bg-purple-gradient m-0 p-0 py-16 sm:py-28'}>
      <div className={'container mx-auto flex flex-col '}>
        <h2 className={"section-tittle text-center sm:text-5xl"}>
          {data.tittle}
        </h2>
        <div className=" flex flex-col gap-2 items-center mb-20 sm:flex-row sm:flex-wrap sm:justify-center">
          {data.advantage.map((item) => {
            return (
              <div
                className="rounded-[56px] flex py-2 px-5 w-fit"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(57, 73, 171, 0.1) 0%, rgba(129, 69, 220, 0.1) 100%)",
                }}
              >
                <span className="font-medium text-center text-base text-[#3949ab] sm:text-[22px]">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
        <div
          className={"flex flex-col md:flex-row md:justify-between md:space-x-8"}
        >
          {data.plans.map((item) => {
            return (
              <div
                className="flex flex-col justify-between rounded-2xl p-4 mb-4 grow sm:flex-1"
                style={{
                  borderColor: "#d7daf2",
                  borderWidth: "1px",
                  backdropFilter: "blur(172px)",
                  boxShadow: "0 8px 10px 0 rgba(129, 69, 220, 0.08)",
                  background: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <div className="pb-6 border-b">
                  <p className={"font-medium text-[22px] mt-4 sm:text-[26px]"}>
                    {item.title}
                  </p>
                  <p className={"text-[42px] mt-4 sm:mt-6 sm:text-[48px]"}>
                    <span className="text-[#a1a7c7] line-through mr-2">
                      {item.oldPrice}
                      {data.currency}
                    </span>
                    <span className="font-medium mr-2">
                      {item.newPrice}
                      {data.currency}
                    </span>
                    <span className="text-sm sm:text-[22px]">
                      {item.duration}
                    </span>
                  </p>
                  <p className={"text-lg mt-4 sm:mt-6 sm:text-[22px]"}>
                    {item.descreption}
                  </p>
                </div>
                <div className="flex-auto py-6 mt-4 sm:mt-6">
                  <ul className="list-none space-y-3 text-base sm:text-[22px]">
                    {item.features.map((feature) => {
                      return (
                        <li className="flex items-start space-x-4 mb-11px">
                          <img src={list_tem} alt="" />
                          <p>{feature}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex flex-col">
                  <Button
                    className={
                      "bg-blue-600 text-white p-2  uppercase py-3 px-6 rounded-lg"
                    }
                    style={{
                      background:
                        "linear-gradient(90deg, #3949ab 0%, #8145dc 100%)",
                    }}
                  >
                    Join waitlist
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={"flex flex-col sm:flex-row sm:justify-between sm:space-x-8"}
        ></div>
      </div>
    </section>
  );
};
