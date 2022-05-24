import { FC, memo, ReactNode } from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

type Props = {
  fontSize: string;
  children: ReactNode;
};

export const InfoMessage: FC<Props> = memo((props) => {
  const { children, fontSize } = props;
  return (
    <Alert status="info" fontSize={fontSize}>
      <AlertIcon />
      {children}
    </Alert>
  );
});
