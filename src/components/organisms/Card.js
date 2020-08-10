import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import CardContent from '../molecules/CardContent';

const CardsWrapper = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const Card = ({ data }) => {
    const { push } = useHistory();
    const handleGoToDetail = (id) => push(`/meal/${id}`)

    return (
        <CardsWrapper>
            {data.map((meal) =>
                <CardContent
                    key={meal._id}
                    id={meal._id}
                    title={meal.title}
                    preparationTime={meal.preparationTime}
                    onGoToDetail={() => handleGoToDetail(meal._id)} />
            )}
        </CardsWrapper>
    );
};

export default Card;