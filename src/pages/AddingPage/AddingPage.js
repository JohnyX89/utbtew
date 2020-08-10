import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios';

import Content from "../../components/atoms/Content";

import Button from '../../components/atoms/Button';
import Form from '../../components/atoms/Form';
import Input from '../../components/atoms/Input';
import TextArea from '../../components/atoms/TextArea';
import HeadingOne from '../../components/atoms/HeadingOne';

import { NavLink } from 'react-router-dom';


const AddingPage = () => {
    const [title, setTitle] = useState('');
    const [directions, setDirections] = useState('');
    const [preparationTime, setPreparationTime] = useState(0);
    const { push } = useHistory();


    const createMeal = (title, directions, preparationTime) => {
        const meal = {
            title: title,
            directions: directions,
            // lastModifiedDate: new Date().toISOString(),
            preparationTime: preparationTime
        };

        return meal;
    }

    const handleAdd = async () => {
        const meal = createMeal(
            title,
            directions,
            preparationTime
        );

        try {
            await axios.post("https://exercise.cngroup.dk/api/recipes", meal);
            localStorage.setItem(meal.title, meal.directions);
            push('/');

        } catch (error) {
            alert("Error");
            console.log(localStorage);
            push('/');
        }
    };

    const clearInputs = title === '' || directions === '' || preparationTime === '';

    return (
        <Content>
            <HeadingOne>Adding page</HeadingOne>
            <Form>
                <Input placeholder="Title" onChange={(event) => setTitle(event.target.value)} name='title'></Input>
                <TextArea placeholder="Directions" onChange={(event) => setDirections(event.target.value)} name='directions'></TextArea>
                <Input type="number" placeholder="Preparation time" onChange={(event) => setPreparationTime(event.target.value)} name='preparationTime'></Input>
                <Button onClick={() => { handleAdd() }} disabled={clearInputs}>Add</Button>
                <NavLink exact to="/"><Button>Cancel</Button></NavLink>
            </Form>
        </Content>
    )

};

export default AddingPage;