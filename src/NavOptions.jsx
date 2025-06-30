//NavOptions.jsx

function NavOptions ({activeOption, onSelect}) {
    const optionIds = ["general", "experience", "education", "skills"];

    return (
    <nav>
      <ul>
        {optionIds.map((id) => (
          <li key={id}>
            <button
              className={activeOption === id ? "active" : ""}
              onClick={() => onSelect(id)}
            >
              {id[0].toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )

}

export default NavOptions