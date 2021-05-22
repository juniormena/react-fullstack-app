export const defaultState = {
    users:[{
        id:"U1",
        name:"Dev"
    },{
        id:"U2",
        name:"Prod"
    }],
    groups:[{
        name:"To Do",
        id:"G1",
        owner:"U1"
    },{
        name:"Doing",
        id:"G2",
        owner:"U1"
    },{
        name:"Done",
        id:"G3",
        owner:"U1"
    }],
    tasks:[{
        name:"Do tests",
        id:"T1",
        group:"G1",
        owner:"U1",
        isComplete:false
    },{
        name:"Do tests 2",
        id:"T2",
        group:"G2",
        owner:"U2",
        isComplete:false
    }],
    comments:[{
        owner:"U1",
        id:"C1",
        task:"T1",
        content:"Great work!!!"
    },{
        owner:"U2",
        id:"C2",
        task:"T2",
        content:"Great work 2!!!"
    }]
}