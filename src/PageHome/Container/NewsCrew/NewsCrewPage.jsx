import "./NewsCrewPage.css";
import Paragraph from '../../../components/Paragraph/Paragraph';
import Title from '../../../components/Title/Title';


export default function NewsCrewPage({ page, authentication }) {
    const paragraphText =
        page === 'News'
            ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus dignissim urna a faucibus. Maecenas facilisis ipsum at eros malesuada tincidunt. Vestibulum id cursus turpis. Fusce rutrum sollicitudin lectus, et convallis tellus convallis in. Proin pretium aliquet risus vitae auctor.'
            : page === 'Tab1'
                ? 'Contenu pour Tab1...'
                : page === 'Tab2'
                    ? 'Contenu pour Tab2...'
                    : page === 'Tab3'
                        ? 'Contenu pour Tab3...'
                        : 'Contenu pour crew.';

    const pictureContent =
        page === 'News'
            ? <img src="/Pictures/News/news.jpg" alt="News 1" className="image" />
            : page === 'Crew'
                ? <img src="/Pictures/crew/YannRoffi.png" alt="Yann Roffi" className="rounded-image" />
                : "";

    return (
        <div className="container">
                <Title background="cadetblue">
                    {
                        page === "News" ? "News" : page=== "Crew" ? "Yann Roffi" : ""
                    }
                    {authentication && (
                        <img
                            src="/icon/pencil.svg"
                            alt="Modifier"
                            className="pencil-logo"
                        />
                    )}
                </Title>
                <div className="content">
                    <div className="picture">
                        {authentication && (
                            <img
                                src="/icon/pencil.svg"
                                alt="Modifier"
                                className="pencil-logo"
                            />
                        )}
                        {pictureContent}
                    </div>
                    <div className="details">
                        {page === 'News' && (
                            <>
                                <h3 className="details-title">
                                    Titre de la news
                                    {authentication && (
                                        <img
                                            src="/icon/pencil.svg"
                                            alt="Modifier"
                                            className="pencil-logo"
                                        />
                                    )}
                                </h3>
                            </>
                        )}
                        {page === 'Tab1' && (
                            <>
                                <h3 className="details-title">
                                    Titre Café concert
                                    {authentication && (
                                        <img
                                            src="/icon/pencil.svg"
                                            alt="Modifier"
                                            className="pencil-logo"
                                        />
                                    )}
                                </h3>
                            </>
                        )}
                        {page === 'Tab2' && (
                            <>
                                <h3 className="details-title">
                                    Titre Location salle
                                    {authentication && (
                                        <img
                                            src="/icon/pencil.svg"
                                            alt="Modifier"
                                            className="pencil-logo"
                                        />
                                    )}
                                </h3>
                            </>
                        )}
                        {page === 'Tab3' && (
                            <>
                                <h3 className="details-title">
                                    Titre Gîte
                                    {authentication && (
                                        <img
                                            src="/icon/pencil.svg"
                                            alt="Modifier"
                                            className="pencil-logo"
                                        />
                                    )}
                                </h3>
                           </>
                        )}
                        <Paragraph text={paragraphText}>
                            {authentication && (
                                <img
                                    src="/icon/pencil.svg"
                                    alt="Modifier"
                                    className="pencil-logo"
                                />
                            )}
                        </Paragraph>
                    </div>
                </div>
        </div>
    );
}