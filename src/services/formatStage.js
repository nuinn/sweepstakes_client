export default function formatStage(stageStr) {
  const withSpace = stageStr.toLowerCase().replace("_", " ")
  const splitStr = withSpace.split(' ')
  const formattedSplitStr = []
  splitStr.map((word) => {
    formattedSplitStr.push(word.substring(0,1).toUpperCase() + word.substring(1));
  })
  return formattedSplitStr.join(' ')
}