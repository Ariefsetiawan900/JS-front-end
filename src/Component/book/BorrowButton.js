import React from "react";
import Axios from "axios"
import { connect } from 'react-redux'
import { rentBookRedux, returnBook } from '../../redux/action/detail'

const mapStateToProps = (detail) => {
  return {
    detail
  }
}


class BorrowButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.data.id,
            image: props.data.image,
            available: props.data.available,
            loading: false
        };
    }

    rentBookData = () => {
        // const { available } = this.state;
        const rentBook = {
            available: "false"
          };
      
          this.props.dispatch(rentBookRedux(this.state.id, rentBook))
    };

    returnBookData = () => {
        // const { available } = this.state;
        const rentBook = {
            available: "true"
          };
      
          this.props.dispatch(returnBook(this.state.id, rentBook))
    };

    render() {
        const bookAvailable = this.state.available;
        let buttonStatus;
        if (bookAvailable === "true") {
            buttonStatus = <button onClick={this.rentBookData}>Borrow</button>;
        } else {
            buttonStatus = (
                <button
                    style={{ backgroundColor: "#596A55" }}
                    onClick={this.returnBookData}
                >
                    Return
                </button>
            );
        }
        return (
            <div>
                <section className="borrow-button-container">
                    <aside className="aside-items">
                        <div className="book-cover-img">
                            <img src={this.state.image} alt="book-cover.img" />
                        </div>
                        {/* <form> */}
                        <div className="borrow-btn">{buttonStatus}</div>
                        {/* </form> */}
                    </aside>
                </section>
            </div>
        );
    }
}

export default connect(mapStateToProps)(BorrowButton);