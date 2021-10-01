import React from 'react';
import Avatar from '../Avatar';
import Card from '../Card';
import { DUMMY_DATA } from '../../utils';
import './ShotsWidget.scss';

const ShotsWidget = () => {
    return (
        <div className="shots">
            <div className="shots--label">My Shots</div>
            <section className="shots-cards">
                {DUMMY_DATA.myShots.map((item: any) => <Card>
                    <Avatar src={"A"} />
                    <div className="footer">
                        <div className="left">
                            <b>{item.title}</b>
                            <label>{item.date}</label>
                        </div>
                        <div className="right">...</div>
                    </div>
                </Card>)}
            </section>
        </div>
    )
}

export default ShotsWidget;