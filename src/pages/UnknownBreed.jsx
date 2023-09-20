import {useRouteError} from "react-router-dom";


export default function UnknownBreed() {
    let error = useRouteError()

    return (
        <p>{error.message}</p>
    )
}