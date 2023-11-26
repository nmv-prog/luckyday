import sport from '../images/sport.png'
import cooking from '../images/cooking.png'
import diving from '../images/diving.png'
import movies from '../images/movies.png'
import music from '../images/music.png'
import gaming from '../images/gaming.png'

export const coupons_base_url = 'http://localhost:5000/coupons'
export const gifts_base_url = 'http://localhost:5000/gifts'

export const InputsRequiredLabels = [
    ['firstName', 'First Name'],
    ['lastName', 'Last Name'],
    ['email', 'E-Mail'],
    ['phone', 'Mobile No.']
];

export const InputsLabels = ['country', 'city', 'address'];

export const SelectsLabels = [
    ['familyStatus', 'Family status'],
    ['numberOfKids', 'Number of kids'],
    ['Relationship', 'Relationship']
];

export const FamilyStatusItems = ['single', 'married', 'divorced', 'widowed'];
export const NumberOfKidsItems = ['none', '1', '2', '3', '4', '5', 'more'];
export const RelationshipsItems = ['spouse', 'parent', 'child', 'relative', 'friend', 'colleague'];
export const hobbies = [
    [sport, 'Sport'], 
    [cooking, 'Cooking'], 
    [diving, 'Diving'], 
    [music, 'Music'], 
    [gaming, 'Multimedia Gaming'], 
    [movies, 'Movies'] 
];


export const CompanyDetailsInputsLabels = [
    ['companyName', 'Company Name'],
    ['companyId', 'Company ID'],
    ['country', 'Country'],
    ['city', 'City'],
    ['address', 'Address']
];


export const ContactPersonDetailsInputsLabels = [
    ['fullName', 'Full Name'],
    ['role', 'Role'],
    ['officeNumber', 'Office number'],
    ['mobileNumber', 'Mobile number']
];

