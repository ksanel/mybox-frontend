import React from 'react'

const Breadcrumb = () => {
  return (
    <>
        <div className="row">
            <div className="col-md-12">
                <div className="card mt-3 border-0 shadow">
                    <div className="card-body pb-0">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a className='text-warning text-decoration-none' href="#">Home</a></li>
                                <li class="breadcrumb-item"><a className='text-warning text-decoration-none' href="#">Library</a></li>
                                <li class="breadcrumb-item"><a className='text-warning text-decoration-none' href="#">Data</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Breadcrumb