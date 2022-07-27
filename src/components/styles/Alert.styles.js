import styled from 'styled-components';

const setColorsByStatus = (status) => {
  switch (status) {
    case 'danger':
      return `color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;`;
    case 'success':
      return `
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
        `;
    default:
      return ``;
  }
};

export const Alert = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  ${(props) => setColorsByStatus(props.status)}
`;
