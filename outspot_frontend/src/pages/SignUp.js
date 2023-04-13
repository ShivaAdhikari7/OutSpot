import Form from "../components/ui/Form";

import signUpImage from "../assets/Images/signup-img.jpg";
import Input from "../components/ui/Input";
import Footer from "../components/ui/Footer";
const firstNameChangeHandler = () => {};
const lastNameChangeHandler = () => {};
const emailChangeHandler = () => {};
const phoneNumberChangeHandler = () => {};
const dobChangeHandler = () => {};
const passwordChangeHandler = () => {};
const confirmPasswordChangeHandler = () => {};

const formSubmitHandler = (e) => {
  e.preventDefault();
  console.log("Form submitted");
};
const SignUp = () => {
  return (
    <>
      <Form
        onSubmit={formSubmitHandler}
        img={signUpImage}
        heading={"Create Your account"}
        alt="Sign Up Image"
      >
        <Input
          id="firstName"
          type="text"
          placeholder="Enter FirstName"
          label="First Name"
          onChanged={firstNameChangeHandler}
        />
        <Input
          id="lastName"
          type="text"
          placeholder="Enter lastName"
          label="Last Name"
          onChanged={lastNameChangeHandler}
        />
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          label="Email"
          onChanged={emailChangeHandler}
        />
        <Input
          id="dob"
          type="date"
          placeholder="2000-01-01"
          label="Date of Birth"
          onChanged={dobChangeHandler}
        />
        <Input
          id="phone"
          type="text"
          placeholder="98*********"
          label="Phone Number"
          onChanged={phoneNumberChangeHandler}
        />
        <Input
          id="password"
          type="password"
          placeholder="●●●●●●"
          label="Password"
          onChanged={passwordChangeHandler}
        />
        <Input
          id="confirmPassword"
          type="password"
          placeholder="●●●●●●"
          label="Confirm Password"
          onChanged={confirmPasswordChangeHandler}
        />

        <button className=" btn-custom btn--signup" type="submit">
          SignUp
        </button>
      </Form>
      <Footer />
    </>
  );
};

export default SignUp;
