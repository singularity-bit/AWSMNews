import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,fas,faSearch } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <header className="navbar  sticky-top  navbar-light p-0">
            <div className="container d-flex justify-content-between  py-3 border-bottom border-1 p-0">
                <div className="btn-toolbar d-flex align-items-center" role="toolbar">
                    <div className="btn-group ">
                        <button type="button" className="btn btn-dark rounded-0 m-0"><span className="font-monospace fw-bolder p-3">SUBSCRIBE</span></button>
                    </div>
                    <div className="btn-group px-2">
                    <a className="text-decoration-none text-dark" href="#" ><FontAwesomeIcon icon={faNewspaper} className="mx-2 " /> Send news</a>
                </div>
                </div>
                
                <Link to='/' className="navbar-brand mb-0 fs-1 fw-bold" >AWSMNews  </Link>
                
                <form className="d-flex">
                    <div className="input-group">
                    <input type="text" className="form-control" placeholder="search..."></input>
                    <button className="input-group-text bg-transparent" id="basic-addon1"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>           
                    </div>           
                </form>
            </div>
        </header>
    )
}

export default Header
