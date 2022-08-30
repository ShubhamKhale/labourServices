import { useState,useCallback,useEffect } from "react";
const names = ['Finding Labour Nearby you...', 'Fetching results...', 'Getting Information....']

function ChangeText() {
    const [newName, setnewName] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return(
        <div>{newName}</div>
    )
}

export default ChangeText;