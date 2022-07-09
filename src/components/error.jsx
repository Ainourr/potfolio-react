import React from 'react'

const error = () => {
  return (
      <div className='error'>
      
      <body className="bg-dark text-white py-5">
           <div className="container py-5">
                <div class="row">
                     <div className="col-md-2 text-center">
                          <p><i class="fa fa-exclamation-triangle fa-5x"></i><br/>Status Code: 403</p>
                     </div>
                     <div className="col-md-10">
                          <h3>OPPSSS!!!! Sorry...</h3>
                          <p>Sorry, your access is refused due to security reasons of our server and also our sensitive data.<br/>Please go back to the previous page to continue browsing.</p>
                          <a className="btn btn-warning" href="../index.html"> Back to Home Page</a>
                     </div>
                </div>
           </div>
      
        
      </body>
          </div>
  )
}

export default error
