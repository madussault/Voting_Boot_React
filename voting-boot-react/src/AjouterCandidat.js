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
