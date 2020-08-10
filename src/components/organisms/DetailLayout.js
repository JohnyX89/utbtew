import React from "react";
import Button from "../atoms/Button";
import Content from "../atoms/Content";
import Para from "../atoms/Paragraph";
import HeadingOne from '../atoms/HeadingOne'
import HeadingFour from '../atoms/HeadingFour'
import { NavLink } from 'react-router-dom';

import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';


const DetailLayout = ({
    title,
    directions,
    ingredients,
    preparationTime,

    editedId,
    editedTitle,
    editedDirections,
    editedPreparationTime,

    setEditedTitle,
    setEditedDirections,
    setEditedPreparationTime,

    onEditClick,
    onDeleteClick,
    onEditUpdateClick,
    onEditCancelClick,

}) => {

    const renderIngredients = () => {
        return (
            <ul>
                {ingredients.map((piece) => (
                    <li key={piece.name.toString()}> {piece.name}, {piece.amount} {piece.amountUnit} </li>
                ))}
            </ul>
        )
    }


    const renderNormalView = () => {
        return (
            <>
                <HeadingOne>{title}</HeadingOne>
                <HeadingFour>Postup:</HeadingFour>
                <Para>
                    {directions}
                </Para>
                <div>
                    <HeadingFour>Ingredience:</HeadingFour>
                    {ingredients !== undefined ? renderIngredients() : null}
                </div>
                <div style={{ marginBottom: '20px', color: 'darkblue' }}>
                    <b> Doba vaření: {preparationTime} min </b>
                </div>
                <Button onClick={onEditClick}>Edit</Button>
                <Button onClick={onDeleteClick}>Delete</Button>
                <NavLink exact to="/"><Button>Back</Button></NavLink>
            </>
        )
    }

    const renderEditView = () => {
        return (
            <>
                <HeadingOne>{title}</HeadingOne>
                <div>
                    <Input type="text" value={editedTitle} onChange={event => setEditedTitle(event.target.value)} />
                    <TextArea type="text" value={editedDirections} onChange={event => setEditedDirections(event.target.value)}> </TextArea>

                    <Input type="text" value={editedPreparationTime} onChange={event => setEditedPreparationTime(event.target.value)} />
                    <Button onClick={onEditUpdateClick}>Update</Button>
                    <Button onClick={onEditCancelClick}>Cancel</Button>
                </div>
            </>
        )
    }


    return (
        <Content>
            {editedId !== '' ? renderEditView() : renderNormalView()}
        </Content>
    )
};


export default DetailLayout;