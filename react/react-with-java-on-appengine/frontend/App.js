import React from 'react';
import ReactDOM from 'react-dom';

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

class App extends React.Component {
    
    constructor(){
        super();
        this.setInitialState();
        this.bindMethods();
    }
    
    bindMethods(){
        this.update = this.update.bind(this);
        this.click = this.click.bind(this);
    }

    setInitialState(){
        this.state = { 
            txt: 'this is the state txt' ,
            cat: 0
        }
    }
    
    update(e){
        this.setState({txt: e.target.value})
    }
    
    componentWillMount(){
        alert('this is awesome');
    }
    
    click(){
        alert('Awesome');
         $.ajax({
	    	headers: {
                'Authorization':'Bearer ' + sessionStorage.getObject("tokenData").token
            },
            contentType: "application/json;charset=utf-8",
            url: requestUrl,
            dataType: 'json',
            type: method,
            data: JSON.stringify(lot),
            success: function(data) {
            	this.loadLotsFromServer();
            	$('#lotFormModal').modal('hide');
            }.bind(this),
            error: function(xhr, status, err) {
            	this.setState({data: lots});
            	console.error(this.props.url, status, err.toString());
            }.bind(this)
	    });
    }
    
    
    render (){
        return( 
            <div>
                <h1>Hello World {this.state.txt}</h1>
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
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: 'this is the default for txt'
}

ReactDOM.render(
    <App cat={5} />,
    document.getElementById('app')
)

//const App = () => <h1>Hello Worldaaa</h1>

//export default App