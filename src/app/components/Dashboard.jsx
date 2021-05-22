import React from 'react';
import { connect } from 'react-redux';
import TaskList from './TaskList';


function Dashboard({ groups }) {
    return (
        <div>
            <h2>Dashboard</h2>
            {groups.map(group=>(
                <div key={group.id}>
                    <TaskList id={group.id} name={group.name}/>
                </div>
            ))}
        </div>
    )
}

function mapStateToProps(state){
    return {
        groups:state.groups
    }
}


export default connect(mapStateToProps)(Dashboard);