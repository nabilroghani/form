const list = document.querySelector("#submission-list");
    const form = document.querySelector('form');
    const output = document.querySelector("#output");
    const idOutput = document.querySelector("#id-output");
    let studentCounter = 0;

    const dataStores = [];
    

    form.addEventListener('submit', function (event) {
        event.preventDefault();

    
        const firstName = document.querySelector('#first-name').value;
        const lastName = document.querySelector('#last-name').value;
        const email = document.querySelector('#email').value;
        const phoneNumber = document.querySelector('#phone-number').value;
        const age = document.querySelector('#age').value;
        const address = document.querySelector('#address').value;

        let studentId = studentCounter++;
        idOutput.textContent = `Student Id: A${studentId}`;
       
        const formData = {
            name: `${firstName} ${lastName}`,
            email: email,
            phone: phoneNumber,
            age: age,
            address: address,
            Sid: studentId
        };

        
        dataStores.push(formData);

        output.innerHTML = `
            <strong>Latest Submission:</strong><br>
            Name: ${formData.name} <br>
            Email: ${formData.email} <br>
            Phone: ${formData.phone} <br>
            Age: ${formData.age} <br>
            Address: ${formData.address} <br>
            Student Id: A${formData.Sid}
        `;

        let li = document.createElement('li');
        let btn = document.createElement('button');
        btn.innerText = "Remove";
      li.innerHTML =  `
        <strong>${formData.name}</strong> - 
        Email: ${formData.email}, 
        Phone: ${formData.phone}, 
        Age: ${formData.age}, 
        Address: ${formData.address},
        Student Id: A${formData.Sid}
    `;
    list.appendChild(li);
    let storeLi = li.appendChild(btn);
    btn.addEventListener('click', function() {
        li.remove();
    })

        console.log("All submissions so far:", dataStores); 
        
    

        form.reset(); 
    });

    //---------------form styling-----------------
    let focuss = document.getElementsByTagName('input');
    for (let i = 0; i < focuss.length; i++) {
        focuss[i].addEventListener('focus', function (){
        this.style.backgroundColor = "#e0f7fa";
    })
    focuss[i].addEventListener('blur', function(){
        this.style.backgroundColor = "white";
    })
    }