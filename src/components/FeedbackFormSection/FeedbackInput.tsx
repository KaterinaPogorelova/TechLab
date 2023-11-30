import { setUserEmail, setUserMessage, setUserName } from "../../store/feedbackform"
import { useAppDispatch } from "../../store/store"
import { StyledErrorMessage, StyledFeedbackInputWrap, StyledInput, StyledLabel, StyledTextarea } from "./StyledFeedbackSection"

type InputProps = {
    id: string,
    type?: string,
    name: string,
    placeholder: string,
    errorMessage: string
}

export const FeedbackInput = ({ id, type, name, placeholder, errorMessage }: InputProps) => {
    const dispatch = useAppDispatch()
    return (<StyledFeedbackInputWrap>
        <StyledLabel htmlFor={id}>{name}</StyledLabel>
        {name !== 'Your question*' && <StyledInput required name={name} id={id} type={type} placeholder={placeholder}
            autoComplete={id === 'name' ? 'given-name' : 'email'}
            onChange={(e) => {
                id === 'name' && dispatch(setUserName(e.target.value))
                id === 'email' && dispatch(setUserEmail(e.target.value))
            }}></StyledInput>}
        {name === 'Your question*' && <StyledTextarea required name={name} id={id} placeholder={placeholder}
            onChange={(e) => dispatch(setUserMessage(e.target.value))}></StyledTextarea>}
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
    </StyledFeedbackInputWrap>)
}