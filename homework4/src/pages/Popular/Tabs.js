const Tabs = ({languages, selectedLanguage, setSelectedLanguage})=>{
    return(
        <ul className="languages">
            {languages.map((language, index) => (
                <li key={index}
                style= {{color:language === selectedLanguage ? '#d0021b': '#000'}}
                onClick={()=>setSelectedLanguage(language)}
                >
                    {language}
                </li>
            ))}
        </ul>
    )
}

export default Tabs


