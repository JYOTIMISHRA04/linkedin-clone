import React, { useEffect, useState } from 'react'
import "./Feed.css";
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import InputOption from './InputOption.js';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import { db } from './firebase';
import { Post } from './Post';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";



function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )))
            ))
    }, [])

    const sendPost = e => {
        e.preventDefault();


        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };




    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateRoundedIcon />
                    <form className='form'>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageRoundedIcon} title='Photo' color='#70B5F9' />
                    <InputOption Icon={CalendarMonthRoundedIcon} title='Event' color='#E7A33E' />
                    <InputOption Icon={ArticleRoundedIcon} title='Write Article' color='##7FC15E' />
                </div>
            </div>

            {/* post */}
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}

                    />

                ))}

            </FlipMove>


        </div>
    )
}

export default Feed