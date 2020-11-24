import React,{useState} from 'react'

const _BookForm=()=>{

const [book,setBook]= useState({})

const handleChange=(event)=>{
  const {name,value}=event.target;
  setBook(prevBook=>({
    ...prevBook,
    [name]:value
  }))

}
const handleSubmit=(e)=>{
  e.preventDefault();
}



  return(
    <div>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="title" className="col col-form-label">Book Title</label>
        <div className="col-sm-12">
          <input type="text" className='form-control' id='title' name='title' value={book.title} onChange={handleChange} placeholder="Enter the title" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="author" className="col col-form-label">Book Author</label>
        <div className="col-sm-12">
          <input type="text" className='form-control' id='author' name='author' value={book.author} onChange={handleChange} placeholder="Author name" />
        </div>
      </div>
      <div className="form-group row m-0 mt-4">
        <div className="col-sm-6">
          <button type="submit" className="btn btn-primary w-100" >Save</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export const BookForm=_BookForm;