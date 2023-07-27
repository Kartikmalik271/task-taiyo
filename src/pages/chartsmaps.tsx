import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Linechart from '../components/chartsmaps/linechart';
import Worldmap from '../components/chartsmaps/worldmap';
import Overalldata from '../components/chartsmaps/overalldata';

const Chartsmaps: React.FC = () => {
  // Create a new instance of QueryClient to manage data fetching and caching.
  const queryClient = new QueryClient();

  return (
    <div className="h-screen w-full overflow-y-auto">
      {/* Wrap the components that use react-query with QueryClientProvider to enable data fetching. */}
      <QueryClientProvider client={queryClient}>
        {/* Render the components for displaying COVID-19 data */}
        <Overalldata /> {/* Component to display overall COVID-19 data */}
        <Linechart />   {/* Component to display line chart of COVID-19 cases, deaths, and recoveries */}
        <Worldmap />    {/* Component to display a world map with COVID-19 data */}
      </QueryClientProvider>
    </div>
  );
};

export default Chartsmaps;
