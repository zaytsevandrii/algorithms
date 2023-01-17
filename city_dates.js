const concerts={
    'London': new Date('2023-09-01'),
    'Manchester': new Date('2022-08-01'),
    'Leeds': new Date('2023-08-08'),
    'Bristol': new Date('2023-06-06'),
    'Dublin': new Date('2022-12-01'),
}
function concerntsToArray(concerts){
    return Object.keys(concerts)
        .filter(city=>concerts[city]>new Date())
        .sort((a,b)=>concerts[a]-concerts[b])
}

console.log(concerntsToArray(concerts))

//[ 'Bristol', 'Leeds', 'London' ]