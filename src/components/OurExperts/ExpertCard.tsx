import { StyledExpertWrap, StyledIconWrap, StyledExpertName, StyledExpertDesc } from "./StyledOurExperts"

type ExpertProps = {
    src: string,
    color: string,
    name: string,
    desc: string
}

export const ExpertCard = ({ src, color, name, desc }: ExpertProps) => {
    return (<StyledExpertWrap>
        <StyledIconWrap $color={color}>
            <img src={src} alt={name} />
        </StyledIconWrap>
        <StyledExpertName>{name}</StyledExpertName>
        <StyledExpertDesc>{desc}</StyledExpertDesc>
    </StyledExpertWrap>)
}