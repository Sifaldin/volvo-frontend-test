import styled from 'styled-components';

const ArrowsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  position: fixed;
  right: 50px;
  @media (max-width: 950px) {
    display: none;
  }
`;

export default ArrowsWrapper;
