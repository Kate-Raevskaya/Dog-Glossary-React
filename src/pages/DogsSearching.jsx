import {useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";

export default function DogsSearching() {
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
                        onChange={e => setBreed(e.target.value)}
                    />
                </label>
                <button onClick={() => navigate(`dogs/${breed}`)}>Show breed</button>
                <button onClick={() => navigate(`dogs/${breed}/sub-breeds`)}>Show sub-breeds</button>

                <button onClick={() => navigate('dogs/all-breeds')}>Show all breeds</button>
            </div>

            <div id='container'>
                <Outlet />
            </div>
        </>
    )
}