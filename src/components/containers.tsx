import styled from 'styled-components';

interface FlexProps {
  jc?: 'flex-start' | 'center' | 'space-between';
  wrap?: 'wrap' | 'nowrap';
  gap?: string;
  maxW?: string;
  mt?: string;
  mb?: string;
  pt?: string;
  pb?: string;
}

export const SFlexRowContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(p) => p.jc || 'flex-start'};
  flex-wrap: ${(p) => p.wrap || 'nowrap'};
  gap: ${(p) => p.gap || 0};
  max-width: ${(p) => p.maxW || 'auto'};
  margin-top: ${(p) => p.mt || 0};
  margin-bottom: ${(p) => p.mb || 0};
  padding-top: ${(p) => p.pt || 0};
  padding-bottom: ${(p) => p.pb || 0};
`;

export const SFlexColumnContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(p) => p.jc || 'flex-start'};
  flex-wrap: ${(p) => p.wrap || 'nowrap'};
  gap: ${(p) => p.gap || 0};
  max-width: ${(p) => p.maxW || 'auto'};
  margin-top: ${(p) => p.mt || 0};
  margin-bottom: ${(p) => p.mb || 0};
  padding-top: ${(p) => p.pt || 0};
  padding-bottom: ${(p) => p.pb || 0};
`;

export const DarkSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 50px;
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: ${(props) => `${props.theme.secondary}`};

  & h3 {
    text-transform: uppercase;
    color: ${(props) => props.theme.primary};
    font-weight: 200;
    font-size: 40px;
    margin: 0;
  }
`;
