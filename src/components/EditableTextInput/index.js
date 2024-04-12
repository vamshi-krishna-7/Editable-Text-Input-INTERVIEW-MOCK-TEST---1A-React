import {Component} from 'react'

import {
  BgContainer,
  BgCardContainer,
  Heading,
  EditableContainer,
  UserInput,
  Button,
  Description,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    isTextSaved: false,
    inputText: '',
  }

  onChangeEditableText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isTextSaved: !prevState.isTextSaved}))
  }

  render() {
    const {isTextSaved, inputText} = this.state
    return (
      <BgContainer>
        <BgCardContainer>
          <Heading>Editable Text Input</Heading>
          <EditableContainer>
            {isTextSaved ? (
              <Description>{inputText}</Description>
            ) : (
              <UserInput
                type="text"
                onChange={this.onChangeEditableText}
                value={inputText}
              />
            )}
            <Button onClick={this.onClickButton} type="button">
              {isTextSaved ? 'Edit' : 'Save'}
            </Button>
          </EditableContainer>
        </BgCardContainer>
      </BgContainer>
    )
  }
}

export default EditableTextInput
