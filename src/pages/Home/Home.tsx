import React from 'react';
import Card from '../../components/Card';
import './Home.css';

const DUMMY_DATA = {
    profile: {
        image: '',
        displayName: 'Jana Strassmann',
        designation: 'UI/UX Designer',
        shots: 69,
        followers: 2747,
        following: 678,
        lightning: 78
    }
}

const Home: React.FC<any> = () => {
    return (
        <div className="home">
            <h2>My Page</h2>
            <section className="home-section-first">
                <Card>Hello</Card>
                <Card>Hello</Card>
                <Card>Hello</Card>
            </section>
            <label>ACTIVE PROJECTS</label>
            <section className="home-section-second">
                <Card>Hello</Card>
                <Card>Hello</Card>
            </section>
            <section className="home-section-third">
                <Card>Hello</Card>
            </section>
        </div>
    );
}

export default Home;