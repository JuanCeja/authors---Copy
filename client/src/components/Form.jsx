import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Form = () => {

    const history = useHistory()

    const [name, setName] = useState("");

    const [errors, setErrors] = useState([])

    const createAuthor = (e) => {
        e.preventDefault();
        console.log(name);

        const newAuthor = {
            name: name
        }

        axios.post('http://localhost:8000/api/authors', newAuthor)
            .then(res => {
                console.log(res.data)
                console.log('SUCCESS CLIENT')
                history.push('/')
            })
            .catch(err => {
                console.log('ERROR CLIENT');
                console.log(err.response.data)

                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })

    }
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/"}>Home</Link>
            <p>Add a new author:</p>
            <fieldset>
                <p>Name</p>
                <p>{errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}</p>
                <input type="text" onChange={e => setName(e.target.value)} />
                <button><Link to={"/"}>Cancel</Link></button>
                <button onClick={createAuthor}>Submit</button>
            </fieldset>
        </div>
    )
}

export default Form