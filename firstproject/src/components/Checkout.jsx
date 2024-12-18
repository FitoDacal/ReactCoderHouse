export default function Checkout() {

    return (
        <div>
            <form>
            <div className="mb-3">
                    <label htmlFor="exampleInputFullName1" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="exampleInputFullName1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone number</label>
                    <input type="tel" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Finalize purchase order</button>
            </form>
        </div>
    )
}