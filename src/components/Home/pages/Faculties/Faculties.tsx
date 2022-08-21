import {
  Modal,
  ModalContent,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Action from "../../../../redux/actions";
import { State } from "../../../../redux/reducers";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

const Faculties = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editFormState, setEditFormState] = useState<{
    open: boolean;
    id: number | null;
  }>({ open: false, id: null });
  const faculties = useSelector((state: State) => state.faculties);
  const dispatch = useDispatch();

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th style={{ fontSize: "15px" }}>Name</Th>
              <Th style={{ fontSize: "15px" }}>Email</Th>
              <Th style={{ fontSize: "15px" }}>Contact</Th>
              <Th style={{ fontSize: "15px" }}>Post</Th>
            </Tr>
          </Thead>
          <Tbody>
            {faculties.map((s, i) => (
              <Tr style={{ textAlign: "center" }}>
                <Td>{s.name}</Td>
                <Td>{s.email}</Td>
                <Td>{s.contactNo}</Td>
                <Td>{s.post}</Td>
                <Td>
                  <img
                    src="/images/edit-solid.svg"
                    width={20}
                    height={20}
                    onClick={() => setEditFormState({ open: true, id: i })}
                  ></img>
                </Td>
                <Td>
                  <img
                    src="/images/trash-solid.svg"
                    width={20}
                    height={20}
                    onClick={() => {
                      dispatch({
                        type: "DELETE_TEACHER",
                        payload: {
                          id: i,
                        },
                      } as Action);
                    }}
                  ></img>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <div
        onClick={() => setShowAddForm(true)}
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          position: "absolute",
          bottom: 16,
          right: 16,
          backgroundColor: "black",
          fontWeight: 600,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        +
      </div>
      <Modal isOpen={showAddForm} onClose={() => setShowAddForm(false)}>
        <ModalContent style={{ marginLeft: "200px" }}>
          <Add onSubmit={() => setShowAddForm(false)} />
        </ModalContent>
      </Modal>
      {editFormState.id !== null && editFormState.open && (
        <Modal
          isOpen={true}
          onClose={() => setEditFormState({ open: false, id: null })}
        >
          <ModalContent style={{ marginLeft: "200px" }}>
            <Edit
              onSubmit={(faculty) => {
                dispatch({
                  type: "EDIT_TEACHER",
                  payload: {
                    faculty: faculty,
                    id: editFormState.id,
                  },
                } as Action);
                setEditFormState({ open: false, id: null });
              }}
              faculty={faculties[editFormState.id]}
            />
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default Faculties;
