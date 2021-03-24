import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import PetsIcon from '@material-ui/icons/Pets';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import SettingsIcon from '@material-ui/icons/Settings';
import PollIcon from '@material-ui/icons/Poll';
import './Sidebar.css'
function Sidebar() {
    return (
        <div className='sidebar'>
            <IconButton aria-label="" ><PetsIcon/></IconButton>
            <IconButton aria-label="" ><BusinessCenterIcon/></IconButton>
            <IconButton aria-label="" ><CardMembershipIcon/></IconButton>
            <IconButton aria-label="" ><AssignmentIcon/></IconButton>
            <IconButton aria-label="" ><LocalAirportIcon/></IconButton>
            <div className='Down'>
            <IconButton aria-label="" ><SettingsIcon/></IconButton>
            <IconButton aria-label=""><PollIcon/></IconButton>
            </div>
        </div>
    )
}

export default Sidebar
