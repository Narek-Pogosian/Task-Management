import LoadingButton from "@/components/ui/loading-button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/layout/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { Label } from "@/components/ui/label";
import useRegister, { RegisterSchemaType } from "./useRegister";

const initialData: RegisterSchemaType = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState<string | null>(null);

  const { isLoading, mutateAsync: register } = useRegister();
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
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords dont match");
      return;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError("Please provide a valid email");
      return;
    }

    await register(formData, {
      onSuccess: () => navigate("/"),
      onError: (err) => {
        setError(err.message);
      },
    });
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

        {/* CONFIRM PASSWORD */}
        <Label>Caonfirm Password</Label>
        <Input
          placeholder="Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
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
          Register
        </LoadingButton>

        <div className="text-sm font-semibold text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-indigo-500 hover:underline">
            Sign in here
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
