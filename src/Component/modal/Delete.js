import React from "react";
import {Link} from 'react-router-dom'

import "../modal/style/Delete.css";
import checkedLogo from "../../Images/checked.png";
import axios from "axios";
import { connect } from 'react-redux'
import { deleteBook } from '../../redux/action/detail'

const mapStateToProps = (detail) => {
  return {
    detail
  }
}



const Host = "/api/v1/";
const DeleteModal = props => {
    console.log(props.data.id);
    
    
    const deleteBookData = () => {
        props.dispatch(deleteBook(props.data.id))
    };
    return (
        <div id="deleteModal" className="delete-modal">
            <div className="delete-modal-content">
                <div className="delete-modal-header">
                    <Link to='/home'>
                    <span onClick={deleteBookData} className="close">
                        &times;
                    </span>
                    </Link>

                </div>
                <div className="delete-modal-body">
                    <div className="body-wrapper">
                        <img src={checkedLogo} alt="" srcSet="" />
                        <h2>
                            Data <span>{props.data.title}</span> Berhasil Dihapus!
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(DeleteModal);