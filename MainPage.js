import Toolbar from '@mui/material/Toolbar';
import { retrievePosts, getUsers } from './firebaseConfig';
import PostCard from './PostCard'
import { useState, useEffect } from 'react';
import { compareUsers, Person } from './Recommender';

export default function MainPage(props) {
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        retrievePosts(props.user.uid).then(
            (items) => {
                getUsers().then((users) => {
                    var cUser = null
                    for (var key in users) {
                        var user = users[key]
                        if (key === props.user.uid) {
                            cUser = user
                            
                            delete users[key]
                            break
                        }
                    }
                    console.log(users)
                    var p = new Person(cUser.ageRange, cUser.biography.split(" "))

                    var similarities = []
                    for (var key in users) {
                        var user = users[key]
                        var otherP = new Person(user.ageRange, user.biography.split(" "))
                        similarities.push(compareUsers(p,otherP))
                    }
                    var closestUserIdx = similarities.indexOf(Math.max(...similarities));

                    var bestUser = users[Object.keys(users)[closestUserIdx]]

                    var posts = []
                    for(var key in items){
                        var item = items[key]
                        if(item.uuid==bestUser.uuid || item.uuid==props.user.uid){
                            posts.push(item)
                        }
                    }
                    console.log(posts)
                    setData(posts)

                })
            }
        )

    }, [])

    return (
        <div style={{ marginLeft: "auto", height: "100vh", width: `calc(100vw - ${300}px)` }}>
            <Toolbar />
            <div style={{ margin: 36 }}>
                {data.map((post) => {
                    return (
                        <PostCard description={post.text} title={post.title} timeStamp={post.timeStamp} id={post.uuid} />
                    )
                })}

            </div>
        </div>
    )

}