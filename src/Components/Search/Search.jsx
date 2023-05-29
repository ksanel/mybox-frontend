import React from 'react'

const Search = () => {
  return (
    <>
        <div className="row">
            <div className="col-md-12">
                <div className="card mt-3 border-0 shadow pb-0">
                    <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-7">
                                <form class="row g-3">
                                    <div class="col-auto">
                                        <input type="text" class="form-control" id="inputPassword2" placeholder="Search..."/>
                                    </div>
                                    <div class="col-auto">
                                        <button type="submit" class="btn btn-warning mb-3"><i class="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-auto">
                                        <div class="mb-1">
                                            <input class="form-control" type="file" id="formFileMultiple" multiple/>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <button className='btn btn-warning text-dark me-4'> <i class="fa-solid fa-folder-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Search