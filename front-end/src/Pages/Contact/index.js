import React, { useState } from 'react'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Alert from '../../Components/Alert';
import styles from './contact.module.css'
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdLocalPhone } from "react-icons/md";


// TODO: Email Reciever ki id deni hai
// TODO: Location map ki integration krni hai ya sirf location card rakhna hai, Sir Ghazanfar said comment it down currently, will discuss it later
// TODO: Location info update, add correct location

const Contact = () => {
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

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      // TODO:Receiver Email ID set krni hai, email js ki website pr ja kr template bhi set krni hai

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
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Contact form */}
      <div className={styles.contactContainer}>
        <h1 className={styles.contactPageHeadings}>Contact Us</h1>
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
                <span className="errorMessage">{errors.fullName.message}</span>
              )}
            </div>
            <div className={styles.inputField}>
              <label htmlFor="email">Email</label>
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
          <div className={styles.inputField}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              {...register("subject", {
                required: { value: true, message: "Please enter a subject" },
                maxLength: {
                  value: 100,
                  message: "Subject cannot exceed 100 characters",
                },
              })}
            />
            {errors.subject && (
              <span className="errorMessage">{errors.subject.message}</span>
            )}
          </div>

          {/* Form Row 3 */}
          <div className={styles.inputField}>
            <label htmlFor="message">Message</label>
            <textarea
              rows={5}
              name="message"
              id="message"
              className={styles.textarea}
              {...register("message", {
                required: true,
              })}
            />
            {errors.message && (
              <span className="errorMessage">Please enter a message</span>
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
            id={styles.submitButton}
            disabled={disabled}
          >
            Send
          </button>
        </form>
      </div>

      {/* Alert Box */}
      <Alert
        display={alertInfo.display}
        message={alertInfo.message}
        type={alertInfo.type}
        onClose={() => setAlertInfo({ display: false, message: "", type: "" })}
      />

      {/* Location Card */}
      {/* Location TODO: Map or a picture */}
      <div className={styles.locationSection}>
        <div className={styles.container}>
          <h1 className={styles.contactPageHeadings}>Location</h1>
          <div className={styles.locationCard}>
            <div className={styles.mapCard}>Map</div>
            <div className={styles.officeInfoCard}>
              <h2>Office Name</h2>
              <div className={styles.officeInfo}>
                <div className={styles.infoRow}>
                  <FaLocationDot className={styles.infoIcon} />
                  <p>C-93/13 Gulistan-e-Jauhar, Karachi, Pakistan</p>
                </div>
                <div className={styles.infoRow}>
                  <MdEmail className={styles.infoIcon} />
                  <p>info@lambdatheta.com</p>
                </div>
                <div className={styles.infoRow}>
                  <MdLocalPhone className={styles.infoIcon} />
                  <p>+92-21-34011685</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact
