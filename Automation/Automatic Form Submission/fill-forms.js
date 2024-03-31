// ==UserScript==
// @name         Automatic Form Filler
// @namespace    http://findasnake.com
// @version      2024-03-04
// @description  This script will fill all the forms with information 
// @author       You
// @match        *://*/*
// @icon         https://t3.ftcdn.net/jpg/01/37/22/46/360_F_137224603_ZjVKCAfTsNBGDEWcEngpUjIkaeVFq6oG.jpg
// @grant        none
// ==/UserScript==

(function () {
    // VALUES
    var User_Info = {
        firstName: "Murtadha",
        lastName: "Marzouq",
        email: "mmarzou0@gmail.com",
        password: "p@ssW0rd123",
        phone: "2134584982",
        address: "1633 revlon place",
        city: "Charlotte",
        state: "NC",
        zip: "28205",
        country: "USA",
        dob: "01/01/1994",
        accept_terms: true,
        ethnicity: "Two or More",
        disability: false,
        veteran: false,
        sponsorship: false,
        work_auth: "US Citizen",
        expected_salary: "100000",
    };

    // FIND ALL THE LABELS
    var labels = document.querySelectorAll('label');
    // function to make the variable global and accessible from the console
    function expose(variable) {
        window.User_Info = variable;
    }

    // EXPOSE THE VALUES
    expose(User_Info);



    // FUNCTION TO FIND AN INPUT BY NAME OR PLACEHOLDER OR ID and fill it with the value
    function findInputByName(substring, value) {
        var inputs = document.querySelectorAll('input')
        // add the textarea to the inputs
        var selects = document.querySelectorAll('textarea');
        inputs = Array.from(inputs).concat(Array.from(selects));
        let FoundInput;
        inputs.forEach(input => {

            if (input.placeholder.toLowerCase().includes(substring.toLowerCase()) || input.name.toLowerCase().includes(substring.toLowerCase()) || input.id.toLowerCase().includes(substring.toLowerCase() || input.type.toLowerCase().includes(substring.toLowerCase() || input.labels.toLowerCase().includes(substring.toLowerCase())))) {
                FoundInput = input;
                // FILL THE INPUT WITH THE VALUE    
                input.value = value;
                // CHANGE THE BORDER COLOR TO GREEN
                input.style = "border:2px solid green !important";
                return FoundInput;
            }
            return FoundInput
        })
        // IF THE INPUT IS FOUND, FILL IT WITH THE VALUE
        if (!FoundInput) {
            return 'not found';
        } else {
            // IF THE INPUT IS FOUND, FILL IT WITH THE VALUE
            FoundInput.value = value;
            // CHANGE THE BORDER COLOR TO GREEN
            FoundInput.style = "border:2px solid green !important";
            return FoundInput;
        }
    }

    // CHANGE STATE TO NC
    function changeState(state) {
        // FIND THE STATE ELEMENT
        let stateELEMENT;
        // LOOP THROUGH THE LABELS
        labels.forEach(label => {
            if (label.textContent.toLowerCase().includes('state')) {
                stateELEMENT = label;
                // CHANGE THE BORDER COLOR TO GREEN
                stateELEMENT.style = "border:2px solid green !important";
                // find the North Carolina option
                var options = stateELEMENT.parentElement.querySelectorAll('option');

                // LOOP THROUGH THE OPTIONS
                options.forEach(option => {
                    //if (option.value.toLowerCase().includes('nc') || option.textContent.toLowerCase().includes('north carolina')) {
                    if (option.value.toLowerCase().includes(state.toLowerCase())) {
                        // SELECT THE NORTH CAROLINA OPTION
                        option.selected = true;
                        // CHANGE THE BORDER COLOR TO GREEN
                        option.style = "border:2px solid green !important";
                    }
                }
                )
                return stateELEMENT;
            }
            return stateELEMENT;
        }
        )
    }
    // FUNCTION TO AGREE TO THE NON-COMPETE
    function agreeToNonCompete() {
        // FIND THE NON-COMPETE ELEMENT
        let AgreeToNonCompeteLabel;
        // FIND ALL THE LABELS
        labels.forEach(label => {
            if (label.textContent.toLowerCase().includes('non-compete')) {
                // SELECT THE INPUT
                AgreeToNonCompeteLabel = label

            }
        })

        // FIND THE SELECT
        AgreeToNonCompeteLabel.parentElement.querySelectorAll('select')[0].childNodes.forEach(CHOICE => {
            if (CHOICE.innerText.toLowerCase().includes('yes')) {
                CHOICE.selected = true;
                console.log(CHOICE)
            }

        }
        )
    }

        // FUNCTION TO  SKIP VISA SPONSORSHIP
        function Visa_Requirement() {
            // FIND THE NON-COMPETE ELEMENT
            let AgreeToNonCompeteLabel;
            // FIND ALL THE LABELS
            labels.forEach(label => {
                if (label.textContent.toLowerCase().includes('sponsorship ')) {
                    // SELECT THE INPUT
                    AgreeToNonCompeteLabel = label
    
                }
            })
    
            // FIND THE SELECT
            AgreeToNonCompeteLabel.parentElement.querySelectorAll('select')[0].childNodes.forEach(CHOICE => {
                if (CHOICE.innerText.toLowerCase().includes('no')) {
                    CHOICE.selected = true;
                    console.log(CHOICE)
                }
    
            }
            )
        }

        // ARE YOU A 18 YEARS OLD
        function AreYou18() {
            // FIND THE NON-COMPETE ELEMENT
            let AreYou18Label;
            // FIND ALL THE LABELS
            labels.forEach(label => {
                if (label.textContent.toLowerCase().includes('18')) {
                    // SELECT THE INPUT
                    AreYou18Label = label
    
                }
            })
    
            // FIND THE SELECT
            AreYou18Label.parentElement.querySelectorAll('select')[0].childNodes.forEach(CHOICE => {
                if (CHOICE.innerText.toLowerCase().includes('yes')) {
                    CHOICE.selected = true;
                    console.log(CHOICE)
                }
    
            }
            )
        }


    // EXPECTED SALARY
    function ExpectedSalary(expectedSalary) {
        // FIND THE NON-COMPETE ELEMENT
        let ExpectedSalaryLabel;
        // FIND ALL THE LABELS
        labels.forEach(label => {
            if (label.textContent.toLowerCase().includes('expected')) {
                // SELECT THE INPUT
                ExpectedSalaryLabel = label

            }
        })
        // FIND THE  TEXTAREA AND FILL IT WITH THE VALUE
        
        ExpectedSalaryLabel.parentElement.querySelectorAll('textarea')[0].value=  expectedSalary;
        
        
    }
    // FUNCTION TO CHANGE THE COUNTRY TO USA
    function changeCountry(country) {
        // FIND THE COUNTRY ELEMENT
        let countryELEMENT;
        // FIND ALL THE LABELS
        var labels = document.querySelectorAll('label');
        // LOOP THROUGH THE LABELS
        labels.forEach(label => {
            if (label.textContent.toLowerCase().includes('country')) {
                countryELEMENT = label;
                // CHANGE THE BORDER COLOR TO GREEN
                countryELEMENT.style = "border:2px solid green !important";
                // FIND ALL THE OPTIONS
                var options = countryELEMENT.parentElement.querySelectorAll('option');
                // LOOP THROUGH THE OPTIONS
                options.forEach(option => {
                    if (option.value.toLowerCase().includes(country.toLowerCase()) || option.textContent.toLowerCase().includes(country.toLowerCase())) {
                        // SELECT THE USA OPTION
                        option.selected = true;
                        // CHANGE THE BORDER COLOR TO GREEN
                        option.style = "border:2px solid green !important";
                    }
                }
                )
                return countryELEMENT;
            }
            return countryELEMENT;
        }
        )
    }

    // Function to previously been employed
    function previouslyEmployed() {
        // FIND THE NON-COMPETE ELEMENT
        let previouslyEmployedLabel;
        // FIND ALL THE LABELS
        labels.forEach(label => {
            if (label.textContent.toLowerCase().includes('previously been employed')) {
                // SELECT THE INPUT
                previouslyEmployedLabel = label

            }
        })

        // FIND THE SELECT
        previouslyEmployedLabel.parentElement.querySelectorAll('select')[0].childNodes.forEach(CHOICE => {
            if (CHOICE.innerText.toLowerCase().includes('no')) {
                CHOICE.selected = true;
                console.log(CHOICE)
            }

        }
        )
    }
    
    // FUNCTION TO SELECT THE GENDER    
    function selectGender(){
               // FIND THE NON-COMPETE ELEMENT
               let SelectGenderLabel;
               // FIND ALL THE LABELS
               labels.forEach(label => {
                   if (label.textContent.toLowerCase().includes('gender:')) {
                       // SELECT THE INPUT
                       SelectGenderLabel = label
       
                   }
               })
       
               // FIND THE SELECT
               SelectGenderLabel.parentElement.querySelectorAll('select')[0].childNodes.forEach(CHOICE => {
                   if (CHOICE.innerText.toLowerCase().includes('male')) {
                       CHOICE.selected = true;
                   }
       
               }
               )
    }

    // FUNCTION TO SELECT THE VETERAN STATUS
    function veteranStatus(){
        let veteranStatusLabel;
        // FIND ALL THE LABELS
        labels.forEach(label => {
            if (label.textContent.toLowerCase().includes('veteran')) {
                // SELECT THE INPUT
                veteranStatusLabel = label

            }
        })

        // FIND THE SELECT
        veteranStatusLabel.parentElement.querySelectorAll('select')[0].childNodes.forEach(CHOICE => {
            if (CHOICE.innerText.toLowerCase().includes('not')) {
                CHOICE.selected = true;
            }

        }
        )
}

// FUNCTION TO SELECT LATINO OR HISPANIC
function selectLatino(){
    let selectLatinoLabel;
    // FIND ALL THE LABELS
    labels.forEach(label => {
        if (label.textContent.toLowerCase().includes('latino')) {
            // SELECT THE INPUT
            selectLatinoLabel = label

        }
    })

    // FIND THE SELECT
    selectLatinoLabel.parentElement.querySelectorAll('select')[0].childNodes.forEach(CHOICE => {
        if (CHOICE.innerText.toLowerCase().includes('no')) {
            CHOICE.selected = true;
        }

    }
    )
}

// FUNCTION TO SELECT THE RACE/Ethnicity
function selectRace(){
    let selectRaceLabel;
    // FIND ALL THE LABELS
    labels.forEach(label => {
        if ( label.textContent.toLowerCase().includes('ethnicity')) {
            // SELECT THE INPUT
            selectRaceLabel = label

        }
    })
    // FIND THE SELECT
    selectRaceLabel.parentElement.querySelectorAll('select')[0].childNodes.forEach(CHOICE => {
        if (CHOICE.innerText.toLowerCase().includes('two or more')) {
            CHOICE.selected = true;
        }

    }
    )
}


    // FUNCTION TO SELECT THE DISABILITY STATUS
    function disabilityStatus(){
        let disabilityStatusLabel;
        // FIND ALL THE LABELS
        labels.forEach(label => {
            if (label.textContent.toLowerCase().includes('disability')) {
                // SELECT THE INPUT
                disabilityStatusLabel = label

            }
        })

        // FIND THE SELECT
        disabilityStatusLabel.parentElement.querySelectorAll('input[type=[]')[0].childNodes.forEach(CHOICE => {
            if (CHOICE.innerText.toLowerCase().includes('no')) {
                CHOICE.selected = true;
            }

        }
        )
    }
    
    // FUNCTION TO FILL THE FORM
    function fillForm() {
        // FIND ALL THE INPUTS
        inputs = document.querySelectorAll('input');
        // FILL THE INPUTS
        findInputByName('first', User_Info.firstName);
        findInputByName('last', User_Info.lastName);
        findInputByName('email', User_Info.email);
        findInputByName('password', User_Info.password);
        findInputByName('phone', User_Info.phone);
        findInputByName('address', User_Info.address);
        findInputByName('city', User_Info.city);
        changeCountry(User_Info.country);
        changeState(User_Info.state);
        findInputByName('zip', User_Info.zip);
        findInputByName('postal', User_Info.zip);
        findInputByName('country', User_Info.country);
        findInputByName('dob', User_Info.dob);
        previouslyEmployed();
        selectGender();
        selectRace();
        selectLatino();
        disabilityStatus();
        veteranStatus();
        agreeToNonCompete();
        Visa_Requirement();
        AreYou18();
        ExpectedSalary(User_Info.expected_salary);
        
    }


    /**
     * UI: Overlay the button
     */
    // CREATE THE GROUP OF BUTTONS
    var group = document.createElement('div');
    group.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;";
    group.innerHTML = "Fill Form";
    document.body.appendChild(group);
    
    var button1 = document.createElement('button');
    button1.innerHTML = "First Name";
    button1.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button1);
    button1.addEventListener("click", function () {
        findInputByName('first', User_Info.firstName);
    });
    var button2 = document.createElement('button');
    button2.innerHTML = "Last Name";
    button2.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button2);
    button2.addEventListener("click", function () {
        findInputByName('last', User_Info.lastName);
    });
    var button3 = document.createElement('button');
    button3.innerHTML = "Email";
    button3.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button3);
    button3.addEventListener("click", function () {
        findInputByName('email', User_Info.email);
    });
    var button4 = document.createElement('button');
    button4.innerHTML = "Password";
    button4.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button4);
    button4.addEventListener("click", function () {
        findInputByName('password', User_Info.password);
    });
    var button5 = document.createElement('button');
    button5.innerHTML = "Phone";
    button5.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button5);
    button5.addEventListener("click", function () {
        findInputByName('phone', User_Info.phone);
    });
    var button6 = document.createElement('button');
    button6.innerHTML = "Address";
    button6.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button6);
    button6.addEventListener("click", function () {
        findInputByName('address', User_Info.address);
    });
    var button7 = document.createElement('button');
    button7.innerHTML = "City";
    button7.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button7);
    button7.addEventListener("click", function () {
        findInputByName('city', User_Info.city);
    });
    var button8 = document.createElement('button');
    button8.innerHTML = "Zip";
    button8.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button8);
    button8.addEventListener("click", function () {
        findInputByName('zip', User_Info.zip);
    });
    var button9 = document.createElement('button');
    button9.innerHTML = "Country";
    button9.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button9);
    button9.addEventListener("click", function () {
        changeCountry(User_Info.country);
    });
    var button10 = document.createElement('button');
    button10.innerHTML = "State";
    button10.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button10);
    button10.addEventListener("click", function () {
        changeState(User_Info.state);
    });
    var button11 = document.createElement('button');
    button11.innerHTML = "DOB";
    button11.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button11);
    button11.addEventListener("click", function () {
        findInputByName('dob', User_Info.dob);
    });
    var button12 = document.createElement('button');
    button12.innerHTML = "Previously Employed";
    button12.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button12);
    button12.addEventListener("click", function () {
        previouslyEmployed();
    });
    var button13 = document.createElement('button');
    button13.innerHTML = "Visa Requirement";
    button13.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button13);
    button13.addEventListener("click", function () {
        Visa_Requirement();
    });
    var button14 = document.createElement('button');
    button14.innerHTML = "Are You 18";
    button14.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button14);
    button14.addEventListener("click", function () {
        AreYou18();
    });
    var button15 = document.createElement('button');
    button15.innerHTML = "Expected Salary";
    button15.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button15);
    button15.addEventListener("click", function () {
        ExpectedSalary(User_Info.expected_salary);
    });
    var button16 = document.createElement('button');
    button16.innerHTML = "Agree to Non-Compete";
    button16.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button16);
    button16.addEventListener("click", function () {
        agreeToNonCompete();
    });
    var button17 = document.createElement('button');
    button17.innerHTML = "Veteran Status";
    button17.style = "position: fixed; top: 10px; right: 10px; z-index: 1000; padding: 10px 20px; background-color: red; color: white; border: none; cursor: pointer; border-radius: 10px;color: white; border: none; cursor: pointer; border-radius: 10px;hover: background-color: #45a049;"
    group.appendChild(button17);
    button17.addEventListener("click", function () {
        veteranStatus();
    });
    

    
})();

