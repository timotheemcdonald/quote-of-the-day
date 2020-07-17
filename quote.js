import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledContainer = styled.div`

max-width:90%;
margin:2.5% auto;
padding:2.5%;


`
const StyledTitle = styled.div`
text-align:center;
display:flex;
justify-content:center;
margin-bottom:5%;
`

const StyledQuote = styled.div`
max-width:90%;
display:flex;
justify-content:flex-start;
margin-bottom:2.5%;

`

const StyledAuthor = styled.div`
display:flex;
justify-content:flex-end;

`

function Quote() {

    const URL = 'https://quote-garden.herokuapp.com/api/v2/quotes/random'
    const [ dayQuote, setQuote ] = useState('')
    const [ dayAuthor, setAuthor] = useState('')
    
        useEffect(() => {
    
            axios.get(URL)
            .then( value => {
               
                setQuote(value.data.quote.quoteText)
              
                setAuthor(value.data.quote.quoteAuthor)
           
            })
            .catch( error => {
                console.log('error')
            })
    
        }, [])

        return (
            <StyledContainer>
             <StyledTitle><h1>Quote of the Day</h1></StyledTitle>   
        <StyledQuote><h2>{dayQuote}</h2></StyledQuote> 
               <StyledAuthor><h3> - {dayAuthor}</h3></StyledAuthor> 
            </StyledContainer>
        )}

export default Quote;