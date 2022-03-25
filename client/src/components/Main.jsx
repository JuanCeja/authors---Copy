import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Main = (props) => {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteAuthor = (deleteId) => {
        console.log(deleteId)
        axios.delete("http://localhost:8000/api/authors/" + deleteId)
        .then( res => {
            setAuthors(authors.filter(author => author._id !== deleteId))
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/create/author'}>Add an author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <td>Author</td>
                        <td>Actions Available</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, idx) => {
                            return (
                                <tr key={author._id}>
                                    <td>{author.name}</td>
                                    <td>
                                        <div>
                                            <button><Link to={`/edit/author/${author._id}`}>edit</Link></button>
                                            <button onClick={ () => deleteAuthor(author._id)}>delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Main