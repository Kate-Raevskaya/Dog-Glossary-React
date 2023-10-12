import {useRouteError} from "react-router-dom";
import '../errorPage.scss';


export default function UnknownBreed() {
    let error = useRouteError()

    return (
        <p id='unknown'>{error.message}</p>
    )
}