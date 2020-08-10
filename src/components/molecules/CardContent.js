import React from 'react';
import styled from '@emotion/styled';
import HeadingTwo from '../atoms/HeadingTwo';
import Image from '../atoms/Image';
import Time from '../atoms/Time';

const CardContentWrapper = styled.div`
    margin: 1rem;
    padding: 1rem;
    text-align: center;
    width: 18%;
    min-width: 15%;
    height: 250px;
    min-height: 200px;
    cursor: pointer;
    border: 1px solid black;
    background-color: gainsboro;
    flex-direction: column;
    transition: border 0.7s ease-out;
    display: flex;

    &:hover{
        box-shadow: 0 8px 20px darkblue;
    }
`;

const CardContent = ({ title, preparationTime, onGoToDetail }) => {
    return (
        <CardContentWrapper onClick={onGoToDetail}>
            <div>
                <Image src="https://cdn.vox-cdn.com/thumbor/M223kCurGxrvURmDnsw4f1I0l1U=/0x0:5500x3671/920x613/filters:focal(2310x1396:3190x2276):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66563372/GettyImages_849177432.0.jpg" />
            </div>
            <div>
                <HeadingTwo>{title}</HeadingTwo>
                <Time>{preparationTime} min</Time>
            </div>
        </CardContentWrapper>
    );
};

export default CardContent;