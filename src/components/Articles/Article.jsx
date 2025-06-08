import styled from "styled-components";
import Tags from "../Tags";

const IMAGE_NOT_FOUND = 'No image found';
const PARAGRAPH_NOT_FOUND = 'No Paragraph found';
const isThereAnyElement = (elements) => elements.length > 0;
const getFirstImageFromImages = (images) => images[0].src;
const getFirstParagraphFromParagraphs = (paragraphs) => paragraphs[0].innerHTML;
const getTagElementsFromHTML = (element, tag) => element.getElementsByTagName(tag);
const setHtmlTextToHTML = (htmlText) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlText;
    return tempDiv;
}
const getFirstImageUrl = (htmlText) => {
    const htmlElement = setHtmlTextToHTML(htmlText);
    const images = getTagElementsFromHTML(htmlElement, 'img');
    return isThereAnyElement(images) ? getFirstImageFromImages(images) : IMAGE_NOT_FOUND;
}



const getFirstParagraphText = (htmlText) => {
    const htmlElement = setHtmlTextToHTML(htmlText);
    const paragraphs = getTagElementsFromHTML(htmlElement, 'p');
    return isThereAnyElement(paragraphs) ? getFirstParagraphFromParagraphs(paragraphs) : PARAGRAPH_NOT_FOUND;
}

const Article = ({item}) => {
    const image = getFirstImageUrl(item.content);
    const paragraph = getFirstParagraphText(item.content);
    return (
        <Container className="article-container" onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}>
            {<Tags data={item.categories} />}
            <span title={item.title} id='title'>{item.title}</span>
            <div className="content-container">
                <div className="content">
                    
                    <span title={paragraph} id='description'>{paragraph.substring(0, 160)+'...'}</span>
                    <span id='details' open>{item.author}</span>
                </div>
                <div className="image-container">
                    {<img src={image} alt={item.title} />}
                </div>
            </div>
            
            
        </Container>
    )
};

const Container = styled.article`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 280px;
    border: 1px solid var(--light-gray);
    border-radius: 8px;
    width: 300px;
    background-color: var(--white);
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    
    > #title {
        text-align: left;
        border-top: 1px solid var(--light-gray);
        align-items: center;
        /* font-weight: bold; */ /* Poppins is already bold */
        font-family: 'Poppins', sans-serif;
        color: var(--primary-color);
        background: var(--white);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 10px 10px;
    }
    
    .content-container {
        display: flex;
        background-color: var(--white); /* Ensure container bg is white */
        border-radius: 0 0 8px 8px; /* Keep rounded bottom corners */
    }

    .content-container .content {
        display: flex;
        flex-direction: column;
        background: var(--white);
        padding: 0 0 10px 0;
        border-radius: 0 0 0 8px;
        justify-content: space-around;
        gap: 5px;
        flex-grow: 1; /* Allow content to take available space */

        > span {
            text-align: left;
            padding: 0px 10px;
        }

        > #description{
            color: var(--secondary-color);
            padding: 0 10px 10px 10px;
        }

        > #details {
            font-size: 10px;
            font-weight: 600; /* Keep or adjust as needed */
            color: var(--secondary-color);
            /* text-decoration: overline; */
            /* text-decoration-thickness: from-font; */
            /* text-decoration-style: wavy; */
            /* text-decoration-color: black; */
            font-style: italic; /* Changed decoration */
        }
    }

    .image-container {
        display: flex;
        background: var(--white);
        border-radius: 0 0 8px 0px; /* Keep rounded bottom right corner */
        padding: 10px; /* Add some padding around the image */

        img {
            align-self: center;
            width: 120px; /* Slightly reduced size */
            height: 120px; /* Slightly reduced size */
            object-fit: contain;
            border-radius: 4px; /* Rounded corners for the image itself */
        }
    } 
`;

export default Article;