import { Loader } from "lucide-react";
import { Button, ButtonProps } from "./button";

type Props = {
  isLoading?: boolean;
  loadingText: string;
  children: string;
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
