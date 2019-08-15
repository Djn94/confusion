import React, { Component } from 'react';
import { Card, CardTitle, CardActions, Button, Icon } from 'react-mdl';

class Event extends Component {
    render() {
        return (
            <div className="event-div">
                <Card shadow={0} className="event-card" style={{ width: '256px', height: '256px', background: '#3E4EB8' }}>
                    <CardTitle expand style={{ alignItems: 'flex-start', color: '#fff' }}>
                        <h4 style={{ marginTop: '0' }}>
                            Galveston Jewelry Show:<br />
                            August 27th, 2019<br />
                            12-10pm
        </h4>
                    </CardTitle>
                    <CardActions border style={{ borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff' }}>
                        <Button colored style={{ color: '#fff' }}>Add to Calendar</Button>
                        <div className="mdl-layout-spacer"></div>
                        <Icon name="event" />
                    </CardActions>
                </Card>
                <Card shadow={0} className="event-card" style={{ width: '256px', height: '256px', background: '#3E4EB8' }}>
                    <CardTitle expand style={{ alignItems: 'flex-start', color: '#fff' }}>
                        <h4 style={{ marginTop: '0' }}>
                            Fredericksberg Bazaar:<br />
                            October 31, 2019<br />
                            6pm-11pm
        </h4>
                    </CardTitle>
                    <CardActions border style={{ borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff' }}>
                        <Button colored style={{ color: '#fff' }}>Add to Calendar</Button>
                        <div className="mdl-layout-spacer"></div>
                        <Icon name="event" />
                    </CardActions>
                </Card>
                <Card shadow={0} className="event-card" style={{ width: '256px', height: '256px', background: '#3E4EB8' }}>
                    <CardTitle expand style={{ alignItems: 'flex-start', color: '#fff' }}>
                        <h4 style={{ marginTop: '0' }}>
                            The World Fair:<br />
                            December 1, 2019<br />
                            10:30am-6pm
        </h4>
                    </CardTitle>
                    <CardActions border style={{ borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff' }}>
                        <Button colored style={{ color: '#fff' }}>Add to Calendar</Button>
                        <div className="mdl-layout-spacer"></div>
                        <Icon name="event" />
                    </CardActions>
                </Card>
                <Card shadow={0} className="event-card" style={{ width: '256px', height: '256px', background: '#3E4EB8' }}>
                    <CardTitle expand style={{ alignItems: 'flex-start', color: '#fff' }}>
                        <h4 style={{ marginTop: '0' }}>
                            UHCL Crafts Show:<br />
                            December 13, 2019<br />
                            8am-8pm
        </h4>
                    </CardTitle>
                    <CardActions border style={{ borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff' }}>
                        <Button colored style={{ color: '#fff' }}>Add to Calendar</Button>
                        <div className="mdl-layout-spacer"></div>
                        <Icon name="event" />
                    </CardActions>
                </Card>
                <Card shadow={0} className="event-card" style={{ width: '256px', height: '256px', background: '#3E4EB8' }}>
                    <CardTitle expand style={{ alignItems: 'flex-start', color: '#fff' }}>
                        <h4 style={{ marginTop: '0' }}>
                            Norwegian Bracelet Contest:<br />
                            May 24, 2020<br />
                            7-11pm
        </h4>
                    </CardTitle>
                    <CardActions border style={{ borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff' }}>
                        <Button colored style={{ color: '#fff' }}>Add to Calendar</Button>
                        <div className="mdl-layout-spacer"></div>
                        <Icon name="event" />
                    </CardActions>
                </Card>
            </div>
        )
    }
}
export default Event;