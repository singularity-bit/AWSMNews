import React,{useState} from 'react'
import ReactQuill from 'react-quill'
import axios from 'axios'

import 'react-quill/dist/quill.snow.css'

function CreateArticle() {

    const [text,setText]=useState('')
    const [file,setFile]=useState('')
    const [title,setTitle]=useState('')
    const [cover,setCover]=useState('')
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ],
    }     
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    const onTitleChange=(value)=>{
        setTitle(value.target.value)
    }
    const onCoverChange=(value)=>{
        setCover(value.target.value)
    }
    const onTextChange=(value)=>{
        setText(value.target.value)
    }
    const onFileChange=(value)=>{
        setFile(value.target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        const data={
            title:title,
            image:'file',
            content:text,
            authors:{
                name:'me'
            },
            tag:"important",
            type:"news"
        }
        axios.post('http://localhost:3001/post-article',{data})
            .then(res=>console.log("post data",res))
            .catch(err=>console.log(err))
    }

    return (
        <div className="container pt-3 px-0">
            <div className="row">
                <div className="col">
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <h5 className="fw-bold pt-5 pb-3 px-3 px-lg-0">Create new Article</h5>
                        <div className="mb-3 px-3 px-lg-0">
                            <label for="exampleInputEmail1" className="form-label">Article title</label>
                            <input type="text" className="form-control" onChange={onTitleChange}/>
                        </div>
                        <div className="mb-3">
                            <label for="formFile" className="form-label">Select Cover image</label>
                            <input className="form-control" type="file" id="formFile" onChange={onCoverChange}/>
                        </div>
                        
                        <div className="mb-3 px-3 px-lg-0">
                        <label for="exampleInputEmail1" className="form-label">Article Content</label>
                            <ReactQuill 
                                theme="snow" 
                                modules={modules} 
                                formats={formats}
                                value={text}
                                onChange={onTextChange}
                                onFileChange={onFileChange}
                            />
                        </div>
                        <div className="d-grid gap-2 d-md-block">
                            <button type="submit" className="btn btn-success ">Post</button>
                            <button className="btn btn-secondary mx-5">Cancel</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default CreateArticle
