export default class Customer {

    Id: number;
    DOB: Date;
    FirstName: string;
    LastName: string;
    Pets?: boolean;
    Individuals: number;
    MailingAddress: string;
    MailingZip: number;
    MailingCity: string;
    MailingState: string
    Homes?: Home[];
    HomePolicies?: HomePolicy[];
    AutoPolicies?: AutoPolicy[];
    vehicles?: Vehicle[];

    constructor(id: number, dob: Date, firstName: string, lastName: string, individuals: number,
                mailingAddress: string, mailingZip: number, mailingCity: string,
                mailingState: string, homes?: Home[], homePolicies?: HomePolicy[] ,pets?: boolean
                autoPolicies?: AutoPolicy[], vehicles?: Vehicle[]){
                    this.Id = id;
                    this.DOB = dob;
                    this.LastName = lastName;
                    this.FirstName = firstName;
                    this.Pets = pets;
                    this.Individuals = individuals;
                    this.MailingAddress = mailingAddress;
                    this.MailingZip = mailingZip;
                    this.MailingCity = mailingCity;


                     
                } 
    
}