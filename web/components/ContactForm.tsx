import { useState } from "react";
import axios from "axios";

const ContactForm = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      message,
    };

    axios
      .post("/api/contact", {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(function (response) {
        if (response.status == 200) {
          setName("");
          setEmail("");
          setMessage("");
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form className="mt-5 w-5/6 max-w-lg">
      <div className="-mx-3 mb-2 flex flex-wrap ">
        <div className="mb-2 flex w-full px-3 md:mb-0">
          <input
            className="mb-1 mr-2 w-full appearance-none border border-orange-200 py-3 px-4 leading-tight text-black focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-first-name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <input
            className="mb-1 w-full appearance-none border border-orange-200 py-3 px-4 leading-tight text-black focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="-mx-3 mb-2 flex flex-wrap">
        <div className="w-full px-3">
          <textarea
            className=" no-resize mb-1 block h-48 w-full resize-none appearance-none border border-orange-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="message"
            value={message}
            placeholder="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="w-28 rounded-sm border border-orange-200 py-3 px-4 text-xs font-thin text-orange-400 shadow transition-colors hover:bg-orange-400 hover:text-white "
            type="button"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
        </div>
        {submitted && (
          <div className="mt-2">
            <p className="font-gray-700">Thankyou!</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
