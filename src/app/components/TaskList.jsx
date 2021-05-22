import React, { Component } from 'react';
import { connect } from 'react-redux';

function TaskList({ tasks, name }) {
    return (
        <div>
            <h3>{name}</h3>
                {tasks.map(task=>(<div key={task.id}>{task.name}</div>))}
        </div>
    )
}

function mapStateToProps(state, ownProps){
    let groupID = ownProps.id;
    return {
        name:ownProps.name,
        id:groupID,
        tasks:state.tasks.filter(task=>task.group === groupID)
    }
}

export default connect(mapStateToProps)(TaskList)
