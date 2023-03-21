import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Vstackflexi = styled(Vstack)`
    @media screen and (max-width:600px) {
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
    }
`
export const Styledtimetrackdash = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    width: 100%;
    grid-template-columns: repeat(4,17%);
    grid-template-rows: repeat(2,auto);
    grid-template-areas:
        'A B C D'
        'A E F G'
        ;
    grid-gap: 1.5em;
    @media screen and (max-width:1025px) {
       width:auto;
       grid-template-columns: repeat(4,25%);
       grid-template-rows: repeat(2,auto);
       grid-gap: 1em;
       margin:50px;
    }
    @media screen and (max-width:600px) {
        min-height: 80vh;
        grid-template-columns: 100%;
        grid-template-rows: repeat(7,auto);
        grid-template-areas:
            'A'
            'B'
            'C'
            'D'
            'E'
            'F'
            'G'
            ;
        margin:30px 1%;
    }
`
export const BGnamecard = styled.div`
    display: flex;
    flex-direction: row;
    grid-area:A;
    font-size:1em;
    width:auto;
    height:100%;
    color:var(--Desaturated-blue);
    background-color: var(--Dark-blue);
    border-radius: 12px;
    align-items:start;
    p{
        margin:20px 0 0 30px;
    }
    @media screen and (max-width:1025px) {
        p{
            margin:0 0 10px 30px;
        }
    }
    @media screen and (max-width:600px) {
        margin:0 20px;
        p{
            margin:10px 30px;
        }
    }
`
export const Namecardesc = styled(Vstackflexi)`
    width:100%;
    height:auto;
`
export const Namecard = styled(Vstackflexi)`
    color:#fff;
    background-color: var(--Blue);
    border-radius: 12px;
    width:auto;
    height:70%;
    padding:30px;
    margin:0 0 20px 0;
    .reportfor_timetrack{
        font-size:.9em;
        color:var(--Pale-Blue);
        padding:30px 0 8px 0;
        margin:0;
    }
    .name_timetrack{
        font-size:2.1em;
        font-weight:var(--light);
        padding:0 0 40px 0;
        margin:0;
    }
    @media screen and (max-width:1025px) {
        width:auto;
        height:auto;
        padding:0;
        .reportfor_timetrack{
            padding:0 5% 20px;
            margin:0;
        }
        .name_timetrack{
            font-size:1.9em;
            padding:0 5% 20px;
            margin:0;
        }
    }
    @media screen and (max-width:600px) {
        width:auto;
        height:auto;
        padding:0;
        .reportfor_timetrack{
            text-align: left;
            padding:0;
            margin:0;
        }
        .name_timetrack{
            font-size:1.7em;
            padding:0;
            margin:0 30px 0 0;
        }
    }
`
export const Profpic = styled.img`
    width:40%;
    height:auto;
    border-radius:50%;
    border:2px solid #fff;
    @media screen and (max-width:1025px) {
        margin:30px 5%;
    }
    @media screen and (max-width:600px) {
        width:20%;
        margin:30px 5%;
    }
`
export const BGtimecard = styled.div`
    grid-area: ${(ga)=> ga.$gridarea};
    background-color: ${(bg) => bg.$bgcolor};
    width:auto;
    height:100%;
    border-radius: 12px;
    overflow: hidden;
    @media screen and (max-width:1025px) {
        width:auto;
        height:auto;
    }
    @media screen and (max-width:600px) {
        width:auto;
        height:auto;
        margin:0 20px;
    }
`
export const Icontimecard = styled.img`
    display:flex;
    width:70px;
    height:70px;
    object-fit:contain;
    object-position: 0 -10px;
    margin: 0 0 0 62%;
    position:relative;
    z-index:0;
`
export const TimeCard = styled(Vstack)`
    width:auto;
    height:60%;
    border-radius: 12px;
    box-shadow: 0 10px 20px -2px rgba(0,0,0,0.15);
    background-color: var(--Dark-blue);
    background-repeat: no-repeat;
    padding:12%;
    margin:-10% 0 0 0;
    position:relative;
    z-index:1;
    :hover{
        cursor: pointer;
        background-color: hsla(235, 46%, 20%, 0.9);
    }
    @media screen and (max-width:1025px) {
        width:auto;
        height:auto;
        padding:7%;
        margin:-20% 0 0 0;
    }
    @media screen and (max-width:600px) {
        width:auto;
        height:auto;
        padding:5%;
        margin:-10% 0 0 0;
    }
`
export const Threedot = styled.img`
    width:12%;
    height:auto;
    cursor:pointer;
    :hover{
        width:13%;
    }
    :active{
        transform:scale(0.95);
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    margin: 20px auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:0;
    color: hsl(228, 45%, 44%);
    p{
        font-size: .7rem;
    }
`