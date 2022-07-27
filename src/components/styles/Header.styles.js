import styled from 'styled-components';

export const StyledHeader = styled.header`
  text-align: center;
  background-color: ${(props) => props.color};

  h1 {
    color: white;

    span {
      display: ${(props) => {
        console.log('show', props.show);
        return props.show ? 'block' : 'none';
      }};
      color: blue;
    }
  }

  &:hover {
    background-color: ${(props) => props.color};
  }
`;
