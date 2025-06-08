import styled from "styled-components";

const SocialCard = ({item}) => {

    const openWebsite = (url) => {
        window.open('https://'+url);
    }
    return(
        <Container hover={item.hover} onClick={()=>openWebsite(item.url)} className="card">
            <Image src={item.img}/>
            <Content>
                <Description>{item.description}</Description>
                <Details>{item.url}</Details>
            </Content>
            
        </Container>
    )
}

const Container = styled.article`
    min-width: 280px;
    max-width: 678px;
    display: flex;
    gap: 10px;
    padding: 10px;
    flex: 1 0 0;
    border: 1px solid var(--light-gray);
    border-radius: 6px;
    background-color: var(--white);
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        border: 1px solid var(--primary-color);
        /* Assuming props.hover is a very light, subtle color.
           If not, replace with a light shade like: #E7F3FF (light blue for --primary-color: #007bff) */
        background: ${props => props.hover ? props.hover : 'var(--light-gray)'};
        transform: translateY(-1px); /* Subtle lift */

        div {
            span:nth-child(1) { /* Description */
                color: var(--primary-color); /* Or keep as var(--text-color) if preferred */
            }
      
            span:nth-child(2) { /* Details */
                color: var(--primary-color);
                font-weight: 700; /* Slightly bolder on hover */
            }
        }
    }
`;

const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 4px; /* Rounded corners for the image */
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-direction: column;
`;

const Description = styled.span`
    font-size: 0.9rem;
    color: var(--text-color);
    text-align: left;
    align-self: start;
`;

const Details = styled.span`
    font-size: 0.8rem;
    /* font-size: 10px; */ /* Redundant with 0.8rem */
    font-weight: 600;
    text-align: left;
    color: var(--secondary-color);
    /* text-decoration: overline; */
    /* text-decoration-thickness: from-font; */
    /* text-decoration-style: wavy; */
    /* text-decoration-color: black; */
    font-style: italic; /* Modernized text decoration */
`

export default SocialCard;