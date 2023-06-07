import Header from "./Container/Header/Header";
import Services from "./Container/Services/Services";
import Footer from "./Container/Footer/Footer";
import NewsCrewPage from "./Container/NewsCrew/NewsCrewPage";
import Contact from "./Container/Contact/Contact";

export default function PageHome({authentication}){
    return(
        <div>
            <Header authentication={authentication} />
            <NewsCrewPage page="News" authentication={authentication} />
            <Services authentication={authentication} />
            <NewsCrewPage page="Crew" authentication={authentication} />
            <Contact authentication={authentication}/>
            <Footer />
        </div>
    );

}