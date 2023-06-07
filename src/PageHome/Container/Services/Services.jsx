import "./Services.css";
import Title from "../../../components/Title/Title";
import ColorTabs from "../../../components/Tabs/Tabs";
import NewsCrewPage from "../NewsCrew/NewsCrewPage";


export default function Services({authentication}){

    return (
        <div className="services-container">
            <Title>Les prestations</Title>
            <div className="tabs-container">
                <ColorTabs authentication={authentication}/>
            </div>
        </div>
    );
}