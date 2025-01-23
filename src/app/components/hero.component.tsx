import { Button } from "@/components/ui/button"

import amazonFlex from "@/assets/companies/amazon-flex.svg"
import DHL from "@/assets/companies/dhl.svg"
import FedEx from "@/assets/companies/fedex.svg"
import UPS from "@/assets/companies/ups.svg"
import us_postal from "@/assets/companies/us-postal.svg"
import Image from "next/image"

import Link from "next/link"

export const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:gap-x-28 lg:max-w-8xl lg:mx-auto lg:pt-32 lg:px-10">
            <div className=" pt-10 px-4 lg:min-w-[412px] lg:px-0 ">
                <div className="flex flex-col  gap-y-2 lg:gap-y-6">
                    <h1 className="text-4xl font-bold text-slate-900 lg:text-5xl lg:leading-tight">Route planning<br /> made simple</h1>
                    <p className="text-xl font-medium leading-normal text-slate-500 lg:text-2xl">Add, optimize, drive...<br /> With a little help of AI</p>
                </div>
                <div className="flex mt-8 gap-x-4 lg:mt-10">
                    <Link href="https://app.routerra.com">
                        <Button className="flex-1 max-w-64">Start using for free</Button>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=EYALx8cRVuM">
                        <Button className="flex-1 max-w-64" variant="secondary">Watch demo</Button>
                    </Link>
                </div>
                <div className="mt-12 lg:mt-[72px]">
                    <h4 className="text-sm text-slate-400">Trusted by drives from</h4>
                    <div className="flex items-center gap-x-4 mt-4 lg:gap-x-8">
                        <Image src={FedEx} alt="FedEx" className="lg:w-[70px] lg:h-[21px]"/>
                        <Image src={us_postal} alt="US Postal" className="lg:w-[96px] lg:h-[16px]"/>
                        <Image src={UPS} alt="UPS" className="lg:w-[25px] lg:h-[31px]"/>
                        <Image src={amazonFlex} alt="Amazon Flex" className="lg:w-[57px] lg:h-[17px]"/>
                        <Image src={DHL} alt="DHL" className="lg:w-[82px] lg:h-[11px]"/>
                    </div>
                </div>
            </div>
            <div className="mt-12 lg:mt-0">
                <img src={'/og.png'} width={1280} height={630} alt="Hero Image" />
            </div>
        </div>
    )
}