window.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn'),
          inputName = document.getElementById('name'),
          inputNumber = document.getElementById('number'),
          listContainer = document.getElementById('list-container');


          let dataBS = {};
    class Clazz {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }

        render() {
            const element = document.createElement('li');
            element.className = 'list';
            element.innerHTML = `<span>${this.name}</span> <span>${this.number}</span>`;
            return element;
        }
    }

   const getPerson =(data)=> {
    dataBS = {...data};
    data.forEach(element => {
        element = new Clazz(element.name,element.number).render();

        listContainer.append(element)

    });
    
    
   }

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const data = {
            name: inputName.value,
            number: inputNumber.value
        };

        fetch('http://localhost:3000/employeelist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            getPerson(data)   })
      

        .catch(error => {
            console.log(error);
        });
    });
    
   fetch('http://localhost:3000/employeelist')
   .then(response => response.json())
   .then(data=> {
   
    getPerson(data)
    
   })
   
    
    
});
