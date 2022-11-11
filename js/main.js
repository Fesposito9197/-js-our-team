// creo un array di oggetti 

// const team = [
//     {
//         name : "Wayne Barnett",
//         position : "Founder & CEO",
//         profilePhoto : "wayne-barnett-founder-ceo.jpg"
//     },
//     {
//         name : "Angela Caroll",
//         position : "Chief Editor",
//         profilePhoto : "angela-caroll-chief-editor.jpg"
//     },
//     {
//         name : "Walter Gordon",
//         position : "Office Manager",
//         profilePhoto : "walter-gordon-office-manager.jpg"
//     },
//     {
//         name : "Angela Lopez",
//         position : "Social Media Manager",
//         profilePhoto : "angela-lopez-social-media-manager.jpg"
//     },
//     {
//         name : "Scott Estrada",
//         position : "Developer",
//         profilePhoto : "scott-estrada-developer.jpg"
//     },
//     {
//         name : "Barbara Ramos",
//         position : "Graphic Designer",
//         profilePhoto : "barbara-ramos-graphic-designer.jpg"
//     }
// ];

// // stampare in console per ogni membro del team le informazioni contenute nell'oggetto
// const personList = document.getElementById("person-list")
// // creo un ciclo per l'array 
// for (let i = 0; i < team.length; i++) {
//     // console.log(team[i]);
//     const person = team[i]
//     // stampo in console i singoli dati 
//     console.log(person.name , person.position , person.profilePhoto)
//     // creo l'elemento che verra' inserito nel dom
//     const listItem = `
//         <div class="col">
//             <img src="img/${person.profilePhoto}" alt="profile-picture">
//             <div class="container">
//                 <h4>${person.name}</h4>
//                 <p>${person.position}</p>
//             </div>
//         </div>
//     `;  
//     // inserisco l'elemento creato nel dom
//     personList.innerHTML += listItem;
// }
 

const { createApp } = Vue

createApp({
    data() {
        return{
            team: [
                {
                    name : "Wayne Barnett",
                    position : "Founder & CEO",
                    profilePhoto : "img/wayne-barnett-founder-ceo.jpg"
                },
                {
                    name : "Angela Caroll",
                    position : "Chief Editor",
                    profilePhoto : "img/angela-caroll-chief-editor.jpg"
                },
                {
                    name : "Walter Gordon",
                    position : "Office Manager",
                    profilePhoto : "img/walter-gordon-office-manager.jpg"
                },
                {
                    name : "Angela Lopez",
                    position : "Social Media Manager",
                    profilePhoto : "img/angela-lopez-social-media-manager.jpg"
                },
                {
                    name : "Scott Estrada",
                    position : "Developer",
                    profilePhoto : "img/scott-estrada-developer.jpg"
                },
                {
                    name : "Barbara Ramos",
                    position : "Graphic Designer",
                    profilePhoto : "img/barbara-ramos-graphic-designer.jpg"
                }
            ]
                
            
        }
    }
}).mount('#app')