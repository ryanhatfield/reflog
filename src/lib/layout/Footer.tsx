import { Flex, Link, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <VStack>
        {[
          {
            title: "github",
            href: "https://github.com/ryanhatfield",
            username: "@ryanhatfield",
          },
          {
            title: "twitter",
            href: "https://twitter.com/nervousgit",
            username: "@nervousgit",
          },
        ].map((link) => (
          <Text fontSize="sm" color="gray.500">
            {link.title} -{" "}
            <Link
              href={link.href}
              isExternal
              rel="noopener noreferrer"
              key={link.title}
            >
              {link.username}
            </Link>
          </Text>
        ))}
      </VStack>
    </Flex>
  );
};

export default Footer;
