//Marc-André Dussault Gr 427

import './App.css';
import AjouterCandidat from "./AjouterCandidat";
import Vote from "./Vote";
import {useState} from "react";
import Resultats from "./Resultats";


function App() {

    const [ComponentToRender, setComponentToRender] = useState("renderAjouterCandidat");
    const [candidates, setCandidates] = useState([]);


    return (
        <div className="App">
            <header className="App-header">
                {
                    {
                        "renderAjouterCandidat":
                            <AjouterCandidat
                                candidates = {candidates}
                                setCandidates = {setCandidates}
                                setComponentToRender = {setComponentToRender}
                            />,
                        "renderVote":
                            <Vote
                                candidates = {candidates}
                                setCandidates = {setCandidates}
                                setComponentToRender = {setComponentToRender}
                            />,
                        "renderResultats":
                            <Resultats
                                candidates = {candidates}
                            />
                    }[ComponentToRender]
                }
            </header>
        </div>
    );
}

export default App;
