import {formatAMPM} from "./format_time.js";

export function getFormValue() {
   let result;
   let fullname = document.querySelector('#fullname').value;
   let dob = document.querySelector('#dob').value;
   let gender = document.querySelector('input[name="genderRadio"]:checked').value;
   let time = formatAMPM(new Date);
   return result = {fullname, dob, gender, time};
}