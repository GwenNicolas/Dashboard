import "./Contact.css";
import Form from "../../../components/Form/Form";
import Title from "../../../components/Title/Title";

export default function Contact() {
    return (
        <div className="container">
            <Title>Contact</Title>
            <Form authentication={false} isContactForm={true} />
        </div>
    );
}