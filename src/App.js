import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const rp = require("request-promise");
const cheerio = require("cheerio");

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log("A name was submitted: " + this.state.value);

        let valParsed = this.state.value.split(" ").join("+");

        valParsed = "https://www.google.com/search?q=" + valParsed;

        console.log("val parsed", valParsed);

        // const options = {
        //     uri: valParsed,
        //     transform: function(body) {
        //         return cheerio.load(body);
        //     }
        // };

        // rp(options)
        //     .then($ => {
        //         console.log($);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });

        event.preventDefault();
    }

    render() {
        return (
            <>
                <h2>Ask the Magic 8-Ball a question</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}
