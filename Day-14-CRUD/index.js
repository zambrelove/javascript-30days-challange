let BASE_URL = 'http://localhost:4000'
let editableID = '';

// GET Call
    async function getAPI() {
        const response = await fetch(BASE_URL + '/user');
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            const cardWrapper = document.getElementById('wrapper');  // Main Card Wrapper Create
            const imgSrc = data[i].img; // Getting image here  
    
            const card = document.createElement('div');     // Createing Card Here 
            card.setAttribute('class', 'card');

            const imgWrapper = document.createElement('div');   // Creating Image Wrapper & Image 
            const img = document.createElement('img');
            imgWrapper.setAttribute('class', 'card-img')
            img.setAttribute('src', imgSrc);

            const cardInfo = document.createElement('div');  //Creating Card Info Div Here
            cardInfo.setAttribute('class', 'card-info');

            const title = document.createElement('h4')   // Creating Card Title & bind user Name
            title.innerHTML = data[i].name;
            title.setAttribute('class', 'card-title')
            
            const post = document.createElement('p');   // Creating Card Designation & binding user desingnation
            post.style.textTransform = 'capitalize'
            post.innerHTML = 'Designation' + ' : ' + data[i].designation;

            const email = document.createElement('p');  //Creating Card Email Address & binding user Email info
            email.innerHTML = 'Email' + ' : ' + data[i].email;

            const phone = document.createElement('p');      // Creating Phone No tag & bind user phone number
            phone.innerHTML = 'Phone' + ' : ' + data[i].phone;

            const btn_Wrapper = document.createElement('div');  // Creating Btn Wrapper 
            btn_Wrapper.setAttribute('class', 'card_Btn_wrapper');

            const edit_Btn = document.createElement('button');  // Created Edit button and Editing functionality
            edit_Btn.setAttribute('id', data[i].id)
            
            edit_Btn.addEventListener('click', async (event) => {
                document.getElementById('add_btn').style.display = 'none';
                document.getElementById('edit_btn').style.display = 'block';
                editableID = event.target.id;
                const imgSrc = document.getElementById('userImage');
                const name = document.getElementById('userName');
                const designation = document.getElementById('userDesignation');
                const email = document.getElementById('userEmail');
                const phone = document.getElementById('userPhone');

                const editableData = data.find(item => item.id == event.target.id);
                console.log( editableData, event.target.id);
                imgSrc.value = editableData.img;
                name.value = editableData.name;
                designation.value = editableData.designation;
                email.value = editableData.email;
                phone.value = editableData.phone;

            });

            edit_Btn.setAttribute('type', 'button');
            edit_Btn.setAttribute('class', 'edit_Btn');
            edit_Btn.innerHTML = 'edit details';

            const delete_Btn = document.createElement('button');    //Creating Delete button & delete functionality
            delete_Btn.setAttribute('id', data[i].id)
            delete_Btn.addEventListener("click", async (event) => {
                console.log(event.target.id);
                const deleteRespone = await fetch(BASE_URL + '/user/' + event.target.id, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                });
            });

            delete_Btn.setAttribute('type', 'button');
            delete_Btn.setAttribute('class', 'delete_Btn');
            delete_Btn.innerHTML = 'delete details';

            // Appending every thing at recpective place 
            card.append(imgWrapper);
            imgWrapper.append(img)

            cardWrapper.append(card);
            card.append(cardInfo);

            cardInfo.append(title);
            cardInfo.append(post);
            cardInfo.append(email);
            cardInfo.append(phone);

            card.append(btn_Wrapper);
            btn_Wrapper.append(edit_Btn);
            btn_Wrapper.append(delete_Btn);
        }
    }
    getAPI()

// Post Data Call
    async function postAPI() {
        const imgSrc = document.getElementById('userImage').value;
        const name = document.getElementById('userName').value;
        const designation = document.getElementById('userDesignation').value;
        const email = document.getElementById('userEmail').value;
        const phone = document.getElementById('userPhone').value;

        const response = fetch(BASE_URL + '/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "img": imgSrc,
                "name": name,
                "designation": designation,
                "email": email,
                "phone": phone
            })
        });
        const data = response.json();
    }

// update Data 
    async function updateAPI() {
        const imgSrc = document.getElementById('userImage').value;
        const name = document.getElementById('userName').value;
        const designation = document.getElementById('userDesignation').value;
        const email = document.getElementById('userEmail').value;
        const phone = document.getElementById('userPhone').value;

        const response = fetch(BASE_URL + '/user/' + editableID, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "img": imgSrc,
                "name": name,
                "designation": designation,
                "email": email,
                "phone": phone
            })
        });
        const data = response.json();
    }

