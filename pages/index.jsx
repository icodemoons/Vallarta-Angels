import { useState } from "react";
import Image from "next/image";
export default function IndexPage() {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <>
      <div className="   bg-blue-600  w-full h-screen">
        <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
          <div className="h-full flex items-center">
            <div className="mr-10 flex items-center">
              <Image
                width={70}
                height={50}
                src={"/public/logo-transparent.png"}
              />
              <h3 className="text-base  font-bold font-serif text-black tracking-normal leading-tight ml-3 hidden lg:block">
                Vallarta Angels
              </h3>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 ">
          <div className="w-full rounded ">
            <div className="max-w-4xl mx-auto  lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
              <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 ">
                <img
                  src="/ph.png"
                  alt=""
                  className="w-full h-60 object-cover rounded-lg sm:h-52 col-span-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 pt-10 sm:w-full">
              <div>
                {" "}
                <p className="  text-white text-3xl">
                  If you need HELP IN ENGLISH, look for a blue hat with an Angel
                  on it!{" "}
                </p>
                <Image width={70} height={50} src={"/logo-transparent.png"} /> (
                blue hat image)
              </div>

              <div>
                {" "}
                <div className=" border text-black bg-white  grid gap-4 col-start-1 col-end-3 row-start-1grid gap-4 row-start-1 rounded-lg   ">
                  {" "}
                  <p className="p-5 rounded-lg">
                    OR Call locally 24 hours a day 322 192 9824
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-2 gap-4 bg-blue-600 pt-5 ">
              <div className="text-white rounded-lg  ">
                <p className="pt-2 pb-2 ">
                  We are a Jr. Volunteer organization, modeled after the great
                  organizations of the 50s and 60s like the Boy Scouts of
                  America.
                </p>
                <p className="pt-2 pb-2">
                  We are dedicated to making our little city a better place for
                  our visiting friends, and for our fellow Mexicans!
                </p>
                <p className="pt-2 pb-2">
                  Our volunteers are picked from the High Schools in Puerto
                  Vallarta where they study, so we can pair them with native
                  English speakers who could use a friend with no monetary
                  strings attached.
                </p>
                Our people will NEVER ask or ACCEPT any monetary donation or
                sell you anything. All donations must go through the QR codes
                you can find around town and are handled through stripe.com in
                the USA.
              </div>

              <div className=" border text-black bg-white  p-10 rounded-lg ">
                <p className="pt-2 pb-2">
                  You can prvide your tax information at the time of donation
                  for charitable giving. Every provider we vet and put on our
                  list has read and agreed to the code of conduct linked here.
                </p>
                <p className="pt-2 pb-2">
                  In Mexico, the concept of customer service is not what you
                  would expect at home. We try to bridge this gap by finding
                  providers who we know will help you in need, without soaking
                  or insulting you.{" "}
                </p>
                <p className="pt-2 pb-2">
                  Your safety and comfort are our responsibility while you are
                  our guest in Puerto Vallarta. So kick off those sandals and
                  pour a drink. The Vallarta Angels have your back! x
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
