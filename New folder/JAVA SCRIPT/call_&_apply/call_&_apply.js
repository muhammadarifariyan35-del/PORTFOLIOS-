


const greenLine ={
    bus: 'green line  poribohon',
    bCod: 'GL',
    ticket:[],
    book(setNumber, name){
        console.log(`${name} booked a set on ${this.bus} ticket number is ${this.bCod}-${setNumber}`);

        this.ticket.push({ticketInfo: `${this.bCod}-${setNumber}`, name})

    },

}


greenLine.book('c2', 'arif')
greenLine.book('g3', 'jui')


console.log(greenLine);







const sohag ={
    bus: 'sohag poribohon',
    bCode: 'SH',
    ticket: [],

}

const books = greenLine.book;


// book('b2', 'israt jahan jui')

books.call(sohag, 'b4', 'arif ariyan')
books.call(sohag, 'b4', 'arif ariyan')
books.call(greenLine, 'b4', 'arif ariyan')
console.log(sohag);


//!-----------------------------------------------------------


const silverCasel = {
    Name: 'SILVER CASEL',
    rCode: 'SC',
    ticket: [],
    book (roomNumber, name){
        console.log(`${name} booked a room on ${this.Name}. his hotel code is ${this.rCode}. and his room number is ${this.rCode}-${roomNumber}`);


        this.ticket.push({TicketInfo: `${this.rCode}-${roomNumber},   ${name}`})
    }
}


silverCasel.book('f9', 'arif ariyan')
silverCasel.book('d10', 'sharif muhammad')
silverCasel.book('d10', 'sharif muhammad')
console.log(silverCasel);


///-----------------------------------------------
const riverPlace = {
    Name: 'RIVER PLACE',
    rCode: 'RP',
    ticket: [],
}
const book = silverCasel.book;

book.apply(riverPlace,[ 'f3', 'israt'])
book.apply(riverPlace,[ 'f3', 'israt'])
book.apply(riverPlace,[ 'f3', 'israt'])


console.log(riverPlace);
///--------------------------------------------------
const mokkahotel = {
    Name: 'MOKKA HOTEL',
    rCode: 'MH',
    ticket: [],
}
const mokka = silverCasel.book;

mokka.call(mokkahotel, 'f3', 'rayhan')
mokka.call(mokkahotel, 'f3', 'rayhan')
mokka.call(mokkahotel, 'f3', 'rayhan')



console.log(mokkahotel);



































































