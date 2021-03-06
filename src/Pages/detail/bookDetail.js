import React from "react";
import "../detail/bookDetail.css"
import BookDetailNavbar from "../../Component/bookDetailNavbar/BookDetailNavbar";
import BookContent from "../../Component/book/BookContent";
import BorrowButton from "../../Component/book/BorrowButton";
import Edit from "../../Component/modal/Edit";
import Delete from "../../Component/modal/Delete";
import { getBookById } from '../../redux/action/detail'
import { connect } from 'react-redux'
import Axios from "axios";

const mapStateToProps = (detail) => {
    return {
        detail
    }
}

const HOST = "/api/v1/";
class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: [],
            id: props.match.params.id
        };
    }

    getBookById = async () => {
        await this.props.dispatch(getBookById(this.state.id))
        console.log(this.props.data)
        this.setState({
          book: this.props.detail.detail.detailData
        })
      };

    componentDidMount = () => {
        this.getBookById();
    };

    render() {
        const { book } = this.state;
        console.log(book);
        return (
            <div className="grid-container" >
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

export default connect(mapStateToProps)(BookDetails);