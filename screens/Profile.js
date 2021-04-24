import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'

export default function Profile() {

    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')

            const json = await response.json();

            setPosts(json);

        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <>
            <Text>Here is the profile page</Text>

            { posts.map((post, index) => {
                return (
                    <Text>Hi</Text>
                )
            })}
        </>

    )
}
