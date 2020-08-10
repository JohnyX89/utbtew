import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import DetailLayout from '../../components/organisms/DetailLayout';
import useMealDetail from "../../hooks/useMealDetail";

const DetailPage = () => {
  const [editedId, setEditedId] = useState('');
  const [editedTitle, setEditedTitle] = useState('');
  const [editedIngredients, setEditedIngredients] = useState('');
  const [editedDirections, setEditedDirections] = useState('');
  const [editedPreparationTime, setEditedPreparationTime] = useState(0);

  const { push } = useHistory();
  const { id } = useParams();

  const detail = useMealDetail({ id });


  const handleRemoveClicked = async () => {
    await axios.delete(`https://exercise.cngroup.dk/api/recipes/${id}`);
    push('/');
  }

  const handleShowEditClicked = detail => {
    setEditedId(detail.mealDetails._id);    
    setEditedTitle(detail.mealDetails.title);
    setEditedIngredients(detail.mealDetails.ingredients);
    setEditedDirections(detail.mealDetails.directions);
    setEditedPreparationTime(detail.mealDetails.preparationTime);
  }


  const handleEditUpdateClicked = async () => {
    const meal = {
      _id: detail.mealDetails._id,
      title: editedTitle,
      directions: editedDirections,
      preparationTime: editedPreparationTime,
      ingredients: editedIngredients,
    }

    try {
      await axios.post(`https://exercise.cngroup.dk/api/recipes/${detail.mealDetails._id}`, meal);
      push('/');


    } catch (error) {
      console.log('error');
    }
  };


  const handleEditCancelClicked = () => {
    setEditedId('');
  }


  const renderCardView = () =>
    <DetailLayout
      key={id}
      id={detail.mealDetails._id}
      title={detail.mealDetails.title}
      directions={detail.mealDetails.directions}
      ingredients={detail.mealDetails.ingredients}
      preparationTime={detail.mealDetails.preparationTime}

      editedId={editedId}
      editedTitle={editedTitle}
      editedDirections={editedDirections}
      editedPreparationTime={editedPreparationTime}

      setEditedId={setEditedId}
      setEditedTitle={setEditedTitle}
      setEditedDirections={setEditedDirections}
      setEditedPreparationTime={setEditedPreparationTime}

      onDeleteClick={() => handleRemoveClicked()}
      onEditClick={() => handleShowEditClicked(detail)}
      onEditUpdateClick={() => handleEditUpdateClicked()}
      onEditCancelClick={() => handleEditCancelClicked()}

    />


  return (
    <>
      {renderCardView()}
    </>
  );
}

export default DetailPage;
