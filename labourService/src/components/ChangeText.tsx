import { useState, useCallback, useEffect } from "react";
const names = ['Finding Labour Nearby you...', 'Fetching results...', 'Getting Information....']

function ChangeText() {
    const [newName, setnewName] = useState("");
    const TextStyling = {
        paddingTop: '20px',
        paddingLeft: '10px'
    };
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 500);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <div style={TextStyling}>{newName}</div>
    )
}

export default ChangeText;