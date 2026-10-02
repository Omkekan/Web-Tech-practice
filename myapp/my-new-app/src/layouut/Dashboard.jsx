import React from 'react';
import Footercomp from '../component/footercomp';



const Dashboardcomp = ()  =>  {
    return(
        <div className='container mt-2'>

            <div className='card border-primary'>
                <navComp></navComp>

            </div>
            <div>
                <outlet></outlet>
            </div>
            <div>
                <Footercomp></Footercomp>
            </div>
        </div>
    )
}