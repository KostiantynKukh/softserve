class User {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.orders = [];
        this.ordersIdList = [];
    }

    getUserInfo() {
        return {
            name: this.name,
            surname: this.surname,
            email: this.email,
            orders: this.orders,
        }
    }
    
    addOrder(order) {
        this.orders.push(order);
        this.setOrderId(order);
    }

    setOrderId(order) { 
        let orderId = this.renderOrderId(order);
        this.ordersIdList.push(orderId);
        order.orderId = orderId;
    }

    renderOrderId() {
        let orderId = parseInt(Math.random()*10000);

        if (orderId < 10 ) {orderId = '000' + orderId}
            else if (orderId < 100 ){
            orderId = '00' + orderId} 
            else if (orderId < 1000 ){orderId = '0' + orderId};
    
        while(this.ordersIdList.includes(orderId)){
            orderId = parseInt(Math.random()*10000);

            if (orderId < 10 ) {orderId = '000' + orderId}
            else if (orderId < 100 ){
            orderId = '00' + orderId} 
            else if (orderId < 1000 ){orderId = '0' + orderId};
        }
        
        return orderId;
    }
}

class Order {
    constructor() {
        this.orderId = null;
        this.goodsList = [];
        this.goodsCount = 0;
        this.totalPrice = 0;
    }

    getOrderInfo() {
       return {
           id: this.orderId,
           goodsList: this.goodsList,
           totalPrice: this.totalPrice,
        }
    }

    addGoods(goods) {
        this.goodsList.push(goods);
        this.goodsCount ++;
        this.totalPrice += (goods.price * goods.count);
        
    }

    checkOrder(){
       let info = this.goodsCount ? `You have ${this.goodsCount} goods in your shopping cart` : 'Your shopping cart is empty!';
       console.log(info);
    }
}

class Goods {
    constructor(name, goodsId, price, count = 1) {
        this.name = name;
        this.goodsId = goodsId;
        this.price = price;
        this.count = count;
    }

    getGoodsInfo() {
        return {
            name: this.name,  
            goodsId: this.goodsId,  
            price: this.price, 
            count: this.count,
            }
        }
    }

let goods = [
    ['Freezer', '0000', 15000],
    ['Camera', '0001', 10000],
    ['Laptop', '0002', 20000],
    ['TV', '0003', 25000],
    ['Phone', '0004', 5000],
    ['Oven', '0005', 10000]
];

let kostia = new User('Kostiantyn', 'Kukh', 'kkuh1993@gmail.com');
let order = new Order();

//order.checkOrder();

order.addGoods(new Goods(...goods[0], 1));
order.addGoods(new Goods(...goods[1], 1));
order.addGoods(new Goods(...goods[2], 2));
order.addGoods(new Goods(...goods[4], 2));

//order.checkOrder();

kostia.addOrder(order);

console.log(kostia);




