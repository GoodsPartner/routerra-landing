import { Button } from "@/components/ui/button";
import Image from "next/image";
import price from "@/assets/price.svg";
import check from "@/assets/check.svg"
import Link from "next/link";

const pricePlanInfo = [
  {
    title: "Unlimited routes",
  },
  {
    title: "Stops reordering",
  },
  {
    title: "Optimization settings",
  },
  {
    title: "Route optimization",
  },
  {
    title: "Stops import: list, file or image",
  },
  {
    title: "Share route by link",
  },
  {
    title: "Export route as CSV file",
  },
];

export const Price = () => {
    return (
      <div className="max-w-2xl px-4 pb-4 lg:pb-10 pt-16 lg:pt-[120px] lg:px-10 lg:max-w-8xl mx-auto">
        <div className="flex gap-x-3 items-center lg:items-center gap-6">
          <Image src={price} alt="Price icon" className="size-[36px] lg:size-[54px]"/>
          <h2 className="text-2xl font-bold text-slate-900 lg:text-[40px]">
            Pricing made simple and flexible
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-10 pb-4 lg:gap-x-6 lg:pt-12">
          <div
            className="border border-slate-200 rounded-2xl p-6 lg:rounded-3xl lg:p-10 flex-1 h-auto"
            style={{ boxShadow: "0 2px 8px 4px rgba(100, 116, 139, 0.04)" }}
          >
            <div className="flex flex-col gap-20 md:gap-[104px] lg:gap-[128px]">
              <div>
                <div className="pb-6 border-b">
                  <h3 className="text-lg lg:text-2xl font-bold text-slate-900 leading-normal">
                    Basic
                  </h3>
                  <p className="text-sm lg:text-lg text-slate-500 leading-normal font-medium pt-1">
                    For occasional route planning
                  </p>
                </div>
                <div className="px-5 pt-6">
                  <ul className="list-disc text-base lg:text-xl leading-[24px]">
                    <li>30 stops per route</li>
                    <li className="pt-3">10 optimizations per day</li>
                  </ul>
                </div>
              </div>
              <div className="w-full mx-auto">
                <Link href="https://app.routerra.io">
                  <Button className="w-full rounded-lg">Start using for free</Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="border border-slate-200 rounded-2xl p-6 lg:rounded-3xl lg:p-10 flex-1 h-auto"
            style={{ boxShadow: "0 2px 8px 4px rgba(100, 116, 139, 0.04)" }}
          >
            <div className="flex flex-col gap-6 lg:gap-16">
              <div>
                <div className="pb-6 border-b">
                  <h3 className="text-lg lg:text-2xl font-bold text-slate-900 leading-normal">
                    Extended
                  </h3>
                  <p className="text-sm lg:text-lg text-slate-500 leading-normal font-medium pt-1">
                    For professional route planning
                  </p>
                </div>
                <div className="px-5 pt-6">
                  <ul className="list-disc text-base lg:text-xl leading-[24px]">
                    <li>Unlimited stops per route *</li>
                    <li className="pt-3">Unlimited optimizations per day</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Link className="w-full" href="https://app.routerra.io">
                  <Button className="w-full font-semibold rounded-lg" variant="secondary">
                    $2 for 3-day access
                  </Button>
                </Link>
                <Link className="w-full" href="https://app.routerra.io">
                  <Button className="w-full font-semibold rounded-lg">
                    $6 / month subscription
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="border border-slate-200 rounded-2xl p-6 lg:rounded-3xl lg:p-10 bg-slate-50 flex-1 h-auto"
            style={{ boxShadow: "0 2px 8px 4px rgba(100, 116, 139, 0.04)" }}>
              <h3 className="text-lg lg:text-2xl font-bold text-slate-900 leading-normal">
                Each plan include
              </h3>
              <div className="flex flex-col gap-4 pt-6">
                {pricePlanInfo.map((info, index) => (
                  <div key={index} className="flex gap-3">
                    <Image src={check} alt="Check icon" className="size-[24px]"/>
                    <h3 className="font-medium text-base lg:text-xl">
                      {info.title}
                    </h3>
                  </div>
                ))}
              </div>
          </div>
        </div>
        <div>
          <p className="text-slate-600 text-xs lg:text-sm">
            * Non-U.S. users start with 80 stops per route, with the option to
            request a free increase by reaching out to us at info@routerra.io
          </p>
        </div>
      </div>
    );
}