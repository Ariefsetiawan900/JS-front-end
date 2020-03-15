import React, { Component } from "react"
import Axios from "axios";
import Truncate from "react-truncate"

const URL_STRING = "/api/v1/";
class Cardlist extends Component {
  state = {
    library: []
  }

  getBookData = () => {
    Axios.get("/api/v1/")
      .then(({ data }) => {
        // console.log(data);
        this.setState({
          library: data.result
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  componentDidMount = () => {
    this.getBookData()
  }
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
            library &&
            library.map(item => (
              <div key={item.id} className="card-container">
                <a href="#">
                  <img src={item.image} alt="book-cover" />
                  <div className="card-text-container">
                    <h3>{item.title}</h3>
                    <p>
                      <Truncate
                        lines={2}
                        ellipsis={
                          <span>
                            ... <a href="/link/to/article">Read more</a>
                          </span>
                        }
                      >
                        {item.description}
                      </Truncate>
                    </p>
                    {/* <p>{}</p> */}
                  </div>
                </a>
              </div>
            ))
          )}
        </section>
      </div>
    )
  }
}

export default Cardlist
