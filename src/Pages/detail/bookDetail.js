import React from "react";
import "../detail/bookDetail.css"
import BookDetailNavbar from "../../Component/bookDetailNavbar/BookDetailNavbar";
import BookContent from "../../Component/book/BookContent";
import BorrowButton from "../../Component/book/BorrowButton";
import Edit from "../../Component/modal/Edit";
import Delete from "../../Component/modal/Delete";
import Axios from "axios";

const HOST = "/api/v1/";
class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: [],
            id: props.match.params.id
        };
    }

    getBookById = () => {
        Axios.get(`HOST${this.state.id}`)
            .then(({ data }) => {
                this.setState({
                    book: data.result
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount = () => {
        this.getBookById();
    };

    render() {
        const { book } = this.state;
        console.log(book);
        return (
            <div className="grid-container">
                {book &&
                    book.map((item, index) => (
                        <div key={index}>
                            <BookDetailNavbar data={item} />
                            <div className="grid-templates-content">
                                <BookContent data={item} />
                                <BorrowButton data={item} />
                            </div>
                            <Edit data={item} />
                            <Delete data={item} />
                        </div>
                    ))}
                <div style={{ marginTop: "60px" }}></div>
            </div>
        );
    }
}

export default BookDetails;