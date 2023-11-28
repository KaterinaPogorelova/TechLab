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

    @media(max-width:1440px){
        transform:translateY(-20px);
    }
    
 }
 @media(max-width:1440px){
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

@media(max-width:1440px){
    width:120px;
    height:120px;
    margin-bottom: 5px;

}
`

export const StyledExpertName = styled.h5`
font-size:24px;
font-weight: 600;
margin-bottom: 15px;

@media(max-width:1440px){
    font-size:18px;
    margin-bottom: 10px;
}
`

export const StyledExpertDesc = styled.p`
text-align:center;
font-size:18px;
font-weight: 400;
line-height: 24px; 

@media(max-width:1440px){
    font-size:16px;
    line-height: 30px; 
}
`