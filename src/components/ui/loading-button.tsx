import { Loader } from "lucide-react";
import { Button, ButtonProps } from "./button";
import { ReactNode } from "react";

type Props = {
  isLoading?: boolean;
  loadingText: string;
  children: ReactNode;
} & ButtonProps;

const LoadingButton = ({
  isLoading,
  children,
  loadingText,
  ...rest
}: Props) => {
  return (
    <Button disabled={isLoading} {...rest}>
      {isLoading && <Loader className="w-4 h-4 mr-2 animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  );
};

export default LoadingButton;
