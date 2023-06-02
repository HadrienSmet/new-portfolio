const Personality = () => {
    return (
        <div id="perso" className="about-me__personality">
            <h2>Personality</h2>
            <p>
                If you wants to learn more about what kind of person I am here
                are the results of my personality tests
            </p>
            <div className="about-me__personality-links">
                <a
                    href="https://www.16personalities.com/profiles/e1c56a2322a0e"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    MBTI
                </a>
                <a
                    href="https://drive.google.com/file/d/1t7oAlXpJPd9hf5D8XtfAjNhEVxJVACWR/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Talents
                </a>
            </div>
        </div>
    );
};

export default Personality;
