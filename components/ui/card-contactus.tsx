"use client";

import { RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

const CardContacUs = () => {
  return (
    <div className="flex flex-col  p-8  bg-blu2 w-full lg:max-w-3xl rounded-xl shadow-xl text-gold">
      <p className="sm:text-[18px] text-[14px]  uppercase tracking-wider">
        Get in touch
      </p>
      <h3 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Contact.
      </h3>

      <form
        // ref={formRef}
        onSubmit={() => {}}
        className="mt-12 flex flex-col gap-8 "
      >
        <label className="flex flex-col ">
          <span className=" font-medium mb-4 ">Your name</span>
          <input
            type="text"
            name="name"
            // value={form.name}
            onChange={() => {}}
            placeholder="What's your name?"
            className="py-4  px-6
            placeholder:text-secondary
            rounded-lg outlined-none border-none font-medium"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(128, 128, 128, 0.2)",
            }}
          />
        </label>

        <label className="flex flex-col ">
          <span className="font-medium mb-4 ">Your Email</span>
          <input
            type="email"
            name="email"
            // value={form.email}
            onChange={() => {}}
            placeholder="What's your email?"
            className="py-4  px-6
            placeholder:text-secondary
            rounded-lg outlined-none border-none font-medium"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(128, 128, 128, 0.2)",
            }}
          />
        </label>

        <label className="flex flex-col ">
          <span className=" font-medium mb-4 ">Your Message</span>
          <textarea
            rows={7}
            name="message"
            // value={form.message}
            onChange={() => {}}
            placeholder="What do you want to say?"
            className="py-4  px-6
            placeholder:text-secondary
            rounded-lg outlined-none border-none font-medium"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(128, 128, 128, 0.2)",
            }}
          />
        </label>

        <div className=" flex justify-between ">
          <button
            type="submit"
            className="py-3 px-8 outline-none w-fit
           font-bold  rounded-xl"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(128, 128, 128, 0.2)",
            }}
          >
            {/* {loading ? "Sending..." : "Send"} */ "Send"}
          </button>

          <nav className="flex gap-3 px-2 items-center ">
            <a href="https://google.com">
              <RiInstagramLine size={40} />
            </a>
            <a href="https://www.google.com">
              <RiLinkedinLine size={40} />
            </a>
          </nav>
        </div>
      </form>
    </div>
  );
};

export default CardContacUs;
