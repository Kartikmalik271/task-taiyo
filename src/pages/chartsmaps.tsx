import React from 'react'
import {  QueryClient, QueryClientProvider } from "react-query";
import Linechart from '../components/chartsmaps/linechart'
import Worldmap from '../components/chartsmaps/worldmap'
import Overalldata from '../components/chartsmaps/overalldata'


const Chartsmaps = ()=>{
    const queryClient = new QueryClient();
    return(
        <div className="h-screen w-full overflow-y-auto">

            <QueryClientProvider client={queryClient}>
            <Overalldata/>
            <Linechart/>
            <Worldmap/>
            </QueryClientProvider>
            
        </div>
    )
}
export default Chartsmaps