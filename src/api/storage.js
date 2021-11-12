export const getHistory = (setLoading)=>{
    setLoading(true)
    var data = JSON.parse(localStorage.getItem('history'))
    setLoading(false)
    return data
}
export const addHistory = (setLoading, gameresult)=>{
    var newResult = []
    var data = getHistory(setLoading)

    if(data!== null){
        if(data.length > 20)
            data.pop()
        newResult=[...data]
    }
    newResult.unshift(gameresult)

    setLoading(true)
    localStorage.setItem('history', JSON.stringify(newResult))
    setLoading(false)
}