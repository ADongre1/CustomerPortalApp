import Home from './Home';
import AutoPolicy from './AutoPolicy';
import Vehicle from './Vehicle';
import HomePolicy from './HomePolicy';

export default interface Customer {

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
}