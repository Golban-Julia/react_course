const UserList=({repos})=>{
    return(
        <ul className="popular-list">
            {repos.map((repo, index ) => {
                return(
                    <li key={repo.id} className="popular-item">
                        <div className="popular-rank">
                            #{index+1}
                            <ul className="space-list-items">
                                <li>
                                    <img className="avatar" src={repo.owner.avatar_url} alt="Avatar"/>
                                </li>
                                <li>
                                    <a href={repo.html_url} target='_blank' rel="noreferrer">{repo.name}</a>
                                </li>
                                <li>@{repo.owner.login}</li>
                                <li>{repo.stargazers_count}stars</li>
                            </ul>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default UserList