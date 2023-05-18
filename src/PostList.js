import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function () {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center my-5'>Axios --- Post List</h2>
                    {data.map(item => (
                        <div class="card col-sm-4 mt-2">
                            <div class="card-body" key={item.id}>
                                <h5 class="card-title">{item.title}</h5>
                                <p class="card-text"><b>Description: </b>{item.body}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
