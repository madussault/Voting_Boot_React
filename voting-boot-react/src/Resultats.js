//Marc-André Dussault Gr 427

import {Box, TableContainer, Table, Tbody, Tr, Td, Th, Thead} from "@chakra-ui/react";

function Resultats({candidates}) {

    // Détermine le candidat gagnant
    function getMostVoted(){
        const voteCounts = candidates.map(candidate => candidate.voteCount);
        const highestVoteCount = Math.max(...voteCounts);
        return candidates.filter(candidate => candidate.voteCount === highestVoteCount)[0];
    }

    // Ajoute les candidats dans la table à partir de la liste
    const candidatesListing = candidates.map(candidate=>
        <Tr key={candidate.id}>
            <Td textAlign="center">{candidate.name}</Td>
            <Td textAlign="center">{candidate.voteCount}</Td>
        </Tr>
    )

    return(
        <>
            <Box borderRadius='md' maxW="400px" p="20px" bg='azure' color='black'>
                {getMostVoted().name} is the winner!
            </Box>
            <Box borderRadius='md' maxW="400px" bg='white' color='black' mt="20">
            <TableContainer>
                <Table className="candidatesListing" variant='simple' colorScheme='blackAlpha'>
                    <Thead>
                        <Tr>
                            <Th>Candidate name</Th>
                            <Th>Vote Count</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {candidatesListing}
                    </Tbody>
                </Table>
            </TableContainer>
            </Box>
        </>
    );
}

export default Resultats