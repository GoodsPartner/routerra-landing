import { Button } from "@/components/ui/button";
import Image from "next/image";
import price from "@/assets/price.svg";
import check from "@assets/check.svg"
import Link from "next/link";

export const Price = () => {
    return (
      <div className="max-w-2xl px-4 pb-16 lg:pt-[120px] lg:px-10 lg:max-w-8xl mx-auto">
        <div className="flex gap-x-3 items-center lg:items-center gap-6">
          <Image src={price} alt="Price icon" className="size-[36px] lg:size-[54px]"/>
          <h2 className="text-2xl font-bold text-slate-900 lg:text-[40px]">
            Pricing made simple and flexible
          </h2>
        </div>
        <div className="flex flex-col gap-y-4 pt-10 pb-6 lg:flex-row lg:justify-between lg:gap-x-6 lg:pt-12 lg:pb-4">
          <div
            className="border border-slate-200 rounded-2xl lg:rounded-3xl lg:p-10 lg:pt-6 flex-1 h-[404px]"
            style={{ boxShadow: "0 2px 8px 4px rgba(100, 116, 139, 0.04)" }}
          >
            <div className="flex flex-col gap-24">
              <div>
                <div className="pt-3 pb-6 border-b">
                  <h3 className="text-2xl font-bold text-slate-900 leading-normal">
                    Basic
                  </h3>
                  <p className="text-xl text-slate-500 leading-normal">
                    For occasional route planning
                  </p>
                </div>
                <div className="px-5 pt-6">
                  <ul className="list-disc text-xl leading-[24px]">
                    <li>30 stops per route</li>
                    <li className="pt-3">10 optimizations per day</li>
                  </ul>
                </div>
              </div>
              <div className="w-full mx-auto">
                <Link href="https://app.routerra.io">
                  <Button className="w-full">Start using for free</Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="border border-slate-200 rounded-2xl lg:rounded-3xl lg:p-10 lg:pt-6 flex-1 h-[404px]"
            style={{ boxShadow: "0 2px 8px 4px rgba(100, 116, 139, 0.04)" }}
          >
            <div className="flex flex-col gap-7">
              <div>
                <div className="pt-3 pb-6 border-b">
                  <h3 className="text-2xl font-bold text-slate-900 leading-normal">
                    Extended
                  </h3>
                  <p className="text-xl text-slate-500 leading-normal">
                    For professional route planning
                  </p>
                </div>
                <div className="px-5 pt-6">
                  <ul className="list-disc text-xl leading-[24px]">
                    <li>Unlimited stops per route *</li>
                    <li className="pt-3">Unlimited optimizations per day</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Link className="w-full" href="https://app.routerra.io">
                  <Button className="w-full" variant="secondary">
                    $2 for 3-day access
                  </Button>
                </Link>
                <Link className="w-full" href="https://app.routerra.io">
                  <Button className="w-full">$6 / month subscription</Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="border border-slate-200 rounded-2xl lg:rounded-3xl lg:p-10 lg:pt-6 bg-slate-50 flex-1 h-[404px]"
            style={{ boxShadow: "0 2px 8px 4px rgba(100, 116, 139, 0.04)" }}
          >
            <div className="pt-3 pb-4">
              <h3 className="text-2xl font-bold text-slate-900 leading-normal">
                Each plan include
              </h3>
            </div>
          </div>
        </div>
        <div>
          <p className="text-slate-600 text-sm">
            * Non-U.S. users start with 80 stops per route, with the option to
            request a free increase by reaching out to us at info@routerra.io
          </p>
        </div>
      </div>
    );
}