import React from 'react'
import Item from './ExpenseItem';
import {MdDelete} from 'react-icons/md';
import styled from 'styled-components';

export default function ExpenseList({expenses, handleEdit,handleDelete,clearItems}) {
    return (
        <>
        
        <StyledUl className="list">
            {expenses.map(expense => {
                return <Item handleEdit={handleEdit} handleDelete={handleDelete} key={expense.id} expense={expense}/>
            })}
        </StyledUl>
        
        {expenses.length>0 && <StyledButton className="btn" onClick={clearItems}>Wyczyść<MdDelete className="btn-icon" /></StyledButton>}
        </>
    )
}

const StyledUl = styled.ul`
    text-decoration: none;
    list-style: none;
    padding: 0;

`

const StyledButton = styled.button`
        border: none;
    padding: 5px 15px;
    font-size: 12px;
    border-radius: 10px;
    background-color: white;
    color: black;
    border: 2px solid grey;
    margin: 5px auto;
    font-weight: 700;
    margin-left: 10px;
    .btn-icon {
        margin-left: 10px;
}
@media(min-width:500px) {
        margin: 10px 30px;
    }
`
