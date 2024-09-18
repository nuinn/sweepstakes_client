import styled from "styled-components";

const StyledWelcomeMessage = styled.div`
  width: 80vw;
  height: 30vh;
  font-size: 18px;
  border-radius: 32px;
  background-color: var(--green);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  text-align: center;
  opacity: 0.8;
  line-height: 20px;
  margin-bottom: 32px;
  & strong {
    color: var(--blue);
  }
  overflow: auto;
`;

function Welcome() {
  return (
    <>
      <StyledWelcomeMessage>
        <p>
        ¡Bienvenidos a mi liga de quiniela: <strong>Sweepstakes</strong>!
        <br/><br/>
        Este es un pequeño proyecto que desarrollé para algunos compañeros. Antes de la competición, todos vimos cómo la aplicación nos asignaba aleatoriamente una selección de equipos de la Eurocopa. A medida que la competición avanzaba, nos daban puntos según el rendimiento de nuestros equipos y nos organizábamos en una liga.
        <br/><br/>
        La aplicación fue diseñada para obtener información en vivo de una API externa, por lo que mis compañeros podían ver las actualizaciones de sus puntuaciones automáticamente.
        <br/><br/>
   Si te gustaría ver los resultados finales de nuestra liga, por favor <strong>ingresa "liga" a continuación</strong>.
        <br/><br/>
   Si te gustaría ver un sorteo en vivo donde los jugadores son asignados aleatoriamente a equipos, por favor <strong>ingresa cualquier palabra para crear una nueva liga.</strong>.
        </p>

      </StyledWelcomeMessage>
    </>
  )
}



export default Welcome