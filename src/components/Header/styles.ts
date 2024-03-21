import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  padding: 16px 0px;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.bg100};
  border-bottom: 1px solid ${({ theme }) => theme.colors.bg300};
  z-index: 1;
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1800px;
  gap: 16px;
  flex-wrap: wrap;
  padding: 0px 32px;

  @media (max-width: 425px) {
    padding: 0px 16px;
    > * {
      flex: 1;
    }
  }
`;

export const ProtoTokenLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bg300};

  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
`;

export const ProtoTokenLogoContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;

  label {
    color: ${({ theme }) => theme.colors.text100};
    cursor: pointer;
    margin-left: 8px;
    font-size: 16px;
    font-weight: 300;
    font-family: 'Inter', sans-serif;
  }
`;
