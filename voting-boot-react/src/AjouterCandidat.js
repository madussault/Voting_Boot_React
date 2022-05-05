//Marc-André Dussault Gr 427

import {Input, Button, Box, Tr, Td, TableContainer, Table, Tbody} from '@chakra-ui/react'
import { v4 as uuid } from 'uuid';

function AjouterCandidat({candidates, setCandidates, setComponentToRender}){

    //Ajoute les candidats un à un dans la liste à partir de l'input
    const handleOnSubmitEvent = (e) => {
        e.preventDefault();
        const candidate = {id: uuid(),
            name: e.target.elements.namedItem('candidateName').value,
            voteCount: 0
        }
        setCandidates([...candidates, candidate]);
        e.target.reset();
    }

    // Conçoit la table avec le nom des candidats tirés de la liste
    const candidatesListing = candidates.map(candidate=>
        <Tr key={candidate.id}>
            <Td textAlign="center">{candidate.name}</Td>
        </Tr>
    );

    return(
        <>
            <form onSubmit={handleOnSubmitEvent}>
                <Input name='candidateName' width='auto' placeholder="Candidate's name" />
                <Button type="submit" colorScheme='blue'>Add Candidate</Button>
            </form>

            <Button type="submit" colorScheme='green' mt="10" onClick={() => setComponentToRender("renderVote")}>Start Vote!</Button>

            <Box borderRadius='md' maxW="400px" bg='white' color='black' mt="20">
                <TableContainer>
                    <Table className="candidatesListing" variant='simple' colorScheme='blackAlpha'>
                        <Tbody>
                            {candidatesListing}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}

export default AjouterCandidat

/*

Using the hook useRef for persistence of the form

import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import {useRef, useState} from "react";

function AjouterCandidat(){

    const addCandidateForm = useRef(null);
    const [candidateBoxes, setCandidateBoxes] = useState([]);

    const handleClickEvent = () => {
        const form = addCandidateForm.current;
        const candidateName = form['candidateName'].value;
        setCandidateBoxes([...candidateBoxes, <Box bg='tomato' w='100%' p={4} color='white'>{candidateName}</Box>]);
    }

    return(
        <>
            <form ref={addCandidateForm}>
                <Input name='candidateName' width='auto' placeholder="Candidate's name" />
                <Button colorScheme='blue' onClick={handleClickEvent}>Add Candidate</Button>
            </form>

            <Stack>
                {candidateBoxes}
            </Stack>
        </>
    );
}

export default AjouterCandidat

*/
