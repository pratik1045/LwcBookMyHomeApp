/* eslint-disable no-console */
import { LightningElement, track, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
export default class MyPropertyFilter extends LightningElement {
    @track location;
    @track noOfBedRoom;
    @track noOfBathRoom;
    @track maxBudget;
 
    get locationOptions(){
        return [
            {label:'ALL',value:'ALL'},
            { label: 'Banglore', value: 'Banglore' },
            { label: 'Mumbai', value: 'Mumbai' },
            { label: 'Hyderabad', value: 'Hyderabad' },
            { label: 'Pune', value: 'Pune' },
            { label: 'Bhubaneswar', value: 'Bhubaneswar' }
        ];
    }
    get noOfBedRoomOptions() {
        return [
            { label: 'ALL', value: 'ALL' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' }
           
        ];
    }
    get noOfBathRoomOptions() {
        return [
            { label: 'ALL', value: 'ALL' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' }
 
        ];
    }
    @wire(CurrentPageReference) pageRef;
    handleLocationChange(event){
        this.location = event.target.value;
        console.log('location selected as'+this.location);
        fireEvent(this.pageRef, "handelLocFilterChange", this.location);
    }
    handleBedRoomChange(event){
        this.noOfBedRoom = event.target.value;
        console.log('noOfBathRoom selected as' + this.noOfBedRoom);
        fireEvent(this.pageRef, "handelLocBedRommChange", this.noOfBedRoom);
    }
    handleBathRoomChange(event){
        this.noOfBathRoom = event.target.value;
        console.log('noOfBathRoom selected as' + this.noOfBathRoom);
        fireEvent(this.pageRef, "handelBathRoomFilterChange", this.noOfBathRoom);
    }
    handlebudgetChange(event){
        this.maxBudget = event.target.value;
        console.log('maxBudget selected as' + this.maxBudget);
        fireEvent(this.pageRef, "handelBudgetilterChange", this.maxBudget);
    }
}