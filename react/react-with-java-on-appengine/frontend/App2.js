import React from 'react';
import ReactDOM from 'react-dom';

var App2 = React.createClass({
    
    update: function(e){
        this.setState({txt: e.target.value})
    },
    
    click: function (){
        alert('Awesome');
    },

    render: function (){
        return( 
            <div>
                <h1>Hello World {this.state}</h1>
                <div>{this.props.txt}</div>
                <div>{this.props.cat}</div>
                <div>
                    <input type="text" onChange={this.update} />
                </div>
                <div>
                    <input type="button" onClick={this.click} />
                </div>
            
            </div>
        )
    }
});

ReactDOM.render(
    <App2 txt="hello" cat={5} />,
    document.getElementById('app')
)