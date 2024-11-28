import React from 'react'

const Examine = () => {
    const [img, setImg] = useState();
    const formdata = new FormData()

    formdata.append("image", img)

    const handleClick = () => {
        fetch("http://localhost:8080/single", {
            method: "POST",
            body: formdata,
        })
          .then((res) => {
            console.log(res.message)
          })
          .catch((err) => {
            console.log(err)
          })
    }

    return (
        <div>
            <h1>Upload Image</h1>
            <input onChange={(e) => setImg(e.target.files[0])}  type="file"/>
            <br />
            <button onClick={ handleClick }>Submit</button>
        </div>
    )
}

export default Examine