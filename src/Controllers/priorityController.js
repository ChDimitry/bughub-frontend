const colors = ['#BB6464', '#FBC687', '#92BA92']

export default (priorityIn) =>{
    const level = ['High', 'Medium', 'Low']
    return {
        level: level[priorityIn - 1],
        color: colors[priorityIn - 1]
    }
}