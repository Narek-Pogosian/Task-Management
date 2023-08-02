import LoadingButton from "@/components/ui/loading-button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/layout/AuthLayout";
import { LoginSchemaType, loginSchema } from "@/lib/validators/loginValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "./useLogin";

const Login = () => {
  const { isLoading, error, mutate: signin } = useLogin();
  const navigate = useNavigate();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginSchemaType) => {
    signin(values, {
      onSuccess: () => navigate("/"),
    });
  };

  const demoSignin = () => {
    signin(
      { email: "demo@demo.com", password: "Wefo2ewo1erXtr" },
      {
        onSuccess: () => navigate("/"),
      }
    );
  };

  return (
    <AuthLayout>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-[300px] sm:w-[400px] gap-3 px-4 py-6 border rounded mb-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error.message}</AlertDescription>
            </Alert>
          )}
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
      </Form>
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
