import React from 'react';

class App extends React.Component {

    constructor(){
        super();
        this.state = {studentname : "asurion"}

        this.textChanged = this.textChanged.bind(this)
    }


    textChanged(e){
        this.setState({studentname : e.target.value})
    }


    render() {
        return (
            <div>
                Hello Worlddhgjfhdfhkgjhfgk!!!   <br/>

                <input type="text" value={this.state.studentname} onChange={this.textChanged}/>
                {this.state.studentname}
            </div>
        );
    }
}

export default App;