import './Service.scss';

const Service = () => {
    const body = document.body;
    if (!body.className) {
        body.classList.add("background-color-purple");
    }

    return (
        <div>service</div>
    )
}

export default Service;