import AuthCard from "../components/AuthCard";
import AuthForm from "../components/AuthForm";
import { registerSchema } from "../validation/authSchemas";

const Register = () => {
  const fields = [
    { name: "username", label: "نام کاربری", type: "text" },
    { name: "password", label: "رمز عبور", type: "password" },
    { name: "confirmPassword", label: "تکرار رمز عبور", type: "password" },
  ];

  const onSubmit = (data) => {
    console.log("Register:", data);
  };

  return (
    <AuthCard
      title="فرم ثبت نام"
      linkText="حساب کاربری دارید؟"
      linkTo="/login"
    >
      <AuthForm
        fields={fields}
        schema={registerSchema}
        onSubmit={onSubmit}
        buttonText="ثبت نام"
      />
    </AuthCard>
  );
};

export default Register;
