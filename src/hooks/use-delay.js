import {useEffect, useState} from "react";

const useDelay = delay => {
    const [isDelayed, setIsDelayed] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsDelayed(true);
        }, delay)
    })

    return isDelayed;
}

export default useDelay;