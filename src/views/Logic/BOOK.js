class BOOK {
    static idItem = 0;
    constructor(ten, gia) {
        this.id = BOOK.idItem;
        this.ten = ten;
        this.gia = gia;
        BOOK.idItem += 1;
    }
}
export default BOOK;