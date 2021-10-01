import React from 'react';
import Avatar from '../../components/Avatar';
import Card from '../../components/Card';
import ShotsWidget from '../../components/ShotsWidget';
import ActiveProjectsWidget from '../../components/ActiveProjectsWidget';
import SpreadProfileWidget from '../../components/SpreadProfileWidget';
import { DUMMY_DATA } from '../../utils';
import './Home.scss';

const Home: React.FC<any> = () => {
    return (
        <div className="home">
            <section className="first">
                <div className="profile">
                    <header className="first--label">My Page</header>
                    <Card>
                        <div className="header">
                            <div className="header-avatar">
                                <Avatar src={"A"} size={50} />
                                <div className="profile-names">
                                    <span>{DUMMY_DATA.profile.displayName}</span>
                                    <label>{DUMMY_DATA.profile.designation}</label>
                                </div>
                            </div>
                            <div className="header-edit-button">
                                <button className="blue-btn">Edit</button>
                            </div>
                        </div>
                        <div className="numbers">
                            <div className="each">
                                <span><b>{DUMMY_DATA.profile.shots}</b></span>
                                <label>Shots</label>
                            </div>
                            <div className="each">
                                <span><b>{DUMMY_DATA.profile.followers}</b></span>
                                <label>Followers</label>
                            </div>
                            <div className="each">
                                <span><b>{DUMMY_DATA.profile.following}</b></span>
                                <label>Following</label>
                            </div>
                            <div className="each">
                                <span><b>{DUMMY_DATA.profile.lightning}</b></span>
                                <label>Lightning</label>
                            </div>
                        </div>
                        <div className="footer">
                            <button className="blue-btn-link">Message</button>
                            <button className="grey-btn">Follow</button>
                        </div>
                    </Card>
                </div>
                <Card>
                    <div className="page-middle-card">
                        <div className="header">
                            <label>Give your support</label>
                        </div>
                        <div className="body">
                            Quantity
                            Quantity
                        </div>
                        <div className="footer">
                            <button className="blue-btn-link">Support</button>
                        </div>
                    </div>
                </Card>
                <SpreadProfileWidget />
            </section>
            
            <section className="second">
                <ActiveProjectsWidget />
                <div className="right">
                    <div className="heading">
                        <label>WORKS AVAILABLE</label>
                        <button className="blue-btn-link">Show All</button>
                    </div>
                    {DUMMY_DATA.worksAvailable.map((item: any) => <Card><div className="works-available">
                        <div className="works-available-card">
                            <Avatar src={"A"} />
                            <div>
                                <div>{item.title}</div>
                                <label>{item.designation}</label>
                            </div>
                        </div>
                        <div><button className="grey-btn">Quote</button></div>
                    </div></Card>)}
                </div>
            </section>

            <ShotsWidget />
        </div>
    );
}

export default Home;