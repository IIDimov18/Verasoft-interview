import BouncingDotsLoader from "./BouncingDotsLoader";
import React, {useEffect} from "react";

const ErrorTab = () => {
    const [loading,setLoading] = React.useState(true);
    useEffect(()=>{
        setTimeout(() => setLoading(false), 2000);

    })
    console.log(loading);
    return (
        <div className="ErrorTab">
            {loading?<BouncingDotsLoader/>: <div className="no-item"><text>No Items</text></div>

            }


        </div>
    )
}

export default ErrorTab
