import React from 'react';

const PostStatusFilter = () => {
    return(
        <div className='btn-group'>
            <button type="button" className='btn btn-info'>All</button>
            <button type="button" className='btn btn-outline-secondary'>Favourite</button>
        </div>
    )
}

export default PostStatusFilter;