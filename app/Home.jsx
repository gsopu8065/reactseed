import React from 'react';
import ChildComponent from './ChildComponent.jsx';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {newsFeed : [
            {
                "id":1,
                "status": "Welcome Nashville!!"
            },
            {
                "id":2,
                "status": "HattiB's is hot !!"
            },
            {
                "id":3,
                "status": "Christie cookies are great!!"
            },
        ]};

        this.addStatus = this.addStatus.bind(this);
    }

    addStatus(){
        var currentNews = this.state.newsFeed;
        currentNews.push({"id":5, "status": "Added status"})
        this.setState({newsFeed: currentNews})
    }

    render() {
        return (
            <div id="parent">
                <div className="header" >
                    Facebook
                    <button onClick={this.addStatus} className="addButton">Add</button>
                </div>
                {
                    this.state.newsFeed.map(function (news, index){
                        return(<ChildComponent key={index} newsFeed={news}></ChildComponent>)
                    })
                }

            </div>
        );
    }
}

export default Home;