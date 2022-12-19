import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.3);
  padding: 2rem;
  border-radius: 15px;
  h2 {
    text-align: center;
    margin: 0;
    margin-bottom: 2rem;
  }
  .form-wrapper {
    display: grid;
    gap: 1rem 0.5rem;
    justify-content: center;
    grid-template-columns: auto minmax(auto, 400px);
  }
  label {
    font-weight: bold;
  }
`;
