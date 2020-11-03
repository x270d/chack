import React from "react";
import { Container } from "../../globalStyles";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { deleteJoke, deleteAllJoke } from "../../actions/actions";
import { Link } from "react-router-dom";
import { RootState } from '../../reducers';
import { Button } from "../ui/Button";

export const MyJokes = () => {
    const dispatch = useDispatch();
    const myJoke: string[] = useSelector((state: RootState) => state.likeJoke);

    return (
        <Container>
            <Link to="/">Home</Link>
            {myJoke.length !== 0 ?
                <MyJokeInner>
                    <MyJokeList>
                        {myJoke.map(i => (
                            <MyJokeListItem key={i}>
                                {i}
                                <Button onClick={() => dispatch(deleteJoke(i))}>Delete joke</Button>
                            </MyJokeListItem>
                        ))}

                    </MyJokeList>
                    <DelAllButton onClick={() => dispatch(deleteAllJoke())}>Delete All Jokes</DelAllButton>
                </MyJokeInner> : <H1>No jokes:(</H1>}
        </Container>
    )
}

const MyJokeInner = styled.div`
    margin: 30px 0;
`;

const MyJokeList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
`;
const MyJokeListItem = styled.li`
    width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin: 15px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
`;

const DelAllButton = styled(Button)`
    display: block;
    margin-right: auto;
    padding: 12px;
`;

const H1 = styled.h1`
    text-align: center;
    margin-top: 30px;
`;