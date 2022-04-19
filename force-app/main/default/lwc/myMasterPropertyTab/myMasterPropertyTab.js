import { LightningElement, api, track, wire } from 'lwc';
import getDetails from '@salesforce/apex/PropertyDetails.getDetails';

export default class MyMasterPropertyTab extends LightningElement {
    @api property;
    //@api propertyOwnerId;
    @api propertyFound;
    @api propertyId;
    @track error;

    @wire(getDetails, { propId: '$propertyId' })
    wiredProperties({ data, error }) {
        console.log('WiredProp propId' + this.propertyId);
        if (data) {
            this.property = data;
            this.propertyFound = true;
            // this.propertyOwnerId = this.property.data.fields.Property_Owner__c.value;
            console.log('WiredProp propertyOwnerId' + this.propertyOwnerId);
        } else if (error) {
            this.showToast('ERROR', error.body.message, 'error');
        }
    }
}
