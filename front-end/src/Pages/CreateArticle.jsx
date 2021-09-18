import React,{useState} from 'react'
import ReactQuill from 'react-quill'
import axios from 'axios'
import uuidv4 from 'uuid'
import 'react-quill/dist/quill.snow.css'

function CreateArticle() {

    const [text,setText]=useState('')
    const [file,setFile]=useState('')
    const [title,setTitle]=useState('')
    const [cover,setCover]=useState('')
    const [type,setType]=useState('')

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
        console.log("image path",value.target.files[0]);

        setCover(value.target.files[0])
    }
    const onTextChange=(value)=>{
        console.log("text vakue",value);
        setText(value)
    }
    const onFileChange=()=>{
        const input = document.createElement('input');  
        input.setAttribute('type', 'file');  
        input.setAttribute('accept', 'image/*');  
        input.click(); 
        input.onchange=()=>{
            const file=input.files[0]
            let context={...text,file}
            console.log("file",context);
        }
    }

    const onTypeChange=(value)=>{
        console.log("selected",value.target.value);
        setType(value.target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        const data=new FormData();

        data.append('title',title)
        data.append('image',cover)
        data.append('content',text)
        data.append('authors','vasile')
        data.append('tag',"important")
        data.append('type',"news")

        console.log("data to be sent", data);
        axios.post('http://localhost:3001/post-article',data,{
            onUploadProgress:progressEvent=>{
                console.log("uploaded ",progressEvent.loaded/progressEvent.total);
            }
        })
            .then(res=>console.log("post data",res))
            .catch(err=>console.log(err))
    }

    const modules = {
        toolbar: {
            container:[
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ],
        table: true  
        }
    }     
    return (
        <div className="container pt-3 px-0">
            <div className="row">
                <div className="col">
                    <form onSubmit={(e)=>onSubmit(e)} >
                        <h5 className="fw-bold pt-5 pb-3 px-3 px-lg-0">Create new Article</h5>
                        <div className="mb-3 px-3 px-lg-0">
                            <label for="exampleInputEmail1" className="form-label">Article title</label>
                            <input type="text" className="form-control" onChange={(e)=>onTitleChange(e)} required={true}/>
                        </div>
                        <div className="mb-3">
                            <label for="formFile" className="form-label">Select Cover image</label>
                            <input className="form-control" type="file" id="formFile"  onChange={(e)=>onCoverChange(e)} required={true}/>
                        </div>
                        
                        <div className="mb-3 px-3 px-lg-0">
                        <label for="exampleInputEmail1" className="form-label">Article Content</label>
                            <ReactQuill 
                                theme="snow" 
                                modules={modules} 
                                formats={formats}
                                value={text}
                                onChange={onTextChange}
                            />
                        </div>

                        <div className=" px-3 px-lg-0">
                            <label className="form-label">Select type of news</label>
                        </div>
                        <div className="form-check-inline mb-3">
                            <input className="form-check-input" id="inlineCheckbox1" type="radio" value="RECOMMENDED" checked={'RECOMMENDED' === type} onChange={onTypeChange}/>
                            <label className="form-check-label mx-2" for="inlineCheckbox1">recommended</label>
                        </div>
                        <div className="form-check-inline mb-3">
                            <input className="form-check-input" id="inlineCheckbox2" type="radio" value="BREAKING" checked={'BREAKING' === type} onChange={onTypeChange}/>
                            <label className="form-check-label mx-2" for="inlineCheckbox2">breaking</label>
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
