const ages = [
    { nama:'shark', likes:'ocean'},
    { nama: 'whale', likes:'ocean'},
    { nama: 'turtle', likes:'pond'},
    { nama: 'otter', likes: 'fish biscuit' },
    { nama: 'lion', likes:'land'},
    { nama: 'nemo', likes:'ocean'},
 
]; 
const hewan = ages.filter   (age =>{
    return age.likes=="ocean"
})

  console.log(hewan);
  
  


