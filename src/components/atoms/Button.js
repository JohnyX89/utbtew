import styled from '@emotion/styled';

const Button = styled.button`
    margin: 10px;
    padding: 0.5rem 0.25rem;
    cursor: pointer;
    transition: background-color 0.7s ease-out, color 0.7s ease-out;

    &:hover{
        background-color: darkblue;
        color: white;
    }
`;

export default Button;