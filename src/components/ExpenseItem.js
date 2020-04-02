import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md';
import styled from 'styled-components';

export default function ExpenseItem({expense,handleEdit,handleDelete}) {
    const {id, charge, amount} = expense
    return (
        <StyledLi className="item">
            <span className="expense">{charge}</span>
            <StyledSpan className="amount">{amount}zł</StyledSpan>
            <StyledImg>
                <StyledButton className="edit-btn" area-label="edit button" onClick={()=>handleEdit(id)}><MdEdit/></StyledButton>
                <StyledButton2 className="clear-btn" area-label="delete button" onClick={()=>handleDelete(id)}><MdDelete/></StyledButton2>
            </StyledImg>
        </StyledLi>
    )
}
const StyledButton = styled.button`
    margin-left: 5px;
    border: none;
    background-color: yellow;
    height: 30px;
    width: 30px;
    border-radius: 10px;
`
const StyledButton2 = styled.button`
    margin-left: 5px;
    border: none;
    background-color: red;
    height: 30px;
    width: 30px;
    border-radius: 10px;
`

const StyledImg = styled.div`
    padding-right: 20px;
`

const StyledLi = styled.li`

display: grid;
grid-template-columns: 1fr 50px 90px;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
margin: 20px 10px;
/* border: 1px solid black; */
padding: 10px 0 10px 5px;
border-radius: 5px;
/* box-shadow: 0px 0px 16px 9px rgba(117,115,117,1); */
box-shadow: 0px 0px 11px 0px rgba(117,115,117,1);
font-size: 12px;

:hover {
    box-shadow: 0px 0px 16px 10px rgba(117,115,117,1);
    font-size: 13px;
}
@media(min-width: 500px) {
    grid-template-columns: 1fr 150px 90px;
    padding: 10px 0 10px 20px;
    margin: 30px 30px;
}

@media(min-width: 800px) {
    font-size: 14px;
}
`

const StyledSpan = styled.span`
    text-align: center;
    font-weight: 700;
`