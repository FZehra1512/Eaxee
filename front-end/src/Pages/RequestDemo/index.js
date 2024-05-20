import React, { useState, forwardRef } from "react";
import logoImage from "../../Assets/eaxee x blue.png";
import { NavLink } from "react-router-dom";
import demostyles from "./requestDemo.module.css";
import { useForm } from "react-hook-form";
import Alert from "../../Components/Alert";
import styles from "../Contact/contact.module.css";
import Footer from "../../Components/Footer";


// TODO: where to submit this form? Should i use email js?
// TODO: Remove country and current challenges fields and update UI accordingly IMPORTANT
// TODO: Update the Job titles, ask Sir Ghazanfar for titles

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

  const Dropdown = forwardRef(({ options, ...rest }, ref) => {
    return (
      <select {...rest} ref={ref} className={demostyles.dropdownInput}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  });

  const jobTitles = [
    { label: "", value: "" },
    { label: "Software Engineer", value: "software_engineer" },
    { label: "Data Scientist", value: "data_scientist" },
    { label: "Product Manager", value: "product_manager" },
    { label: "UI/UX Designer", value: "ui_ux_designer" },
    { label: "DevOps Engineer", value: "devops_engineer" },
    { label: "Business Analyst", value: "business_analyst" },
    { label: "Quality Assurance Engineer", value: "qa_engineer" },
  ];

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Detect spams by checking honeypot field
    if (data.honeypot) {
      reset();
      console.log("Spam email, discarding submission!");
      return;
    }

    // Destrcture data object
    const { fullName, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      const templateParams = {
        fullName,
        email,
        subject,
        message,
      };

      // await emailjs.send(
      //   process.env.REACT_APP_SERVICE_ID,
      //   process.env.REACT_APP_TEMPLATE_ID,
      //   templateParams,
      //   process.env.REACT_APP_USER_ID
      // );

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
          <p className={demostyles.logoText}>eaxee</p>
        </NavLink>
      </div>

      {/* Request Demo Info */}
      <div className={demostyles.mainContainer}>
        <div className={demostyles.coloredContainer}>
          <div className={demostyles.infoCard}>
            <h1>
              Unlock the Potential of your Enterprise Architecture: Request a
              Demo Today!
            </h1>
            <p>
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
          <h1 className={demostyles.demoPageHeadings}>Request Demo</h1>
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
                <label htmlFor="fullName">Name</label>
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
                  <span className="errorMessage">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className={styles.inputField}>
                <label htmlFor="email">Business Email</label>
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
                  <span className="errorMessage">
                    Please enter a valid email address
                  </span>
                )}
              </div>
            </div>

            {/* Form Row 2 */}

            <div className={styles.formRow}>
              <div className={styles.inputField}>
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  {...register("company", {
                    required: true,
                  })}
                />
                {errors.company && (
                  <span className="errorMessage">
                    Please enter your company name
                  </span>
                )}
              </div>
              <div className={styles.inputField}>
                <label htmlFor="jobTitle">Job Title/Role</label>
                <Dropdown
                  name="jobTitle"
                  id="jobTitle"
                  options={jobTitles}
                  {...register("jobTitle", {
                    required: true,
                  })}
                />
                {errors.jobTitle && (
                  <span className="errorMessage">
                    Please enter a valid job title
                  </span>
                )}
              </div>
            </div>

            {/* Form Row 3 */}

            <div className={styles.formRow}>
              <div className={styles.inputField}>
                <label htmlFor="country">Country</label>
                <Dropdown
                  name="country"
                  id="country"
                  options={jobTitles}
                  {...register("country", {
                    required: true,
                  })}
                />
                {errors.country && (
                  <span className="errorMessage">
                    Please enter your country
                  </span>
                )}
              </div>
              <div className={styles.inputField}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  {...register("phone", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
                {errors.email && (
                  <span className="errorMessage">
                    Please enter a valid phone number
                  </span>
                )}
              </div>
            </div>

            {/* Form Row 4 */}
            <div className={styles.inputField}>
              <label htmlFor="challenges">Current Challenges</label>
              <input
                type="text"
                name="challenges"
                id="challenges"
                {...register("challenges", {
                  required: { value: false },
                  maxLength: {
                    value: 100,
                    message:
                      "Please state your challenges precisely within 100 characters",
                  },
                })}
              />
              {errors.subject && (
                <span className="errorMessage">{errors.subject.message}</span>
              )}
            </div>

            {/* Honeypot for spam detection */}
            <label htmlFor="honeypot" style={{ display: "none" }}>
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
              className="button"
              id={demostyles.submitButton}
              disabled={disabled}
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
      <div className={demostyles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
};

export default RequestDemo;
