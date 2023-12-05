const PostItem = ({user}) => {
    const {name:author, company:{name: title, catchPhrase:content} } = user
    return(
        <>
        <div>
            <h2>Author: {author}</h2>
            <h3>Title: {title}</h3>
            <p>-{content}</p>
        </div>
        </>
    )
}

export default PostItem;