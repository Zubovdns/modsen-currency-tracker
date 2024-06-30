import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 
    p, a, h1, h2,h3,h4,h5,h6{
        font-style: normal;
    }
  
    
    h1,h2,h3,h4,h5,h6{
          font-family: sans-serif;
    }
    a{
        text-decoration:none;
    }
    ul{
        list-style-type: none;
    }
    body{
        margin: 0 auto;
        padding: 0;
        background-color: #030304;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        font-family: Arial, sans-serif;
       
    }   
    #root {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items:center;
    }
  
  
`
