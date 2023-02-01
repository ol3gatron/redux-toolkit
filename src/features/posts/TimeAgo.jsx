import { parseISO, formatDistanceToNow } from "date-fns"

const timeAgo = ({ timestamp }) => {
  let timeAgo = ""
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}
export default timeAgo