import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';

import '../src/styles/styles.scss';
import JSON from  './db.json';

class App extends Component {
    
    constructor() {
        super()
        this.state = {
            news: JSON,
            footerText: "Footer Text",
            filtered: []
        }
    }

    getKeywords = (event) => {
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        })
        this.setState({
            filtered
        })
    }

    render() {
        console.log(this.state)
        return (
            <>
            <Header keywords={this.getKeywords}/>
            <NewsList news={this.state.filtered.length === 0 ? this.state.news: this.state.filtered}/>
            <Footer footertext={this.state.footerText}/>
            </>
        )
    }
}

ReactDom.render(<App/>, document.getElementById("root"));