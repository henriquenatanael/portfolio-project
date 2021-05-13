  
const RepositoryItem = (props) => {
  const  { repository : { name, description, html_url } } = props
  
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a target="_blank" rel="noreferrer" href={html_url}>See Details</a>
    </li>
  )
}

export default RepositoryItem;