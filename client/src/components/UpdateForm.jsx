import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

const UpdateForm = () => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([])

    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            console.log(res.data)
            setName(res.data.name)
        })
        .catch(err => console.log(err))
    }, [id])

    const UpdateAuthor = (e) => {
        e.preventDefault();
        console.log(name)

        const updatedAuthor = {
            name: name,
        }

        axios.put(`http://localhost:8000/api/authors/${id}`, updatedAuthor)
        .then(res => history.push('/'))
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
            <p>Edit this author:</p>
            <fieldset>
                <p>Name</p>
                <p>{errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}</p>
                <input type="text" onChange={e => setName(e.target.value)} value={name}/>
                <button><Link to={"/"}>Cancel</Link></button>
                <button onClick={UpdateAuthor}>Submit</button>
            </fieldset>
        </div>
    )
}

export default UpdateForm