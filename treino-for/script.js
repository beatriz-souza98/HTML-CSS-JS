let p = document.querySelector("p");
let input = document.querySelector("input");

const contacts = [
  { name: 'Rodolpho', number: '(14) 94545-4545' },
  { name: 'Cicera', number: '(13) 94343-4343' },
  { name: 'Adriel', number: '(12) 94242-4242' },
  { name: 'Vera', number: '(11) 94141-94141' },
];

function search() {
  for (i = 0; i < contacts.length; i++)
    if (input.value.toLowerCase() === contacts[i].name.toLowerCase()){
      p.innerHTML = "Contato Encontrado Nome: " + contacts[i].name + "Tel: " + contacts[i].number

      break
    } 
    else {
      p.innerHTML = "Contato não encontrado";
}
}
