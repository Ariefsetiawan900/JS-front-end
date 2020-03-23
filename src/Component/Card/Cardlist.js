import React, { Component } from "react"
import Axios from "axios";
import Truncate from "react-truncate"
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllBook } from "../../redux/action/book";


const mapStateToProps = (book) => {
  return {
    book
  }
}

class Cardlist extends Component {
  state = {
    library: []
  }

  getBookData = async() => {
    await this.props.dispatch(getAllBook())
    console.log('book',this.props.book.book.bookData.result)
   this.setState({
     library: this.props.book.book.bookData.result
   })
  }
  componentWillMount = () => {
    this.getBookData()
  }

  // componentDidUpdate = () => {
    // console.log('update',this.props.book.book.bookData.data)
    // this.state.library = this.props.book.book.bookData.
  // }

  render() {
    const { library } = this.state
    console.log(library)
    return (
      <div>
        <section className="content-container">
          {library.length < 1 ? (
            <div>
              <h1>Data is empty</h1>
            </div>
          ) : (
            this.props.book.book.bookData.result &&
            this.props.book.book.bookData.result.map(item => (
              <Link to={{ pathname: `/book/${item.id}`, book:item}}>
              <div key={item.id} className="card-container">
                
                  <img src={item.image} alt="book-cover" />
                  <div className="card-text-container">
                    <h3>{item.title}</h3>
                    <p>
                      <Truncate
                        lines={2}
                        ellipsis={
                          <span>
                            ... 
                          </span>
                        }
                      >
                        {item.description}
                      </Truncate>
                    </p>
                    {/* <p>{}</p> */}
                  </div>
              </div>
              </Link>
            ))
          )}
        </section>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Cardlist);
