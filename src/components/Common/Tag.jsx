import styled from "styled-components";

const Tag = styled.span`
    background: ${({background}) => background ?? "var(--light-gray)"};
    color: ${({color}) => color ? color : "var(--primary-color)"};
    padding: 4px 10px;
    border: 1px solid ${props => props.bordercolor ? props.bordercolor : "var(--primary-color)"};
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 11px;
    height: fit-content;
    border-radius: 4px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      /* Example hover: slightly darken background, adjust text for contrast if needed */
      background: ${({background, theme}) => background ? (background === "var(--light-gray)" ? "#D3D9DF" : background) : "#D3D9DF"}; /* Darken --light-gray or custom */
      color: ${({color}) => color ? (color === "var(--primary-color)" ? "#0056b3" : color) : "#0056b3"}; /* Darken --primary-color or custom */
    }
`;

export default Tag;