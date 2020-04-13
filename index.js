// Add your Circle class here

class Circle{

    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return(this.radius * 2)
    }

    get circumference(){
        return(Math.PI * this.diameter)
    }

    get area(){
        return(Math.PI * (this.radius*this.radius))
    }


    set diameter(number){

        this.radius = (number/2)
    }


    set circumference(number){
        this.diameter = (number/Math.PI)
    }

    






}