import styled from "styled-components";

export const StyledExpertSectionWrap = styled.div`
position:relative;
padding:100px 0 120px;

& a{
    position:absolute;
    top:auto;
    right:100px;
    bottom:120px;
}

@media(max-width:1023.5px){
    padding:60px 0 64px;
    & p{
        margin-bottom:24px;
    }
    & a{
        bottom:68px;
        right:24px;
    }
    & a p{
        margin-bottom:0px;
    }
}
@media(max-width:767.5px){
    padding:50px 0 130px;
    & p{
        margin-bottom:20px;
    }
    & p span{
        font-weight:300;
    }
    & h3 span{
        padding:2px 8px;
    }
    & a{
        bottom:70px;
        & p{
            font-weight: 600;
        }
    }
}
@media(max-width:479.5px){
    & h3{
        font-size: 30px;
        margin-bottom:6px;
    }
}
`

export const StyledSlideWrap = styled.div`
width:228px;
`

export const StyledExpertWrap = styled.div`
position:relative;
display:flex;
flex-direction:column;
align-items:center;
width:100%;
transition:all 0.5s;
margin-top: 40px;

 &:hover{
    transform:translateY(-30px);

    @media(max-width:1439.5px){
        transform:translateY(-20px);
    }
    @media(max-width:1023.5px){
        transform:translateY(0px);
    }
 }
 @media(max-width:1439.5px){
    margin-top: 30px;
}
@media(max-width:1023.5px){
    margin-top: 24px;
}
@media(max-width:479.5px){
    margin-top: 30px;
}
`

export const StyledIconWrap = styled.div<{ $color: string }>`
width:160px;
height:160px;
background:${props => props.$color};
border-radius:50%;
display:flex;
align-items:end;
justify-content:center;
overflow:hidden;
margin-bottom: 10px;

& img{
    width:90%;
    height:90%;
}

@media(max-width:1439.5px){
    width:120px;
    height:120px;
    margin-bottom: 5px;
}
@media(max-width:479.5px){
    width:100px;
    height:100px;
}
`

export const StyledExpertName = styled.h5`
font-size:24px;
font-weight: 600;
margin-bottom: 15px;

@media(max-width:1439.5px){
    font-size:18px;
    margin-bottom: 10px;
}
@media(max-width:1023.5px){
    font-size: 20px;
    line-height: 24px;
}
@media(max-width:767.5px){
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.32px;
    margin-bottom: 6px;
}
@media(max-width:479.5px){
    font-size: 14px;
}
`

export const StyledExpertDesc = styled.p`
text-align:center;
font-size:18px;
font-weight: 400;
line-height: 24px; 

@media(max-width:1439.5px){
    font-size:16px;
    line-height: 30px; 
}
@media(max-width:1023.5px){
    font-size: 14px;
    line-height: 24px;
}
@media(max-width:767.5px){
    font-size: 16px;
    line-height: 22px;
}
@media(max-width:479.5px){
    font-size: 14px;
    line-height: 20px;
}
`