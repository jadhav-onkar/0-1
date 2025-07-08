
// Exclude - lets you exclude from type with union

export {}

type status = 'completed'|'partial'|'uncompleted'

type updatedStatus = Exclude<status, 'partial'>

function isCompleted(feestatus:updatedStatus){
    console.log("fee status: ",feestatus)
}
isCompleted('completed')


