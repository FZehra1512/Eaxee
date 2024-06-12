import React, { useState } from "react";
import logoImage from "../../Assets/eaxeeLogo.png";
import { NavLink } from "react-router-dom";
import demostyles from "./requestDemo.module.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Alert from "../../Components/Alert";
import styles from "../Contact/contact.module.css";


const RequestDemo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };


  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Detect spams by checking honeypot field
    if (data.honeypot) {
      reset();
      console.log("Spam email, discarding submission!");
      return;
    }

    // Destructure data object
    const { fullName, email, phone, jobTitle, company } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      const templateParams = {
        fullName,
        email,
        phone,
        jobTitle,
        company,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_DEMO_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );

      // TODO:Receiver Email ID set krni hai

      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className={styles.main}>
      {/* Navbar */}
      <div className={demostyles.logoContainer}>
        <NavLink to="/" className={demostyles.logo}>
          <img src={logoImage} alt="Logo" className={demostyles.logoImage} />
          {/* <p className={demostyles.logoText}>eaxee</p> */}
        </NavLink>
      </div>

      {/* Request Demo Info */}
      <div className={demostyles.mainContainer}>
        <div className={demostyles.coloredContainer}>
          <div className={demostyles.infoCard}>
            <h1 className="mainHeading">
              Unlock the Potential of your Enterprise Architecture: Request a
              Demo Today!
            </h1>
            <p className="para">
              Explore the future of your enterprise with our cutting-edge
              architecture solutions. From scalability to security, let us
              demonstrate how our tailored approach can elevate your business to
              new heights. Request your personalized demo now and embark on a
              journey towards innovation and efficiency.
            </p>
          </div>
        </div>

        {/* Request Demo form */}
        <div className={demostyles.demoFormContainer}>
          <h1 className={`${demostyles.demoPageHeadings} mainHeading`}>Request Demo</h1>
          <form
            className={styles.contactForm}
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            disabled={disabled}
          >
            {/* Form Row 1 */}

            <div className={styles.formRow}>
              <div className={styles.inputField}>
                <label htmlFor="fullName" className="para">Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  {...register("fullName", {
                    required: {
                      value: true,
                      message: "Please enter your Full Name",
                    },
                    maxLength: {
                      value: 50,
                      message: "Please use 50 characters or less",
                    },
                  })}
                />
                {errors.fullName && (
                  <span className={styles.errorMessage}>
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className={styles.inputField}>
                <label htmlFor="email" className="para">Business Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
                {errors.email && (
                  <span className={styles.errorMessage}>
                    Please enter a valid email address
                  </span>
                )}
              </div>
            </div>

            {/* Form Row 2 */}

            <div className={styles.formRow}>
              <div className={styles.inputField}>
                <label htmlFor="phone" className="para">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  {...register("phone", {
                    required: true,
                    pattern: /^\+?[1-9]\d{1,14}$/,
                  })}
                />
                {errors.phone && (
                  <span className={styles.errorMessage}>
                    Please enter a valid phone number, along with your country code and no white-spaces
                  </span>
                )}
              </div>
              <div className={styles.inputField}>
                <label htmlFor="jobTitle" className="para">Job Title/Role</label>
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  {...register("jobTitle", {
                    required: true,
                  })}
                />
                {errors.jobTitle && (
                  <span className={styles.errorMessage}>
                    Please enter your job title
                  </span>
                )}
              </div>
            </div>

            {/* Form Row 3 */}
            <div className={styles.inputField}>
              <label htmlFor="company" className="para">Company Name</label>
              <input
                type="text"
                name="company"
                id="company"
                {...register("company", {
                  required: true,
                })}
              />
              {errors.company && (
                <span className={styles.errorMessage}>
                  Please enter your company name
                </span>
              )}
            </div>

            {/* Honeypot for spam detection */}
            <label className="para" htmlFor="honeypot" style={{ display: "none" }}>
              Enter First Name:
            </label>
            <input
              type="text"
              name="honeypot"
              id="honeypot"
              style={{ display: "none" }}
              {...register("honeypot")}
            />

            <button
              type="submit"
              className="button para"
              id={demostyles.submitButton}
              // disabled={disabled}
            >
              Request Demo
            </button>
          </form>
        </div>

        {/* Alert Box */}
        <Alert
          display={alertInfo.display}
          message={alertInfo.message}
          type={alertInfo.type}
          onClose={() =>
            setAlertInfo({ display: false, message: "", type: "" })
          }
        />
      </div>

      {/* Footer */}
      {/* <div className={demostyles.footerContainer}>
        <Footer />
      </div> */}
    </div>
  );
};

export default RequestDemo;
