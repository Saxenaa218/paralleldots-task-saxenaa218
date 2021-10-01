import React from 'react';
import Card from '../Card';
import Avatar from '../Avatar';
import { DUMMY_DATA } from '../../utils';
import './ActiveProjectsWidget.scss';

const ActiveProjectsWidget = () => {
    return (
        <div className="active-projects-widget">
            <div className="heading">
                <label>ACTIVE PROJECTS</label>
                <button className="blue-btn-link">Show All</button>
            </div>
            <Card>
                <div className="content">
                    <div className="avatar-and-details">
                        <Avatar src={"S"} size={80} />
                        <div className="details">
                            <div>{DUMMY_DATA.activeProjects.title}</div>
                            <label>{DUMMY_DATA.activeProjects.designation}</label>
                            <label className="time-remaining">{DUMMY_DATA.activeProjects.remainingTime}</label>
                        </div>
                    </div>
                    <div className="budget">Budget: {DUMMY_DATA.activeProjects.budget}</div>
                    <div className="buttons">
                        <button className="blue-btn">Deliver</button>
                        <button className="grey-btn">Cancel</button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ActiveProjectsWidget;