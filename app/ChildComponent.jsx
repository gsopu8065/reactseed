import React from 'react';

class ChildComponent extends React.Component {

    render() {
        return (
            <div className="childComponent">
                {this.props.newsFeed.status}
            </div>
        );
    }
}

export default ChildComponent;