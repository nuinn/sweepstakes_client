import styled from 'styled-components';

const SpinnerContainer = styled.div`
  width: 140px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loader {
    width: 40px;

    aspect-ratio: 1;
    background:
      linear-gradient(90deg,#e4010b 50%,#ffd600 0) top/100% 50% no-repeat,
      linear-gradient(90deg,#004ea0 50%,#00a85d 0);
    -webkit-mask:linear-gradient(#000 0 0) 0 0/50% 50% no-repeat;
    animation: l18 2.5s infinite;
  }

  @keyframes l18 {
    0%   {-webkit-mask-position:0    0   }
    25%  {-webkit-mask-position:100% 0   }
    50%  {-webkit-mask-position:100% 100%}
    75%  {-webkit-mask-position:0    100%}
    100% {-webkit-mask-position:0    0   }
  }

    .loading {
      width: fit-content;
      font-weight: 400;
      // font-family: monospace;
      font-size: 24px;
      color:#0000;
      background: linear-gradient(90deg,#e4010b 25%,#ffd600 0 50%,#00a85d 0 75%,#004ea0 0) 0 0/400% 100%;
      -webkit-background-clip:text;
              background-clip:text;
      animation:l10 10s infinite cubic-bezier(0.3,1,0,1);
    }

    .loading:before {
      content:"Sweepstakes"
    }

  @keyframes l10 {
    25% {background-position: calc(1*100%/3) 0}
    50% {background-position: calc(2*100%/3) 0}
    75% {background-position: calc(3*100%/3) 0}
    100%{background-position: calc(4*100%/3) 0}
  }
`;

export default SpinnerContainer;