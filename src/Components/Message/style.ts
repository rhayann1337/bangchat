import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  width: fit-content;
  max-width: 100%;
  margin-bottom: 16px;
  background-color: white;
`;

export const TextAuthor = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

export const TextMessage = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  margin-top: 2px;
`;

export const TextDate = styled.div`
  margin-top: 8px;
  font-size: 10px;
  line-height: 16px;
  font-weight: 400;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
`;
