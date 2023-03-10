import React from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
    const { postId } = useParams();

    return (
        <div>
            <h3>PostDetail Page</h3>
            postId : {postId}
        </div>
    );
}
