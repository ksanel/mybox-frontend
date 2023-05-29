import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import FolderCard from '../../Components/FileCard/FolderCard'
import Search from '../../Components/Search/Search'
import FileCard from '../../Components/FileCard/FileCard'

const Home = () => {
  return (
    <>
        <Breadcrumb/>
        <Search/>
        <div className="row mt-3">
            <FolderCard
                name="Demo"
                folder_id="322937642"
            />
            <FolderCard
                name="Demo"
                folder_id="322937642"
            />
            <FileCard/>
        </div>
    </>
  )
}

export default Home