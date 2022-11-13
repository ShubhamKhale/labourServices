import { t } from "i18next";
import { useState, useCallback, useEffect } from "react";
export const names = [t("Finding_Labour_Nearby_you..."), t("Fetching_results..."), t("Getting_Information....")]

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