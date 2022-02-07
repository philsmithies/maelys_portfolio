import { useState } from "react";
import axios from "axios";

const ContactForm = (): JSX.Element => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      firstName,
      lastName,
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
          setFirstName("");
          setLastName("");
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
    <form className="w-full max-w-lg">
      <div className="-mx-3 mb-2 flex flex-wrap ">
        <div className="mb-2 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-black"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="mb-1 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-black focus:bg-white focus:outline-none"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
        </div>
        <div className="w-full px-3 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-black"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-black focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-last-name"
            type="text"
            value={lastName}
            placeholder="Doe"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="-mx-3 mb-2 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-black"
            htmlFor="grid-email"
          >
            E-mail
          </label>
          <input
            className="mb-1 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-black focus:border-gray-500 focus:bg-white focus:outline-none"
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
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-black"
            htmlFor="grid-password"
          >
            Message
          </label>
          <textarea
            className=" no-resize mb-1 block h-48 w-full resize-none appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="message"
            value={message}
            placeholder="Enter Message"
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
            className="focus:shadow-outline rounded bg-teal-400 py-2 px-4 font-bold text-white shadow hover:bg-teal-400 focus:outline-none"
            type="button"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Send
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
