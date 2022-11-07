// creo un array di oggetti 

const team = [
    {
        name : "Wayne Barnett",
        position : "Founder & CEO",
        profilePhoto : "wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela Caroll",
        position : "Chief Editor",
        profilePhoto : "angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter Gordon",
        position : "Office Manager",
        profilePhoto : "walter-gordon-office-manager.jpg"
    },
    {
        name : "Angela Lopez",
        position : "Social Media Manager",
        profilePhoto : "angela-lopez-social-media-manager.jpg"
    },
    {
        name : "Scott Estrada",
        position : "Developer",
        profilePhoto : "scott-estrada-developer.jpg"
    },
    {
        name : "Barbara Ramos",
        position : "Graphic Designer",
        profilePhoto : "barbara-ramos-graphic-designer.jpg"
    }
];

// stampare in console per ogni membro del team le informazioni contenute nell'oggetto

// creo un ciclo per l'array 
for (let i = 0; i < team.length; i++) {
    // console.log(team[i]);
    const person = team[i]
    console.log(person.name , person.position , person.profilePhoto)
}
    