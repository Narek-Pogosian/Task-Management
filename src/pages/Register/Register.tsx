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
import {
  RegisterSchemaType,
  registerSchema,
} from "@/lib/validators/registerValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useRegister from "@/pages/Register/useRegister";

const Register = () => {
  const { isLoading, error, mutate: register } = useRegister();
  const navigate = useNavigate();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: RegisterSchemaType) => {
    register(values, {
      onSuccess: () => navigate("/"),
    });
  };

  return (
    <AuthLayout>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-[300px] sm:w-[400px] gap-3 px-4 py-6 border rounded"
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    {...field}
                  />
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
            loadingText="Register"
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
      </Form>
    </AuthLayout>
  );
};

export default Register;
