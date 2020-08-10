import React from "react";
import { useHistory } from 'react-router-dom'

import useMealsList from "../../hooks/useMealsList";
import Card from "../../components/organisms/Card";
import Content from "../../components/atoms/Content";
import Button from '../../components/atoms/Button';
import HeadingOne from '../../components/atoms/HeadingOne';

const MainPage = () => {
  const { push } = useHistory();

  const meals = useMealsList();

  const handleGoToAddingPage = () => push(`/add`)

  

  return (
    <Content>
      <HeadingOne>Final project</HeadingOne>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button onClick={handleGoToAddingPage}>Add new meal</Button>
      </div>

      <Card
        data={meals.meals} />
    </Content>
  )

};

export default MainPage;
