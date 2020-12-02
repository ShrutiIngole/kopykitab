const List = ({list}) => {
    return(
        <ul className="column">
            {list.map(el => {
                return(
                    <li>el.name</li>
                )
            })}
        </ul>
    )
}