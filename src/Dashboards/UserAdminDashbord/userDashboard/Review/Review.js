import React from 'react';
import DashbordBar from '../../../../Component/DashbordBar/DashbordBar';
import Sidebar from '../../../Sidebar/Sidebar';

const Review = () => {
    return (
        <div className='row '>
            <div className="col-lg-3">
                <Sidebar/>
            </div>
            <div className="col-lg-9">
                <DashbordBar/>
                  <p>this is review page</p>
            </div>
        </div>
    );
};

export default Review;