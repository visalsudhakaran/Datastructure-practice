class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item;
    this.length++
  }

  pop(){
    const lastitem = this.data[this.length];
  delete this.data[this.length];
    this.length--
    return lastitem
    
  }
  delete(index){
    const item = this.data[index];
    this.shiftItem(index)
  }

  shiftItem(index){
    for (let i=index;i<this.length-1;i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1]
    this.length--
    
  }
  
}



const array1 = new myArray;
array1.push('Firstthing')
array1.push('Banana')
array1.push('Laptop')
array1.push('Teddybear')
console.log(array1)
array1.delete(2)
console.log(array1)



