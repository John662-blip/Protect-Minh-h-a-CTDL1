import NODE from "./NODE";
class LIST {
    constructor() {
        this.pHead = null;
        this.pTail = null;
    }
    IsEmpty() {
        if (this.pHead === null) return true;
        return false;
    }
    AddTail(value) {
        if (this.IsEmpty()) {
            let p = new NODE(value);
            this.pHead = p;
            this.pTail = this.pHead;
        }
        else {
            let p = new NODE(value);
            this.pTail.pNext = p;
            this.pTail = p;
        }
    }
    RemoveHead() {
        if (!this.IsEmpty()) {
            let p = this.pHead;
            this.pHead = p.pNext;
            if (this.pHead === null)
                this.pTail = null;
            return true;
        }
        return false;
    }
    SearchBeforeNode(node) {
        if (node === this.pHead) return null;
        for (let q = this.pHead; q !== this.pTail; q = q.pNext)
            if (q.pNext === node) return q;
    }
    RemoveTail() {
        if (!this.IsEmpty()) {
            let p = this.pTail;
            let q = this.SearchBeforeNode(p);
            if (q === null) {
                this.RemoveHead();
            }
            else {
                q.pNext = null;
                this.pTail = q;
            }
            return true
        }
        return false;
    }
    toArr() {
        let arr = [];
        if (!this.IsEmpty()) {
            for (let p = this.pHead; p !== null; p = p.pNext) {
                arr = [...arr, {
                    Ten: p.value.ten,
                    Gia: p.value.gia,
                    id: p.value.id
                }]

            }
        }
        return arr;
    }
}
export default LIST;