import React from 'react'
import './WatchTab.css'

function WatchTab() {
    return (
        <div className="watchTab">
            <div className="watchTab__header">
                <p>Watch TV shows and movies anytime, anywhere — personalized for you.</p>
                <button className="btn">Watch free for 30 days</button>
            </div>
            <div className="watchTab__images">
                <div className="watchTab__info">
                    <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt=""/>
                    <h4>Watch on yor TC</h4>
                    <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="watchTab__info">
                    <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt=""/>
                    <h4>Watch instantly or download for later</h4>
                    <p>Available on phone and tablet, wherever you go</p>
                </div>
                <div className="watchTab__info">
                    <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt=""/>
                    <h4>Use any computer</h4>
                    <p>Watch right on Netflix.com.</p>
                </div>
            </div>
        </div>
    )
}

export default WatchTab
