import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
    //Primary:
    --Blue: hsl(246, 80%, 60%);
    --Light-red-work: hsl(15, 100%, 70%);
    --Soft-blue-play: hsl(195, 74%, 62%);
    --Light-red-study: hsl(348, 100%, 68%);
    --Lime-green-exercise: hsl(145, 58%, 55%);
    --Violet-social: hsl(264, 64%, 52%);
    --Soft-orange-self-care: hsl(43, 84%, 65%);
    //Neutral:
    --Very-dark-blue: hsl(226, 43%, 10%);
    --Dark-blue: hsl(235, 46%, 20%);
    --Desaturated-blue: hsl(235, 45%, 61%);
    --Pale-Blue: hsl(236, 100%, 87%);
    //card titles e.g. Work, Play:
    font-size: 18px;
    font-family: 'Rubik', sans-serif;
    --light:300;
    --regular:400;
    --medium:500;
    *{
        margin:0;
    }
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--Very-dark-blue);
    .timecard_spread{
        color:#fff;
        justify-content: space-between;
    }
    .timecard_current{
        font-size: 3.05em;
        font-weight: var(--light);
        color:#fff;
        padding:20px 0 10px;
    }
    .timecard_previous{
        font-size: .85em;
        font-weight: var(--light);
        color:var(--Pale-Blue);
        padding:0;
    }
    .active{
        color:#fff;
        text-transform: capitalize;
        cursor: pointer;
    }
    .inactive{
        color:var(--Desaturated-blue);
        text-transform: capitalize;
        cursor: pointer;
        :hover{
            color:#fff;
        }
        :active{
            color:var(--Desaturated-blue);
        }
    }
    @media screen and (max-width:1025px) {
        .timecard_current{
            font-size: 2.1em;
            padding:20px auto 10px;
        }
        .timecard_previous{
            font-size: .8em;
        }
    }
    @media screen and (max-width:600px) {
        .timecard_spread{
            font-size: .9em;
        }
        .timecard_current{
            font-size: 1.7em;
            padding:0;
        }
        .timecard_previous{
            font-size: .8em;
        }
    }
`