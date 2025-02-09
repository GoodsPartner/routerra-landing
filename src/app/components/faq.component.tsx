import faq from '@/assets/faq.svg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

export const Faq = () => {
    return (
        <div className='max-w-2xl px-4 lg:pb-16 py-8 lg:px-10 lg:max-w-8xl mx-auto '>
             <div className='flex gap-x-3 items-start lg:items-center'>
                <Image src={faq} alt="Steps" className='size-8 lg:size-[54px]'/>
                <h2 className='text-2xl font-bold text-slate-900 lg:text-[40px]'>Questions you may have</h2>
            </div>
            <div className='pt-10 pb-6 lg:pt-12 lg:pb-10'>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger> I have hundreds of stops! How can I quickly add them? </AccordionTrigger>
                    <AccordionContent>
                        You can simply paste a list of stops, or if you have a spreadsheet, upload it as-is and we’ll automatically extract the addresses to create the respective stops. You can also use AI prompts to combine relevant information and place it into each stop’s notes.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>I’m a gig delivery driver. How can I simplify adding stops into Routerra routes?</AccordionTrigger>
                    <AccordionContent>
                        Easy! Take a photo of your manifest or a screenshot of your app showing all the stops, then upload it. Routerra will automatically parse the addresses. Need certain details to appear in your stop notes? Use an AI prompt to tell Routerra which information to extract from the image and how to use it.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>I drive a large truck. How do I optimize my route to avoid highways and toll roads?</AccordionTrigger>
                    <AccordionContent>
                        No problem! In our settings, you can select the vehicle type that best fits your needs and opt to avoid highways, toll roads, or other route types—helping you steer clear of unwanted detours.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>How can I use the optimized route afterward?</AccordionTrigger>
                    <AccordionContent>
                        Once you’ve optimized your route, you can immediately use it with your preferred navigation system. Open the app on your phone, tablet, or laptop, and click the “Navigate” button next to any stop. You can also share the route with others or export the optimization results to a CSV file for further use.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </div>
    )
}
