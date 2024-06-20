import SpinnerContainer from "./SpinnerContainer.js";

export default function Spinner() {
  return (
    <SpinnerContainer>
      <div className="loader"></div>
      <div className="loading"></div>
    </SpinnerContainer>
  )
}