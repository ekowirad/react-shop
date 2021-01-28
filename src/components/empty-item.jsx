import React from 'react'
import { ReactComponent as BagIcon} from '../assets/shopping-bag.svg';

function EmptyItem() {
    return (
        <div className="empty-container">
            <BagIcon className="icon-wrap"></BagIcon>
            <h1>No item here</h1>
        </div>
    )
}

export default EmptyItem
