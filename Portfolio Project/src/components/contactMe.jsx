import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { Formik,ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import check from "../images/check-mark.png";

export function ContactMeSection() {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string().required("Email is Required"),
    message: Yup.string().required("Message is Required"),
  });

    const handleSubmit = async (values, { resetForm }) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
  
        if (response.ok) {
          setSubmissionStatus("success");
          resetForm();
          // Clear the success message after 5 second
          setTimeout(() => {
            setSubmissionStatus(null);
          }, 5000);
        } else {
          setSubmissionStatus("error");
          setTimeout(() => {
            setSubmissionStatus(null);
          }, 5000);
        }
      } catch (error) {
        console.error(error);
        setSubmissionStatus("error");
      }
    };

  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-4"
        >
          Contact me
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
            Please don't hesitate to get in touch with me for any inquiries or potential collaborations
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <div className="flex flex-col gap-4 lg:max-w-sm">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              action="#"
            >

              <Typography
                variant="h4"
                className="text-left !font-semibold !text-gray-600"
              >
                Get in touch
              </Typography>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    First Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="First Name"
                    name="firstName"
                    className="focus:border-t-gray-900"
                    containerProps={{
                      className: "min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                  <div className="text-red-500 mb-8 font-normal">
                    <ErrorMessage name="FirstName" className="error" />
                  </div>
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Last Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="Last Name"
                    name="lastName"
                    className="focus:border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                  <div className="text-red-500 mb-8 font-normal">
                    <ErrorMessage name="LastName" className="error" />
                  </div>
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Email
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="name@email.com"
                  name="email"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
                <div className="text-red-500 mb-8 font-normal">
                  <ErrorMessage name="email" className="error" />
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Message
                </Typography>
                <Textarea
                  rows={6}
                  color="gray"
                  placeholder="Message"
                  name="message"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <Button type="submit" className="w-full" color="gray">
                Send message
              </Button>
            </Formik>

          </div>
          
          <div>
            {submissionStatus === "success" && (
              <div className="success-message">
                <div className="success-body">
                  <img src={check} alt="success icon" className="success-icon" />
                    Email sent successfully! I will get back to you as soon as
                    possible
                </div>
                <div className="success-progress"></div>
              </div>
            )}
            {submissionStatus === "error" &&(
              <div className="error-message">
                Error sending email. Please try again later.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMeSection;
