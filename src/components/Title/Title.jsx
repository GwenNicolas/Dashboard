import "./Title.css";

export default function Title({ children, background }) {
    const textColor = background === "cadetblue" ? "white" : "cadetblue"

    return (
        <h2 className="title" style={{ color: textColor }}>
            {children}
        </h2>
);
}