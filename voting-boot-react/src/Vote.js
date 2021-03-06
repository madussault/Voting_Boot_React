//Marc-André Dussault Gr 427

import {Button, Box, TableContainer, Table, Tbody, Tr, Td} from "@chakra-ui/react";

function vote({candidates, setCandidates, setComponentToRender}) {

    // Ajoute les votes aux candidats de la liste
    const handleOnClickEvent = (event, votedCandidate) => {
        const updatedCandidates = candidates.map(candidate => {
            if (candidate.id === votedCandidate.id) {
                return {...candidate, voteCount: candidate.voteCount + 1};
            }
            return candidate;
        });
        setCandidates(updatedCandidates);
    }

    // Conçoit la table avec le nom des candidats tirés de la liste
    const voteCandidateButtons = candidates.map(candidate =>
        <Tr key={candidate.id}>
            <Td>
                {candidate.name}
            </Td>
            <Td>
                <Button textAlign="right" type="button" colorScheme="blue" onClick={(event) => handleOnClickEvent(event, candidate)}>
                    Vote!
                </Button>
            </Td>
        </Tr>
    );

    return(
        <>
            <Button type="submit" colorScheme='red' onClick={() => setComponentToRender("renderResultats")}>Show results!</Button>
            <Box borderRadius='md' maxW="400px" bg='white' color='black' mt="20">
                <TableContainer>
                    <Table className="candidatesListing" variant='simple' colorScheme='blackAlpha'>
                        <Tbody>
                            {voteCandidateButtons}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}

export default vote
