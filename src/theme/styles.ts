
import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#007BFF',
    secondary: '#6C757D',
    background: '#F8F9FA',
    text: '#212529',
    border: '#CED4DA',
    white: '#FFFFFF',
    danger: '#DC3545',
    success: '#28A745',
    warning: '#FFC107',
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
  fontSizes: {
    md: '1rem',
    lg: '1.25rem',
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes.lg};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.primary};
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  font-size: ${theme.fontSizes.md};
  transition: border-color 0.3s;

  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
  }
`;

export const Button = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.md};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.secondary};
  }

  &.edit {
    background-color: ${theme.colors.warning};
    &:hover {
      background-color: #e0a800;
    }
  }

  &.delete {
    background-color: ${theme.colors.danger};
    &:hover {
      background-color: #c82333;
    }
  }

  &.add {
    background-color: ${theme.colors.success};
    &:hover {
      background-color: #218838;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: ${theme.spacing.sm};
  border-bottom: 1px solid ${theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;