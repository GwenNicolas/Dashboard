import "./Paragraph.css";

export default function Paragraph({ text, background }) {
    const textColor = background === "white" ? "cadetblue" : "white";
    return <p className="paragraph"style={{ color: textColor }}>{text}</p>;
}