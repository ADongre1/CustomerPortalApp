export default class AutoPolicy{
    Id: number;
    BodilyInjury?: number;
    DamageLiability: number;
    Collision?: boolean;
    CollisionDeductible?: number;
    Comprehensive?: boolean;
    Premium?: number;
    Deductible?: number;

    constructor(Id: number, bodilyInjury?: number, damageLiability?: number,
                collision?: boolean, colDeductible?: number, 
                comprehensive?: boolean, premium?: number, deductible?: number){
                this.Id = Id;
                this.BodilyInjury = bodilyInjury;
                this.DamageLiability = typeof damageLiability === 'number'? damageLiability: 0;
                this.Collision = collision;
                this. CollisionDeductible = colDeductible;
                this.Comprehensive = comprehensive;
                this.Premium = premium;
                this.Deductible = deductible  
    }
}