import { FC, memo, ReactNode } from "react";
import { Heading, Container } from "@chakra-ui/react";

type Props = {
  title: string;
  children: ReactNode;
};
export const PomodoroTemplete: FC<Props> = memo((props) => {
  const { title, children } = props;
  return (
    <Container maxW={"4xl"}>
      <Heading
        as="h1"
        textAlign={"center"}
        fontSize={{ base: "3xl", md: "4xl" }}
        p={30}
        mt={10}
        color="gray.700"
      >
        {title}
      </Heading>
      {children}
    </Container>
  );
});
