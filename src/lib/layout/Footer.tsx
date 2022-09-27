import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm" color="gray.500">
        github -{" "}
        <Link
          href="https://github.com/ryanhatfield"
          isExternal
          rel="noopener noreferrer"
        >
          @ryanhatfield
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
