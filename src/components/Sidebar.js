import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions';

// Material UI Components
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Sidebar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: null,
            docked: null,
            mobile: null
        }
    }
    handleLogout = () => {
        this.props.actions.logout()
    }
    toggleOpenDrawer = () => {
        if (!this.state.mobile) {
            return;
        }
        this.setState({
            open: !this.state.open
        })
    }
    setSmall = () => {
        this.setState({open: false, docked: false, mobile: true})
    }
    setLarge = () => {
        this.setState({open: true, docked: true, mobile: false})
    }
    componentWillMount() {
        // Make navbar responsive
        const mediaQuery = window.matchMedia('(min-width: 650px)');
        if (mediaQuery.matches) {
            this.setLarge()
        } else {
            this.setSmall()
        }
        mediaQuery.addListener((mq) => {
            if (mq.matches) {
                this.setLarge()
            } else {
                this.setSmall()
            }
        });
    }

    render() {

        const style = {
            appbar: {
                position: 'fixed'
            },
            drawer: {
                paddingTop: '64px',
                zIndex: 1000
            },
            overlay: {
                zIndex: 900
            },
            imageContainer: {
                padding: '20px'
            },
            image: {
                width: '100%'
            },
            title: {
                textAlign: 'center',
                marginTop: 0
            }
        }
        const rightButtons = (
            <div>
                <FlatButton
                    className="button"
                    label="Artist Profile (T)"
                    href="/#/profile/artist"/>
                <FlatButton className="button" label="Track (T)" href="/#/track"/>
                <FlatButton className="button" label="All Tracks" href="/#/"/>
                <FlatButton className="button" label="My Tracks" href="/#/profile/artist/tracks"/>
                <FlatButton className="button" label="My Profile" href="/#/profile/user"/>
                <FlatButton className="button" label="Logout" onTouchTap={this.handleLogout}/>
            </div>
        )
        return (
            <div>
                {this.state.mobile
                    ? <AppBar
                            className="appbar"
                            title="Music-Licenser"
                            style={style.appbar}
                            onLeftIconButtonTouchTap={this.toggleOpenDrawer}
                            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    : <AppBar
                        className="appbar"
                        title="Music-Licenser"
                        style={style.appbar}
                        iconElementRight={rightButtons}
                        showMenuIconButton={false}/>
}
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);