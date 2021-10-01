import React from 'react';
import Card from '../Card';
import './SpreadProfileWidget.scss';

const SpreadProfileWidget = () => {
    return (
        <div className="spread-your-profile">
            <div className="speed-label">
                <label>SPEED YOUR PROFILE</label>
            </div>
            <Card>
                <section className="buttons">
                    <button className="blue-btn">Share with facebook</button>
                    <button className="white-btn">Tweet with twitter</button>
                    <button className="white-btn">Save with pinterest</button>
                </section>
            </Card>
        </div>
    )
}

export default SpreadProfileWidget;