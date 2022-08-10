export default function ranId(){
    let localNo= parseInt(localStorage.getItem('id'))
    if (!localNo) {
        localNo= 0;
    }
    localNo+=1;
    localStorage.id= localNo;
    return localNo
}