function Contact() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h3 className="mb-3">Contact Us</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Your name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
          </div>

          <button type="submit" className="btn btn-success">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact