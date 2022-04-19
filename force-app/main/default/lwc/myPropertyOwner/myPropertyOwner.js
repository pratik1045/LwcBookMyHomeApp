import { LightningElement, api } from 'lwc';
 
export default class MyPropertyOwner extends LightningElement {
    @api propertyOwnerId;
}