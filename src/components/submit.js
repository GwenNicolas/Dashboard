import React, { Component} from "react";

//composant submit
class Submit extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return  (
            <div>
                <form action="https://www.youtube.com/results" method="GET">
                    <input type="text" name="search_query" />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Submit;