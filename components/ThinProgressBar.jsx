'use client'

import styled from 'styled-components';

const ProgressContainerWrapper = styled.div`
  display: flex;
  align-items: center;  
  justify-content: center;
  
`;

const ProgressContainer = styled.div`  
  display: flex;
  align-items: center;  
`;

const ProgressBar = styled.div`
  height: 2px;
  width: 30px;
  background-color: #808080; /* Gray background */
  position: relative;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: white; /* White fill color */
  width: ${({ $filled }) => ($filled ? '100%' : '50%')};
`;

const ThinProgressBar = ({ filled }) => (
  <ProgressContainerWrapper>
    <ProgressContainer>
      <ProgressBar>
        <ProgressFill $filled={true} />
      </ProgressBar>

      <ProgressBar style={{ marginLeft: '18px' }}>
        <ProgressFill $filled={filled} />
      </ProgressBar>

      <ProgressBar style={{ marginLeft: '18px' }}>
        <ProgressFill $filled={true} />
      </ProgressBar>
    </ProgressContainer>
  </ProgressContainerWrapper>
 
);

export default ThinProgressBar;

