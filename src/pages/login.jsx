

function Login (){
    return(
        <div className="d-flex justify-content-center w-100 vh-100 align-items-center">
            <form className="d-flex flex-column w-50 p-5 border rounded-4 bg-light">
                <h2>Вход</h2>
                <input type="text" className="form-control mb-3" placeholder="ID"/>
                <input type="text" className="form-control mb-3" placeholder="Token"/>
                <button className="btn btn-primary">ВХОД</button>
            </form>
        </div>
    )
}

export default Login