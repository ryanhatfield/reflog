import { Box, Flex } from "@chakra-ui/react";

import SomeText from "lib/components/samples/SomeText";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Box margin="auto">
        <SomeText />
      </Box>
    </Flex>
  );
};

export default Header;
