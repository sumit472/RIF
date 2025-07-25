import { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [msg, setMsg] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    alert("your form is submitted");
    setFullName("");
    setEmail("");
    setNumber("");
    setMsg("");

  };

  return (
    <>
      <div>
        <div className="w-full p-15 bg-sky-500 text-white dark:bg-gray-900 dark:text-white ">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-2xl pt-2">
            Get in touch with the Rohilkhand Incubation Foundation team
          </p>
        </div>
        <div className="flex gap-10 pt-10 pb-15 p-15 dark:bg-gray-900 dark:text-white ">
          <div className="w-1/2 ">
            <h1 className="font-bold text-3xl">Get in Touch</h1>
            <p>
              Have questions about RIF or interested in our incubation programs?
              We'd love to hear from you. Reach out to us using any of the
              contact methods below or fill out the form.
            </p>
            <nav>
              <div className="pt-8">
                {" "}
                <span>🚒</span>
                <a>
                  {" "}
                  Rohilkhand Incubation Foundation,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MJPRU Campus, Bareilly, Uttar{" "}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pradesh, India
                </a>
              </div>
              <div className="pt-5">
                {" "}
                <span> 📞 </span>
                <a> +91 1234567891</a>
              </div>
              <div className="pt-5">
                {" "}
                <span> 💌 </span>
                <a> info@gmail.com</a>
              </div>
            </nav>
          </div>
          <div className="border pl-10 pr-10 rounded-2xl w-1/2">
            <h1 className="font-bold text-3xl pt-5">Send Us a Message</h1>
            <div className="flex gap-62 pt-5 ">
              <label htmlFor="">FullName:</label>
              <label htmlFor="">email:</label>
            </div>
            <div>
              <form className="dark:text-black" onSubmit={handlerSubmit}>
                <div className="flex gap-10 ">
                  <input
                    type="text"
                    className="input validator w-full"
                    required
                    placeholder="Username"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minlength="3"
                    maxlength="30"
                    title="Only letters, numbers or dash"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />

                  <input
                    className="input validator w-full"
                    type="email"
                    required
                    placeholder="mail@site.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <label className="dark:text-white">PhoneNumber:</label>
                <br />
                <input
                  type="tel"
                  className="input validator tabular-nums w-full"
                  required
                  placeholder="Phone"
                  pattern="[0-9]*"
                  minlength="10"
                  maxlength="10"
                  title="Must be 10 digits"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                {/* <p className="validator-hint">Must be 10 digits</p> */}
                <label className="dark:text-white">Subject: </label>

                <select className="select validator w-full" required >
                  <option disabled selected  >
                    Choose:
                  </option>
                  <option>General Inquiry</option>
                  <option>Incubation Program</option>
                  <option>Partnership Opportunities</option>
                  <option>Other</option>
                </select>
                <p className="validator-hint">Required</p>
                <label className="dark:text-white">Message</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full"
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
                <div className="pt-5 pb-5">
                  <button
                    className="btn w-full bg-red-500 text-white"
                    type="submit"
                  >
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
