import AuthCard from "../components/AuthCard";
import AuthForm from "../components/AuthForm";
import { loginSchema } from "../validation/authSchemas";



const Login = () => {
  const fields = [
    { name: "username", label: "نام کاربری", type: "text" },
    { name: "password", label: "رمز عبور", type: "password" },
  ];

  const onSubmit = (data) => {
    console.log("Login:", data);
  };

  return (
    <AuthCard
      title="فرم ورود"
      linkText="ایجاد حساب کاربری!"
      linkTo="/register"
    >
      <AuthForm
        fields={fields}
        schema={loginSchema}
        onSubmit={onSubmit}
        buttonText="ورود"
      />
    </AuthCard>
  );
};

export default Login;
