import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

const ReservationInfo = () => {
  const reservationData = [
    {
      id: 1,
      customerName: "John Doe",
      date: "2023-06-01",
      time: "10:00 AM",
      status: "Confirmed",
      address: "123 Main St",
      serviceType: "Regular Cleaning",
      managers: [
        { name: "Manager 1", amount: 100 },
        { name: "Manager 2", amount: 120 },
      ],
    },
    {
      id: 2,
      customerName: "Jane Smith",
      date: "2023-06-02",
      time: "11:30 AM",
      status: "Pending",
      address: "456 Elm St",
      serviceType: "Deep Cleaning",
      managers: [
        { name: "Manager 3", amount: 200 },
        { name: "Manager 4", amount: 180 },
      ],
    },
  ];

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>고객</Th>
            <Th>날짜</Th>
            <Th>시간</Th>
            <Th>상태</Th>
            <Th>주소</Th>
            <Th>서비스 유형</Th>
            <Th>견적 제출 매니저</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reservationData.map((reservation) => (
            <Tr key={reservation.id}>
              <Td>{reservation.customerName}</Td>
              <Td>{reservation.date}</Td>
              <Td>{reservation.time}</Td>
              <Td>{reservation.status}</Td>
              <Td>{reservation.address}</Td>
              <Td>{reservation.serviceType}</Td>
              <Td>
                <Button variant="link" onClick={() => openManagerEstimateModal(reservation.managers)}>
                  {reservation.managers.length} managers
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

const openManagerEstimateModal = (managers) => {
 
  console.log("Opening manager estimate modal for managers:", managers);
};

export default ReservationInfo;
