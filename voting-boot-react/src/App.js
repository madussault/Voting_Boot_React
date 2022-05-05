//Marc-André Dussault Gr 427

import './App.css';
import AjouterCandidat from "./AjouterCandidat";
import Vote from "./Vote";
import {useState} from "react";
import Resultats from "./Resultats";


function App() {

    const [ComponentToRender, setComponentToRender] = useState("renderAjouterCandidat");
    const [candidates, setCandidates] = useState([]);

    function componentAjouterCandidat(){
        return(
            <AjouterCandidat
                _candidates = {candidates}
                _setCandidates = {setCandidates}
                _setComponentToRender = {setComponentToRender}
            />
        );
    }

    function componentVote(){
        return(
            <Vote
                _candidates = {candidates}
                _setCandidates = {setCandidates}
                _setComponentToRender = {setComponentToRender}
            />
        );
    }

    function componentResultats(){
        return(
            <Resultats
                _candidates = {candidates}
                _setCandidates = {setCandidates}
            />
        );
    }

    function switchComponentToRender(){
        switch(ComponentToRender) {
            case "renderAjouterCandidat":
                return componentAjouterCandidat();
            case "renderVote":
                return componentVote();
            case "renderResultats":
                return componentResultats();
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                {switchComponentToRender()}
            </header>
        </div>
    );
}

export default App;
