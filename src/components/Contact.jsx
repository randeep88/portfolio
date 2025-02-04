import React from "react";
import { BackgroundGradient } from "./BgGradient";
import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.svg";

const Contact = () => {
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
      className="pt-28 md:pt-28 lg:pt-20 text-gray-300 flex flex-col items-center justify-center lg:flex lg:flex-row lg:items-center lg:justify-evenly w-full h-screen"
    >
      <div className="w-72 m-auto md:m-auto lg:m-0 lg:w-[450px]">
        <h1 className="text-center lg:text-left md:text-5xl selection:normal-case pointer-events-none lg:whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text lg:text-6xl text-4xl font-semibold text-transparent dark:from-white dark:to-slate-900/10">
          Contact
        </h1>
        <p className="pointer-events-none lg:text-5xl md:text-4xl text-3xl lg:text-left text-center lg:mt-5 mt-2 text-neutral-600  custom-font selection:normal-case">
          Let’s create something amazing together! Drop me a message.
        </p>
        <ul className="flex items-center justify-center lg:justify-start lg:mt-14 mt-5 space-x-5 mb-10">
          <li>
            <Link
              to="https://www.instagram.com/310_randeep_/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="lg:w-9 lg:h-9 w-7 h-7"
              >
                <path
                  clipRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              to="https://github.com/randeep88"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="lg:w-9 lg:h-9 w-7 h-7"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/randeep-singh-9a6392259/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
            >
              <img
                className="invert lg:w-9 lg:h-9 w-7 h-7 opacity-60 hover:opacity-100"
                src={linkedin}
              />
            </Link>
          </li>
        </ul>
      </div>
      <BackgroundGradient>
        <div className="w-80 md:w-96 lg:w-96 bg-black rounded-[16px] p-4 lg:!pt-10 py-10 sm:p-6 selection:normal-case">
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:bg-transparent rounded-md shadow-sm placeholder-neutral-600 focus:outline-none focus:ring-violet-600 focus:border-violet-500 sm:text-sm"
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:bg-transparent rounded-md shadow-sm placeholder-neutral-600 focus:outline-none focus:ring-violet-600 focus:border-violet-500 sm:text-sm"
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:bg-transparent rounded-md shadow-sm placeholder-neutral-600 focus:outline-none focus:ring-violet-600 focus:border-violet-500 sm:text-sm"
                  required
                  type="text"
                  name="message"
                  placeholder="i.e., Hello, I want to discuss about..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 w-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>

            {result && (
              <p className="mt-4 text-center text-sm text-violet-600">
                {result}
              </p>
            )}
          </form>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default Contact;
