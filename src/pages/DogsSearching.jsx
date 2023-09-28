import {useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";

export default function DogsSearching() {
    const [value, setValue] = useState("");
    let navigate = useNavigate()
    const [breed, setBreed] = useState("")


    return (
        <>
            <div id='menu'>
                <button onClick={() => navigate('dogs/random')}>Show random dog</button>

                <label>
                    <input
                        type='text'
                        placeholder='Enter a breed'
                        name='breed'
                        value={value}
                        onChange={e => setBreed(e.target.value)}
                        onInput={e => setValue(e.target.value)}
                    />
                </label>
                <button onClick={() => navigate(`dogs/${breed}`)} disabled={!value}>Show breed</button>
                <button onClick={() => navigate(`dogs/${breed}/sub-breeds`)} disabled={!value}>Show sub-breeds</button>

                <button onClick={() => navigate('dogs/all-breeds')}>Show all breeds</button>
            </div>

            <div id='container'>
                <Outlet />
            </div>
        </>
    )
}