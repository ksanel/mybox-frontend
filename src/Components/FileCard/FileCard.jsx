import React from 'react'

const FileCard = () => {
    return (
        <div className="col-lg-2 mb-2">
            <div className="card border-0 shadow" role="button">
                <div className="card-body">
                    <div className="row text-center mb-3">
                    <i class="fa-solid fa-file display-1 text-secondary"></i>
                    </div>
                    <div className="row text-center">
                        <h5 className='text-secondary text-truncate'>demo-pdf-file.pdf</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileCard