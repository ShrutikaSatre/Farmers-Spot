import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import './addProduct.css'

function AddProduct() {

    const [name, setname] = useState();
    const [price, setprice] = useState();
    const [rating, setrating] = useState();
    const [ratingError, setratingError] = useState();
    const [description, setdescription] = useState();
    const [nameError, setnameError] = useState();
    const [priceError, setpriceError] = useState();
    const [descriptionError, setdescriptionError] = useState();
    const [image, setImage] = useState({img:""});


    //function for toast message
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    
    var err_count = 0;

    async function product(e){
        e.preventDefault();


        if(name === undefined)
        {
            setnameError("Please Enter name !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Please enter name'
              })
        }
        else{
            setnameError(undefined);
        }

        if(price === undefined)
        {
            setpriceError("Please enter price!");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Please enter price'
              })
        }
        else{
            setpriceError(undefined);
        }

        if(rating === undefined)
        {
            setratingError("Please Please enter rating");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Please enter rating'
              })
        }
        else{
            setratingError(undefined);
        }

        if(description === undefined)
        {
            setdescriptionError("Please Please enter description");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Please enter description'
              })
        }
        else{
            setdescriptionError(undefined);
        }



        
        if(err_count === 0)
        {   
            send_data();
            setTimeout(function(){ document.location.href = '/admin' }, 3000);
            Swal.fire({
            icon: 'success',
            title: 'Thank You...',
            text: 'Your product stored successfully',
            })
        }

    }

    const handleFileUpload=async(e)=>{
        const file = e.target.files[0];
        const base64 = await convertToBase64(file)
        setImage(base64)
        console.log(base64)
    }

    async function send_data(){
        setrating(rating.replace(/(?:\r\n|\r|\n)/g, '\\n'))
        try{
            const productData = {
                name, 
                price, 
                rating, 
                description,
                image
            };

            await axios.post("http://localhost:5000/addProducts", productData);

        } catch(err) {
            console.error(err);
        }
    }

    return (
    <div className="container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
            <div className="row d-flex">
                <form className="col-lg-12" onSubmit={product}>
                    <div className="card2 card border-0 px-4 py-5">
                        <h3 className="text-center">Update rating</h3>
                        <center><hr className="w-50"/></center>
                        <div className="row px-3">          
                            <h6 className="mb-0 mt-3 text-sm">name :<span className="text-danger">*</span></h6>
                            <input className="input" type="text"
                            onChange={(e) => setname(e.target.value)}
                            value={name}
                            />
                            <small><b className="text-danger">{nameError}</b></small>
                        </div>
                        <div className="row px-3"> 
                                <h6 className="mb-0 mt-3 text-sm">price :<span className="text-danger">*</span></h6>
                            <input className="input" type="text"
                            onChange={(e) => setprice(e.target.value)}
                            value={price}
                            />
                            <small><b className="text-danger">{priceError}</b></small>
                        </div>
                        <div className="row px-3"> 
                            <h6 className="mb-0 mt-3 text-sm">rating :</h6>
                            <textarea rows="10" className="input" type="text"
                            onChange={(e) => setrating(e.target.value)}
                            value={rating}
                            />
                            <small><b className="text-danger">{ratingError}</b></small>
                        </div>
                        <div className="row px-3"> 
                                <h6 className="mb-0 mt-3 text-sm">description :</h6>
                            <input className="input" type="text"
                            onChange={(e) => setdescription(e.target.value)}
                            value={description}
                            />
                            <small><b className="text-danger">{descriptionError}</b></small>
                        </div>
                        <div className="row px-3"> 
                            <h6 className="mb-0 mt-3 text-sm">Image/Thumbnail :</h6>
                            <input className="input" type="file"
                            accept='.jpeg, .png, .jpg, .svg'
                            onChange={(e) => handleFileUpload(e)}
                            />
                        </div>
                        <center><div className="mb-3 mt-4 px-3"> <button type="submit" className="btn btn-primary text-center btn-block w-lg-50">Submit</button></div></center>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default AddProduct

function convertToBase64(file){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}

{/* <div>
            <h1>Give Your product</h1>
            <form onSubmit={product}>
                <input type="text" placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <input type="email" placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <input type="text" placeholder="Enter your query"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                /><input type="text" placeholder="Enter experience"
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                /><input type="text" placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                />
                <button type="submit">Submit</button>                
            </form>
        </div> */}