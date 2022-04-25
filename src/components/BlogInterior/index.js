import './BlogInterior.scss';

const BlogInterior = () => {
    const body = document.body;
    if (!body.className) {
        body.classList.add("background-color-pink");
    }

    return (
        <div>blog interior</div>
    )
}

export default BlogInterior;