import { useState, useEffect } from 'react';
import Api from '../api/instance';

const useMealDetail = ({ id }) => {
    const [mealDetails, setMealDetails] = useState({
        mealDetails: [],
        error: "",
    });

    useEffect(() => {
        fetchMealDetails();
    }, []);

    const fetchMealDetails = async () => {
        try {
            const result = await Api.get(`recipes/${id}`);
            setMealDetails({
                mealDetails: result.data,
                error: result.data.error,
            });
        }
        catch ({ message }) {
            setMealDetails({
                ...mealDetails, 
                error: message,
            })
        }
    };

    return mealDetails;
}

export default useMealDetail;