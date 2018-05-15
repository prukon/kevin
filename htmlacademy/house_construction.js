var materialPrice = {
    'wood': 1000,
    'stone': 1500,
    'brick': 2000
};

var house = {
    rooms: 10,
    floors: 5,
    material: 'wood',
    coefficient: 10.5,
    calculateSquare:function(){
        var area = house.rooms * house.coefficient * house.floors
        return area;
    },
    calculatePrice: function (){
        total = this.calculateSquare()* materialPrice[this.material]
        return total;
    }



};

console.log (house.calculateSquare());
console.log (house.calculatePrice());
console.log(materialPrice['wood']);

/*

 Мяу! Допиши за меня конфигуратор. Я создал объект house и задал ему несколько свойств: rooms (количество комнат), floors (этажи), material (материал для стен), coefficient (средняя площадь каждой комнаты).

 Ещё я завёл мапу materialPrice, в которой записал стоимость каждого возможного материала для строительства.

 Добавь в объект два метода: calculateSquare для расчёта площади дома и calculatePrice для вычисления стоимости.

 Площадь считай так: умножь количество комнат на коэффициент и число этажей в доме.

 Цена строительства — произведение площади и стоимости материала дома.

 */
