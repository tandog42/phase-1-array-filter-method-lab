function findMatching(drivers, string) {
 return drivers.filter((Dri) => Dri.toLowerCase() === string.toLowerCase() 
 )
}
function fuzzyMatch(drivers, string){
    return drivers.filter(nameOfItem => nameOfItem.startsWith(string) )}
    
    function matchName(drivers,string){
        {
            return drivers.filter(nameOfItem => nameOfItem.name === string)
        }
    }  