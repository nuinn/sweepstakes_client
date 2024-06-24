import styled from "styled-components"

const StyledRulesContainer = styled.div`
  * {
    font-weight: 200;
  }

  padding: 80px 100px;

  & h2 {
    margin-bottom: 12px;
    font-weight: 400;
  }

  & h3 {
    margin: 16px 0px 8px;
    font-weight: 300;
  }

  & .special {
    margin-top: 8px;
  }

  & .footnote {
    margin-top: 6px;
    font-weight: 200;
  }
`

export default function Rules() {
  return (
    <StyledRulesContainer>
      <h2>Tournament Rules</h2>

      <h3>Draw:</h3>
        <ul>
            <li><strong>Team Sorting:</strong> Tournament teams are sorted from least likely to win to most likely to win based on the aggregate of the latest odds.</li>
            <li><strong>Division into Pots:</strong> Sorted teams are then divided into pots based on the number of players.</li>
            <li><strong>Random Allocation:</strong> Players are randomly allocated one team from each pot.</li>
        </ul>

      <h3>Points:</h3>
      <p><strong>Performance-Based Points:</strong> Players are awarded points for their allocated team's performances throughout the competition. Their total points and stats represent the accumulation of their team's performances.</p>
      <ul>
          <li className="special"><strong>Group Stage:</strong>
              <ul>
                  <li>Win: 3 points</li>
                  <li>Draw: 1 point</li>
                  <li>Loss: 0 points</li>
              </ul>
          </li>
          <li className="special"><strong>Knockout Stage:</strong>
              <ul>
                  <li>Win (90 or 120 mins): 3 points</li>
                  <li>Loss (90 or 120 mins): 0 points</li>
                  <li>Draw after extra time: 1 point</li>
                  <li>Penalty Shootout Winner: 1 extra point (total 2 points)</li>
              </ul>
          </li>
      </ul>

      <h3>Third-Place Playoff:</h3>
      <p>No points are awarded for results in the third-place playoff.</p>

      <h3>Player League:</h3>
      <p>Players will be put into a league which organised based on the following criteria:</p>
      <ul>
          <li>Higher number of points</li>
          <li>If points are the same, higher goal difference</li>
          <li>If goal difference is the same, higher number of goals scored</li>
      </ul>
      <p className="footnote">In the event that the above criteria are unable to separate potential league winners, the overall winner will be the player whose team went furthest in the competition.</p>
      <h3>Winner:</h3>
      <p>The winner and prize winner is the player who tops the league after the final result.</p>
    </StyledRulesContainer>
  )
}