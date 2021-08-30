import React,{useState} from 'react'
const menuList=[
    {
        title:"News",
        expanded:false
    },
    {
        title:"Investigations",
        expanded:false
    },
    {
        title:"Video",
        expanded:false
    },
    {
        title:"Special Reports",
        expanded:false
    },
    {
        title: "Blog",
        expanded:false
    },
    {
        title:"Consultant",
        expanded:false
    },
    {
        title:"About",
        expanded:false
    } 
]
function Menu() {
    
    const [expanded, setExpanded] = useState(menuList)

    const expandDropdown=(index)=>{
        //mutating the list
        let items=[...expanded];
        let item={...items[index]};
        item.expanded=!item.expanded;
        items[index]=item;
        setExpanded(items)
    }

    //displaying the menu list
    const showList=(list)=>{
        return list.map((item,index)=>{
            return (
                <li className="nav-item dropdown px-3" key={index}>
                <a className="nav-link dropdown-toggle fw-bolder fs-6 text-dark" 
                    href="#" id="navbarDarkDropdownMenuLink" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="true"
                    onClick={()=>{expandDropdown(index)}} 
                >
                    {item.title}
                </a>
                <ul className={item.expanded?"dropdown-menu show":"dropdown-menu"} aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            )
        })
    }
    return (
        <nav className="container navbar sticky-top navbar-expand-lg border-bottom border-dark ">
            <div className="d-flex justify-content-around ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                    {showList(expanded)}
                </ul>
                
                </div>
            </div>
        </nav>
    )
}

export default Menu