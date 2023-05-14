import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    color: green;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #efefef;
`;

export const PopupLoginWrapper = styled.div`
    width: 18em;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0.3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 1em;
    padding-bottom: 1em;
`;

export const Text = styled.div`
  color: ${props => props.color || "black"};
  font-size: ${props => props.fontSize}px;
`;

export const FieldName = styled.div`
  color: gray;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0.2em;
`;

export const Column = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 2em;
  padding-right: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 16px;
    outline: none;
    background: white;
    border: 1px gray solid;
    height: 2.4em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    border-radius: 0.3em;
    box-sizing: border-box;
`;

export const Button = styled.button`
  margin-top: 2em;
  margin-bottom: 1em;
  font-size: 16px;
  color: white;
  font-weight: 400;
  cursor: pointer;
  background: #50c0ce;
  border-radius: 0.35em;
  outline: none;
  width: 100%;
  border-radius: 0.3em;
  border: 1px solid gray;
  height: 2.8em;
  background-color: #1890ff;

  &:hover {
    background-color: #157ad7;
  }
    
`;

export const Blank = styled.div`
  width: ${props => props.width}em;
  height: ${props => props.height}em;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: gray;
`;

export const LoginGoogle = styled.button`
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 16px;
  color: black;
  font-weight: 400;
  cursor: pointer;
  background: #50c0ce;
  border-radius: 0.35em;
  outline: none;
  width: 100%;
  border-radius: 0.3em;
  border: 1px solid gray;
  height: 2.8em;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  &:hover {
    background-color: #ddd;
  }
`;

export const Icon = styled.img`
  width: 1.3em;
  margin-right: 0.5em;
`;

export const TextError = styled.div`
  color: red;
  font-size: 14px;
`;