import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
const BASE_URL = 'http://localhost:5000/';


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

    selectImageHandler = (event) => {
        let images = []
            for (var i = 0; i < event.target.files.length; i++) {
                images[i] = event.target.files.item(i);
            }
            images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
            let message = `${images.length} valid image(s) selected`
            this.setState({ images, message })
    }
    
    uploadImageHandler = () => {
        const uploaders = this.state.images.map(image => {
        const data = new FormData();
        data.append("image", image, image.name);
    
        // Make an AJAX upload request using Axios
        return axios.post(BASE_URL + 'upload', data)
        .then(response => {
            this.setState({
            imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
            });
        })
    });
    
    // Once all the files are uploaded 
    axios.all(uploaders).then(() => {
        console.log('done');
        })
        .catch(err => alert(err.message));
    }

    render() {
        return(
            <div className="uploadForm">
                <form className="uploadForm" action="">
                    <input type="file"className="select-images" onClick= {this.selectImageHandler} multiple/>
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
                    <h1 className="card--title">cat Name</h1>
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
    <App title="Display cats images App" />,
    document.getElementById('root')
  );