import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



//upload form
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            images: [],
            imageUrls: [],
            message: ''
            }
    }

    selectImageHandler = () => {
        
    }
    
    uploadImageHandler = () => {

    }
    render() {
        return(
            <div className="uploadForm">
                <form className="uploadForm" action="">
                    <input type="file"className="select-images" onClick= {this.selectImageHandler} multiple/>
                    <br /><br /><br />
                    <button className="submit-button" value="submit" onClick={this.uploadImageHandler}>Upload</button>
                </form>
            </div>
        );
    }
}

function CardList (props){
    return (
        <div>
            <Card />
        </div>
    );
}

class Card extends React.Component {
    render() {
        return (
                <div className="image-card">
                    <img src="https://via.placeholder.com/150" />
                    <h1 className="card--title">Image Caption</h1>
                </div>
        );
    }
}

class App extends React.Component {
    render(){
        return (
            <div>
                <div className= "header">{this.props.title}</div>
                <Form />
                <div className="image-container">
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                    <CardList />
                </div> 
                
            </div>
            
        );
        
    }
}


ReactDOM.render(
    <App title="Display Images" />,
    document.getElementById('root')
  );