import { Flex, Box, VStack, Text, IconButton, Link as ChakraLink } from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";
import colors from "themes/colors";
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

interface CustomToastProps {
    title: string;
    message: string;
    isStatus: boolean;
    status: string;
    hasExternal: boolean;
    externalLink: string;
    hasInternal: boolean;
    internalLink: string;
    linkLabel: string;
}

export function CustomToast(props: any) {
    const [customProps] = useState(props.props as CustomToastProps);
    return (
        <Flex p={["0.25em", "0.25em", "0.25em", "0.25em"]} w="full" maxH={["5em", "5em", "5em", "5em"]} minH={["5em", "5em", "5em", "5em"]}>
            <Box w="100%" h="100%">
                <VStack w="100%" h="100%">
                    <Flex direction="row" justify="space-between" w="100%" h="100%">
                        <Box w="100%" h="100%">
                            <Text as="h3" textAlign="left" color={colors.text.darknavy} w="100%" display="inline" marginRight="1em">{ customProps.title }</Text>
                            {
                                customProps.status == "SUCCESS" && <IconButton top="-0.1em" aria-label="Success" icon={<FaCheckCircle color={colors.bg.gBlue} />} />
                            }
                            {
                                customProps.status == "ERROR" && <IconButton top="-0.1em" aria-label="Error" icon={<FaExclamationTriangle color={"red"} />} />
                            }
                            {
                                customProps.status == "INFO" && <IconButton top="-0.1em" aria-label="Info" icon={<FaInfoCircle color="grey" />} />
                            }
                        </Box>
                    </Flex>
                    <Flex direction="row" justify="space-between">
                        <Text as="p" textAlign="left" color={colors.text.darkgrey} w="100%" fontSize="sm">{ customProps.message }</Text>
                        {
                            customProps.hasInternal &&
                            <Link href={customProps.internalLink} passHref>
                                <Text color={colors.bg.gBlue} fontSize="sm">{customProps.linkLabel}</Text>
                            </Link>
                        }
                        {
                            customProps.hasExternal &&
                            <ChakraLink href={customProps.internalLink} passHref>
                                {customProps.linkLabel}
                            </ChakraLink>
                        }
                    </Flex>
                </VStack>
            </Box>
        </Flex>
    );
}
