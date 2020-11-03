import React, { useEffect, useState } from "react";
import { Container } from "../../globalStyles";
import styled from "styled-components/macro";
import { getCategories, getJokeCategories, addNewJoke, deleteJoke } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from '../../reducers';
import { Button } from "../ui/Button";
import { Spinner } from "../ui/Spinner";

export const Home = () => {
    const dispatch = useDispatch();
    const category = useSelector((state: RootState) => state.categories);
    const { isFetching, data, error } = useSelector((state: RootState) => state.joke);
    const myJoke: string[] = useSelector((state: RootState) => state.likeJoke);
    const [jokeTmt, setJokeTmt] = useState(false);
    const [jokeCat, setJokeCat] = useState('');

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    useEffect(() => {
        let timer: number
        if (jokeTmt) {
            timer = setInterval(() => { dispatch(getJokeCategories(jokeCat)) }, 3000);
        }
        return () => clearInterval(timer);
    }, [jokeTmt, jokeCat, dispatch]);

    const onHandleClick = (value: string) => {
        if (value) {
            setJokeCat(value)
            dispatch(getJokeCategories(value))
        }
    }

    const spinner = isFetching && <Spinner />
    const errorMessage = error && !isFetching && <h1>Error joke load</h1>
    const content = data && (
        <div>
            <JokeBox >{data.value}</JokeBox>
            {(myJoke.includes(data.value)) ?
                <Button onClick={() => dispatch(deleteJoke(data.value))}>Clear</Button> :
                <Button onClick={() => dispatch(addNewJoke(data.value))}>Add Joke</Button>}

            <Button
                disabled={jokeCat === ''}
                primary={jokeTmt}
                onClick={() => setJokeTmt(!jokeTmt)}
            >{jokeTmt ? 'Stop Timer' : 'Run Timer'}</Button>
            {jokeCat === '' && <p>Choise category for run timer</p>}
        </div>
    )

    return (
        <Container>
            <Link to="/myjokes">My jokes</Link>
            <CategoryList>
                {category.data && category.data.map((i) => (
                    <CategoryListItem
                        primary
                        key={i}
                        onClick={() => onHandleClick(i)}
                    >{i}
                    </CategoryListItem>
                ))}
            </CategoryList>
            {spinner}
            {content}
            {errorMessage}
        </Container >
    )
}

const CategoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const CategoryListItem = styled(Button)`
    margin: 15px 10px;
    @media (max-width: 440px){
        max-width: 100%;
    }
`;

const JokeBox = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 10px;
    max-width: 800px;
    margin: 20px auto;
    border-radius: 5px;
`
