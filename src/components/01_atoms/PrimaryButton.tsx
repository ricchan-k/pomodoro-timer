import { ReactNode, FC, memo } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <Button
      bg={"red.500"}
      color={"white"}
      _hover={{
        bg: "red.400",
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
