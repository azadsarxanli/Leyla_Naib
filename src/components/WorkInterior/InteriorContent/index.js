import './InteriorContent.scss';
import contentData from './content-data.json';
import { useState } from 'react';

const InteriorContent = () => {
    const [contents, setContents] = useState(contentData);

    return (
        <section className="interior-content">
            {contents.map((contentItem, index) => (
                <p key={index}>{contentItem.text}</p>
            ))}
        </section>
    )
}

export default InteriorContent;