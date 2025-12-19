import AuthCard from "../components/AuthCard";
import AuthForm from "../components/AuthForm";
import { registerSchema } from "../validation/authSchemas";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { register, login } = useAuth();

  const fields = [
    { name: "username", label: "نام کاربری", type: "text" },
    { name: "password", label: "رمز عبور", type: "password" },
    { name: "confirmPassword", label: "تکرار رمز عبور", type: "password" },
  ];

  const onSubmit = async (data) => {
    try {
      
      await register({
        username: data.username,
        password: data.password,
      });

      toast.success("ثبت نام موفقیت‌آمیز بود!");

      
      await login({
        username: data.username,
        password: data.password,
      });

      navigate("/products");
    } catch (error) {
      console.error("Register/Login Error:", error);
      toast.error(error.message || "خطا در ثبت نام یا ورود");
    }
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
