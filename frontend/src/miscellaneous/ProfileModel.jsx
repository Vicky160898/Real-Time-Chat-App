import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export default function ProfileModel({ user, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          bg="#E8E8E8"
          display={{ base: "flex" }}
          icon={<ViewIcon color={'blue'} size={30}/>}
          onClick={onOpen}
        />
      )}
      <Modal size="md" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent h="410px" bg="#FFFFFF" color={"black"}>
          <ModalHeader
            fontSize={"35px"}
            fontFamily="work sans"
            display={"flex"}
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Image
              borderRadius={"full"}
              boxSize="150px"
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontSize={{ base: "22px", md: "25px" }}
              fontFamily="work sans"
            >
              Email:{user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="#0C9EE7"
              color={"white"}
              _hover={{ background: "#38B2AC", color: "white" }}
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
