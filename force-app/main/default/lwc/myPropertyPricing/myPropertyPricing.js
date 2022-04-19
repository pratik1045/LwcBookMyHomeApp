import { LightningElement,api } from 'lwc';
 
export default class MyPropertyPricing extends LightningElement {
    @api property;
    @api propertyFound;
}