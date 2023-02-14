import Image from "next/image"
import CollegeTabs from "@/components/aboutPage/CollegeTabs";

export default function AboutNITD({college, nitdActive, setNitdActive}) {
    return (
        <>
            <section id="about" className="justify-center flex flex-col">
                {/*<CollegeTabs nitdActive={nitdActive} setNitdActive={setNitdActive} />*/}
                <div className="flex flex-col md:flex-col mt-4 container">
                    <h3 className="text-3xl px-6 pt-4 font-bold text-center md:text-4xl md:text-left">
                        {college.heading1}
                    </h3>
                    <div className="bg-primary10 py-3 mt-10">
                        <p className="text-center px-6  mx-auto text-black lg:text-lg md:text-left">
                            {college.text1}
                        </p>
                    </div>
                    <div>
                        <div className="grid grid-cols-2">
                            <div><p className="text-center flex-1 px-6 text-black py-6 lg:text-lg md:text-left">
                                {college.text2}
                            </p>
                            </div>
                            <div className="flex-1">
                                <Image src={college.image1} className="object-cover"/>
                            </div>

                        </div>
                    </div>
                    <div className="bg-primary10">
                        <div className="grid grid-cols-2">
                            <div className="flex-1">
                                <Image src={college.image2} className="object-cover"/>
                            </div>
                            <div className="flex-1">
                                <p className="text-center  p-12 py-6 text-black lg:text-lg md:text-left">
                                    {college.text3}
                                </p></div>


                        </div>
                    </div>


                </div>

            </section>
            <section id="about">

                <div className="flex flex-col md:flex-col mt-4  container">
                    <h3 className="text-2xl px-6 font-bold text-center md:text-3xl md:text-left">
                        {college.heading2}
                    </h3>
                    <div className=" py-3 mb-4 mt-10">
                        <p className="text-center px-6  mx-auto text-black lg:text-lg md:text-left">
                            {college.text4}
                        </p>
                    </div>

                </div>
            </section>
        </>

    )
}