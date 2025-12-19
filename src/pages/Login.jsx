import AuthCard from "../components/AuthCard";
import AuthForm from "../components/AuthForm";
import { loginSchema } from "../validation/authSchemas";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const fields = [
    { name: "username", label: "نام کاربری", type: "text" },
    { name: "password", label: "رمز عبور", type: "password" },
  ];

  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      await login(data);
      toast.success("ورود موفقیت‌آمیز بود!");
      navigate("/products");
    } catch (error) {
      
      if (error.message === "Server unreachable. Please try again later.") {
        toast.error("سرور در دسترس نیست. بعداً تلاش کنید.");
      } else {
        toast.error(error.message || "نام کاربری یا رمز عبور اشتباه است.");
      }
    }
  };

  return (
    <AuthCard title="فرم ورود" linkText="ایجاد حساب کاربری!" linkTo="/register">
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
