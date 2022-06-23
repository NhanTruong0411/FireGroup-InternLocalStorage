import {showDataDob} from "./modules/show_dob.js";
import {saveDataIntoLS, showAllDataInLocal, showAllDataDobInsideLS, local_clear} from "./modules/local_storage.js"
import {filter } from "./modules/filter.js"
import {sort } from "./modules/sort.js"

// Show data
showDataDob();
showAllDataInLocal();
showAllDataDobInsideLS();

// Filter and Sort
filter();
sort()

// Clear all data in local storage (must erfresh page)
local_clear(); 

// Button Nhập
let submitBtn = document.getElementById('submit-form');
submitBtn.addEventListener("click",saveDataIntoLS);
