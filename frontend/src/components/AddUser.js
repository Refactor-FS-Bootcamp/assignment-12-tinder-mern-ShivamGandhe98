import React, { useState } from 'react';
import axios from "axios";

const AddUser = () => {
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(name === '' || imgUrl === ''){
            alert("All the fields are mandatory!")  
            return  
        }else{
            const url ='http://localhost:8000/tinder/cards';
            axios.post(url, {name, imgUrl}).then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
        setName('');
        setImgUrl('');
    }

    return (
        <div className="ui main">
                <h2>Add People</h2>
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)}/>                    
                    </div>
                    <div className="field">
                        <label htmlFor="imageUrl">ImageURL</label>
                        <input type="text" id="imageUrl" placeholder="Enter Image URL" value={imgUrl} onChange={e => setImgUrl(e.target.value)}/>                    
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
    )
}

export default AddUser
