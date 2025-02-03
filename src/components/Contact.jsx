import React from "react";
import  NeonGradientCard  from "./NeonGradientCard";

const Contact = ({ setIsHovered, setBg }) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "54dd328d-689a-4e46-b3b0-244f61c2ac86");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="pt-32 text-gray-300 flex items-center justify-evenly w-full h-screen"
    >
      <div className="w-[450px]">
        <h1
          className="text-4xl font-semibold selection:normal-case"
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("white");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
        >
          Contact
        </h1>
        <p
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("white");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
          className="text-5xl text-neutral-600 mt-5 custom-font selection:normal-case"
        >
          Let’s create something amazing together! Drop me a message.
        </p>
      </div>
      {/* <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"> */}
      <div className="w-96 rounded-[10px] p-4 !pt-20 sm:p-6 selection:normal-case">
        <NeonGradientCard>
          <form className="form" onSubmit={onSubmit}>
            <div className="mt-5">
              <label
                className="block text-sm font-medium dark:text-gray-300 text-gray-700"
                htmlFor="confirm-email"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:bg-transparent rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-violet-600 focus:border-violet-500 sm:text-sm"
                  required
                  type="text"
                  name="name"
                  placeholder="i.e., Randeep Singh"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                className="block text-sm font-medium dark:text-gray-300 text-gray-700"
                htmlFor="confirm-email"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:bg-transparent rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-violet-600 focus:border-violet-500 sm:text-sm"
                  required
                  type="email"
                  name="email"
                  placeholder="i.e., randeep@gmail.com"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                className="block text-sm font-medium dark:text-gray-300 text-gray-700"
                htmlFor="confirm-email"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:bg-transparent rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-violet-600 focus:border-violet-500 sm:text-sm"
                  required
                  type="text"
                  name="message"
                  placeholder="i.e., Hello, I want to discuss about..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>

            {result && (
              <p className="mt-4 text-center text-sm text-violet-600">
                {result}
              </p>
            )}
          </form>
        </NeonGradientCard>
      </div>
      {/* </article> */}
    </div>
  );
};

export default Contact;
