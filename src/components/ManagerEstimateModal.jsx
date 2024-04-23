import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const ManagerEstimateModal = ({ isOpen, onClose, managers }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Manager Estimates</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Manager</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {managers.map((manager, index) => (
                <Tr key={index}>
                  <Td>{manager.name}</Td>
                  <Td>{manager.amount}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ManagerEstimateModal;
