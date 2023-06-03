import "../NewsCrew/Crew.css";
import "../NewsCrew/News.css";
import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';


export default function NewsCrewPage({ page }) {
    const paragraphText = page === 'news' ?
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus dignissim urna a faucibus. Maecenas facilisis ipsum at eros malesuada tincidunt. Vestibulum id cursus turpis. Fusce rutrum sollicitudin lectus, et convallis tellus convallis in. Proin pretium aliquet risus vitae auctor.' :
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus dignissim urna a faucibus. Maecenas facilisis ipsum at eros malesuada tincidunt. Vestibulum id cursus turpis. Fusce rutrum sollicitudin lectus, et convallis tellus convallis in. Proin pretium aliquet risus vitae auctor.';

    return (
        <div className={`container ${page === 'news' ? 'news-container' : 'crew-container'}`}>
            <div>
                <Title background="cadetblue">{page === 'news' ? 'News' : "L'équipe"}</Title>
                <div className={page === 'news' ? 'news-container' : 'crew-container'}>
                    {page === 'news' ? (
                        <>
                            <div className="news-content">
                            <div className="news-photos">
                                <img src="/Pictures/picture1.jpg" alt="news 1" className="news-image"/>
                            </div>
                            <div className="news-details">
                                <h3 className="news-details-title">Titre de la news</h3>
                                <Paragraph text={paragraphText} />
                            </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="crew-member">
                                <div className="crew-personn">
                                    <div className="crew-photo">
                                        <img src="/Pictures/team.jpg" alt="Membre 1 de l'équipe" className="crew-image" />
                                    </div>
                                    <div className="crew-details">
                                        <h3 className="crew-name">Nom</h3>
                                        <h4 className="crew-firstname">Prénom</h4>
                                    </div>
                                </div>
                                <Paragraph text={paragraphText} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}