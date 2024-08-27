import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="font-mont mb-40">
      <div>
        <div className="flex w-full flex-col">
          <div className=" divider divider-neutral text-3xl text-orange-300 font-bold">
            GlowCart
          </div>
          <h1 className="font-bold lg:text-6xl text-center mb-20">About Us</h1>
        </div>
      </div>
      <div className="lg:flex">
        <div>
          <Image
            src="/images/undraw_data_reports_706v.png"
            alt=""
            width={800}
            height={800}
            className=" p-2 rounded-md"
          />
        </div>
        <div>
          <h1 className="ml-10 lg:text-4xl mt-10 pb-5 uppercase font-bold">
            Company Background
          </h1>
          <p className="ml-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            aliquid veritatis id inventore laborum ipsum molestiae impedit
            suscipit commodi corrupti. Fuga.
          </p>
          <div className="lg:flex">
            <div>
              <Image
                src="/images/logoipsum-248.svg"
                alt=""
                width={200}
                height={200}
                className="bg-blue-900 mt-20 p-2 ml-10 md:ml-1 rounded-md"
              />
            </div>
            <div className="ml-10 md:ml-1">
              <p className="font-bold lg:text-4xl lg:mt-20 lg:pr-20 lg:pl-24">
                25+ Years Experienced Company
              </p>
              <p className="lg:ml-40 mr-5 lg:mr-10 mb-14 pt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                nulla ea esse omnis odio quibusdam numquam, quia repellendus
                quod quo iure porro corporis.
              </p>
              <div className=" flex">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox lg:ml-24"
                />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                  voluptatem!
                </p>
              </div>
              <div className=" flex mt-5 ">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox lg:ml-24"
                />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                  voluptatem!
                </p>
              </div>
              <div className=" flex mt-5 ">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox lg:ml-24"
                />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                  voluptatem!
                </p>
              </div>
              <button className="ml-10 lg:ml-72 py-5 uppercase mt-20 px-20 rounded-lg text-white bg-orange-500 hover:bg-orange-400 lg:mr-20">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
