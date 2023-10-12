import {useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import './dogsSearching.scss';

export default function DogsSearching() {
    const [value, setValue] = useState("");
    let navigate = useNavigate()
    const [breed, setBreed] = useState("")


    return (
        <div id='search-section'>
            <div id='menu'>
                <button id='random-btn' onClick={() => navigate('dogs/random')}>Show random dog</button>

                <label id='input-breed'>
                    <input
                        type='text'
                        placeholder='Enter a breed'
                        name='breed'
                        value={value}
                        onChange={e => setBreed(e.target.value)}
                        onInput={e => setValue(e.target.value)}
                    />
                </label>
                <button
                    id='breed-btn'
                    onClick={() => navigate(`dogs/${breed}`)}
                    disabled={!value}
                    className={!value && 'disabled'}
                >
                    Show breed
                </button>
                <button
                    id='sub-breed-btn'
                    onClick={() => navigate(`dogs/${breed}/sub-breeds`)}
                    disabled={!value}
                    className={!value ? 'disabled' : undefined}
                >
                    Show sub-breeds
                </button>

                <button id='all-breed-btn' onClick={() => navigate('dogs/all-breeds')}>Show all breeds</button>
            </div>

            <div id='dog-container'>
                <Outlet />
            </div>
        </div>
    )
}