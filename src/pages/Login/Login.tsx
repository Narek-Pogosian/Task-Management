import LoadingButton from "@/components/ui/loading-button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/layout/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import useLogin, { LoginSchemaType } from "./useLogin";
import { ChangeEvent, FormEvent, useState } from "react";
import { Label } from "@/components/ui/label";

const initialData: LoginSchemaType = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState<string | null>(null);

  const { isLoading, mutateAsync: signin } = useLogin();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError("Please provide a valid email");
      return;
    }

    await signin(formData, {
      onSuccess: () => navigate("/"),
    });
  };

  const demoSignin = async () => {
    await signin(
      { email: "demo@demo.com", password: "Wefo2ewo1erXtr" },
      {
        onSuccess: () => navigate("/"),
        onError: (err) => {
          setError(err.message);
        },
      }
    );
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="grid w-[300px] sm:w-[400px] gap-3 px-4 py-6 border rounded mb-6"
      >
        {/* EMAIL */}
        <Label>Email</Label>
        <Input
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* PASSWORD */}
        <Label>Password</Label>
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* ERROR MESSAGE */}
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* SUBMIT */}
        <LoadingButton
          isLoading={isLoading}
          loadingText="Signing in..."
          type="submit"
        >
          Sign In
        </LoadingButton>

        <div className="text-sm font-semibold text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-500 hover:underline">
            Register here
          </Link>
        </div>
      </form>

      {/* Demo signin */}
      <LoadingButton
        isLoading={isLoading}
        loadingText="Signing in..."
        variant="outline"
        onClick={demoSignin}
      >
        Demo Account
      </LoadingButton>
    </AuthLayout>
  );
};

export default Login;
