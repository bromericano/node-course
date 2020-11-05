// const square = function(x) {
//     return x*x
// }

// const square = (x) => {
//     return x*x
//     };

// const square = (x) => x * x

// console.log(square(3));

const ePlanner = {
    name: 'Birthday Party',
    guestList: ['Luke','Jen', 'Mike'],
    printGuestList() {
        console.log('Guest List for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

ePlanner.printGuestList();
