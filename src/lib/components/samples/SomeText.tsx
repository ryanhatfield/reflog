import { Grid, Heading, Text } from "@chakra-ui/react";

const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        Reflog of a Nervous Git
      </Heading>

      <Text fontSize="xs" color="gray.500">
        A Blog created with Next.js and Chakra-UI.
      </Text>
    </Grid>
  );
};

export default SomeText;
