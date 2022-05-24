import { FC, memo, ReactNode } from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

type Props = {
  fontSize: string;
  children: ReactNode;
};

export const ErrorMessage: FC<Props> = memo((props) => {
  const { children, fontSize } = props;
  return (
    <Alert status="error" fontSize={fontSize}>
      <AlertIcon />
      {children}
    </Alert>
  );
});
