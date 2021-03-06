import React from 'react'
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';

export default class TrackCard extends React.Component {
    render() {
        const handleTouchTap = () => {}
        return (
            <div className="track-card">
                <div className="left-container">
                    <img className="album-artwork" src="http://placehold.it/500x500" alt="Album"/>
                    <div>
                        <p className="track-name">Test 1234</p>
                        <p className="artist-name">Mitch Ball</p>
                    </div>
                </div>
                <p className="bpm">120bpm</p>
                <div>
                    <div className="tag-container">
                        <Chip onTouchTap={handleTouchTap} className="tag">West Coast Rap</Chip>
                        <Chip onTouchTap={handleTouchTap} className="tag">Latin Rap</Chip>
                        <Chip onTouchTap={handleTouchTap} className="tag">Text Chip</Chip>
                    </div>
                    <div className="tag-container">
                        <Chip onTouchTap={handleTouchTap} className="tag">Gangsta Rap</Chip>
                        <Chip onTouchTap={handleTouchTap} className="tag">Alternative Rap</Chip>
                        <Chip onTouchTap={handleTouchTap} className="tag">Hardcore Rap</Chip>
                    </div>
                </div>
                <div>
                    <RaisedButton className="button" label="View" primary={true}/>
                    <RaisedButton className="button" label="Edit" secondary={true}/>
                </div>
            </div>
        )
    }
};
