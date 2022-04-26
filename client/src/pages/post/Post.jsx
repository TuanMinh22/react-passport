import './post.css'
import { posts } from '../../data'
import { useLocation } from 'react-router-dom'
export default function Post() {
    const location = useLocation();
    // const post = posts[location.pathname.split('/')[2] - 1]
    const path = location.pathname.split('/')[2]
    const post = posts.find(p => p.id.toString() === path)

    return (
        <div className="post">
            <img src={post.img} alt="" className="postImg" />
            <h1 className="postTitle">{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postlongDesc">{post.longDesc}</p>
        </div>
    )
}
