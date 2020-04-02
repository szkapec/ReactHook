import React from 'react'
import {MdSend} from 'react-icons/md'
import styled from 'styled-components';
export default function ExpenseForm({charge,amount,handleCharge,handleAmount,handleSubmit, edit}) {
    return (
        <form onSubmit={handleSubmit}>
            <StyledForm>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">
                        <StyledInput type="text" className="form-control" id="charge" name="charge" placeholder="produkt" value={charge} onChange={handleCharge}></StyledInput>
                    </label>
                </div>
            </div>
            <div>
                <div className="">
                    <label htmlFor="amount">
                        <StyledInput type="text" className="form-control" id="amount" name="amount" placeholder="cena" value={amount} onChange={handleAmount}></StyledInput>
                    </label>
                </div>
            </div>
            </StyledForm>
            <StyledButton type="submit" className="btn">{edit?'Edytuj':"Wyślij"}<MdSend className="btn-icon"/></StyledButton>
        </form>
    )
}

const StyledForm = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledInput = styled.input`
    width: 200px;
    padding: 5px 15px;  
    margin: 10px;
    border-radius:10px;
    @media (min-width: 400px){
        width: 250px;
    }
    @media(min-width:500px) {
        margin: 10px 30px;
    }
    @media (min-width: 700px){
        width: 300px;
    }


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
    @media(min-width:500px) {
        margin: 10px 30px;
    }
    .btn-icon {
        margin-left: 10px;

}
`