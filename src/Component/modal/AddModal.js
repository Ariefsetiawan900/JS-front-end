import React, { Component } from "react";
import Axios from "axios";
import "../../Component/modal/style/Addmodal.css"

const HOST = "/api/v1/";
class AddModal extends Component {
    state = {
        title: "",
        image: "",
        description: "",
        datereleased: "",
        genre: "",
        available: "true",
        genreData: []
    };

    postBookData = () => {
        const {
            title,
            image,
            description,
            datereleased,
            genre,
            available
        } = this.state;

        const book = {
            title,
            image,
            description,
            datereleased,
            genre,
            available
        };
        console.log(book);
        Axios.post(HOST + "addbook", book)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    };

    renderGenreData = () => {
        Axios.get(HOST + "genre")
            .then(({ data }) => {
                // console.log(data);
                this.setState({
                    genreData: data.result
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount = () => {
        this.renderGenreData();
    };

    render() {
        const { genreData } = this.state;
        console.log(genreData);
        return (
            <div id="addModal" className="add-modal">
                <div className="add-modal-content">
                    <div className="add-modal-header">
                        <span className="add-close">&times;</span>
                        <p>Add Data</p>
                    </div>
                    <div className="add-modal-body">
                        <div className="form-wrapper">
                            <form>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="image-url">URL Image</label>
                                    </div>
                                    <div className="col-80">
                                        <input
                                            required
                                            type="text"
                                            id="image"
                                            name="image"
                                            placeholder="Book's URL Image Cover"
                                            onChange={e => {
                                                this.setState({ image: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="released-date">Released Date</label>
                                    </div>
                                    <div className="col-80">
                                        <input
                                            required
                                            type="date"
                                            id="datereleased"
                                            name="datereleased"
                                            placeholder="Book's Released Date"
                                            onChange={e => {
                                                this.setState({ datereleased: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="book-title">Title</label>
                                    </div>
                                    <div className="col-80">
                                        <input
                                            required
                                            type="text"
                                            id="bookTitle"
                                            name="title"
                                            placeholder="Book's Title"
                                            onChange={e => {
                                                this.setState({ title: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="image-url">Genre</label>
                                    </div>
                                    <div className="col-80">
                                        <select
                                            onChange={e => {
                                                this.setState({ genre: e.target.value });
                                                // console.log(item.name);
                                            }}
                                            id="genre"
                                            name="genre"
                                            required
                                        >
                                            <option value="">Please Choose a Genre</option>
                                            {genreData.length < 1 ? (
                                                <option value="0">Genre Data is Empty</option>
                                            ) : (
                                                    genreData &&
                                                    genreData.map(item => (
                                                        <option key={item.id_genre} value={item.id_genre}>
                                                            {item.genre_name}
                                                        </option>
                                                    ))
                                                )}
                                        </select>
                                        {/* <input
                      type="text"
                      id="genre"
                      name="genre"
                      placeholder="Book's Genre"
                      onChange={e => {
                        this.setState({ genre: e.target.value });
                      }}
                    /> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="book-description">Description</label>
                                    </div>
                                    <div className="col-80">
                                        <textarea
                                            required
                                            id="description"
                                            name="description"
                                            placeholder="Book's Description"
                                            style={{ height: "200px" }}
                                            onChange={e => {
                                                this.setState({ description: e.target.value });
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <button
                                        type="submit"
                                        onClick={e => this.postBookData(e.preventDefault)}
                                    >
                                        Save
                  </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddModal;