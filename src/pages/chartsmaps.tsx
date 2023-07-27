import React from 'react'
import Linechart from '../components/chartsmaps/linechart'
import Worldmap from '../components/chartsmaps/worldmap'

const Chartsmaps = ()=>{
    return(
        <div className="h-screen overflow-y-auto">
            <h1 className="text-3xl font-bold underline text-red-600 mb-5 ">
                Add Contact
            </h1>
            <Linechart/>
            <Worldmap/>
            
        </div>
    )
}
export default Chartsmaps