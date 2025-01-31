namespace employee.db;
using { cuid } from '@sap/cds/common';

entity NumberRange : cuid {
    name:String;
    startingNumber:Int16;
    endingNumber:Int16;
    currentNumber:Int16;
}


