const Duck = require('../Duck');

class Patos extends Duck {
    mallardDuck() {
        console.log('Mallard Duck');
        const mallard = new Duck();
        mallard.setFlyBehavior().FlyWithWings();
        mallard.setFlyBehavior().fly();
        mallard.setQuackBehavior().quack();
    }

    woodDuck() {
        console.log('Wood Duck');
        const woodDuck = new Duck();
        woodDuck.setFlyBehavior().FlyNoWay();
        woodDuck.setQuackBehavior().noQuack();
    }
}

module.exports = Patos;
