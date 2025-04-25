// let mes = prompt("Digite o mês do seu nascimento(ex: jan):");
// let dia = prompt("Digite o dia do seu nascimento(ex:1-31):");
// let nomeDaBanda = "";
// let nomeDaBandaComplementar = "";

// switch(mes){
//     case "jan":
//         nomeDaBanda = "Capirotos";
//         break;
//     case "fev":
//         nomeDaBanda = "Lendários";
//         break;
//     case "mar":
//         nomeDaBanda = "Soldados";
//         break;        
//     case "abr":
//         nomeDaBanda = "Faroestes";
//         break;
//     case "mai":
//         nomeDaBanda = "Fodões";
//         break;
//     case "jun":
//         nomeDaBanda = "Monstros";
//         break;
//     case "jul":
//         nomeDaBanda = "Fanfarrões";
//         break;
//     case "ago":
//         nomeDaBanda = "Baderneiros";
//         break;
//     case "set":
//         nomeDaBanda = "Perturbados";
//         break;
//     case "out":
//         nomeDaBanda = "Aliens";
//         break;
//     case "nov":
//         nomeDaBanda = "Revoltados";
//         break;
//     case "dez":
//         nomeDaBanda = "Gigantes";
//         break;
//     default:
//         alert("digite um mês válido")
// }

// switch(dia) {
//     case '1':
//         nomeDaBandaComplementar = 'Do espaço';
//         break;
//     case "2" :
//         nomeDaBandaComplementar = "Do inferno";
//         break;
//     case "3":
//         nomeDaBandaComplementar = "Da galaxia";
//         break;
//     case "4":
//         nomeDaBandaComplementar = "Da fazenda";
//         break;
//     case "5":
//         nomeDaBandaComplementar = "Do diabo";
//         break;
//     case "6":
//         nomeDaBandaComplementar = "Do Japão";
//         break;
//     case "7":
//         nomeDaBandaComplementar = "Das trevosas";
//         break;
//     case "8":
//         nomeDaBandaComplementar = "Do fundão";
//         break;
//     case "9":
//         nomeDaBandaComplementar = "Dos iluminates";
//         break;
//     case "10":
//         nomeDaBandaComplementar = "De copacabana";
//         break;
//     case "11":
//         nomeDaBandaComplementar = "Das trevas";
//         break;
//     case "12":
//         nomeDaBandaComplementar = "Caboclos";
//         break;
//     case "13":
//         nomeDaBandaComplementar = "Da muralha";
//         break;
//     case "14":
//         nomeDaBandaComplementar = "Voadores";
//         break;
//     case "15":
//         nomeDaBandaComplementar = "Do tempo";
//         break;
//     case "16":
//         nomeDaBandaComplementar = "Da esperança é a última que morre";
//         break;
//     case "17":
//         nomeDaBandaComplementar = "Da morte";
//         break;
//     case "18":
//         nomeDaBandaComplementar = "Abençoados";
//         break;
//     case "19":
//         nomeDaBandaComplementar = "Infernais";
//         break;
//     case "20":
//         nomeDaBandaComplementar = "Maloqueiros";
//         break;
//     case "21":
//         nomeDaBandaComplementar = "Dos 7 pecados capitais";
//         break;
//     case "22":
//         nomeDaBandaComplementar = "Mumificados";
//         break;
//     case "23":
//         nomeDaBandaComplementar = "Amigos do Chimbinha";
//         break;
//     case "24":
//         nomeDaBandaComplementar = "Posers";
//         break;
//     case "25":
//         nomeDaBandaComplementar = "Do mosh pit";
//         break;
//     case "26":
//         nomeDaBandaComplementar = "Valentões";
//         break;
//     case "27":
//         nomeDaBandaComplementar = "Da ilha do demonio";
//         break;
//     case "28":
//         nomeDaBandaComplementar = "Do segundo sol";
//         break;
//     case "29":
//         nomeDaBandaComplementar = "Rebeldes sem causa";
//         break;
//     case "30":
//         nomeDaBandaComplementar = "Grotescos";
//         break;
//     case "31":
//         nomeDaBandaComplementar = "Do cemitério maldito";
//         break;        
    

// }

// alert(`O nome da sua banda é ${nomeDaBanda} ${nomeDaBandaComplementar}`)

function descobrirNome(){
    let diaEscolhido = document.querySelector("#dia").value;
    let mesEscolhido = document.querySelector("#mes").value;
let nomeDaBanda = "";
let nomeDaBandaComplementar = "";

switch(mesEscolhido){
    case "1":
        nomeDaBanda = "Capirotos";
        break;
    case "2":
        nomeDaBanda = "Lendários";
        break;
    case "3":
        nomeDaBanda = "Soldados";
        break;        
    case "4":
        nomeDaBanda = "Faroestes";
        break;
    case "5":
        nomeDaBanda = "Fodões";
        break;
    case "6":
        nomeDaBanda = "Monstros";
        break;
    case "7":
        nomeDaBanda = "Fanfarrões";
        break;
    case "8":
        nomeDaBanda = "Baderneiros";
        break;
    case "9":
        nomeDaBanda = "Perturbados";
        break;
    case "10":
        nomeDaBanda = "Aliens";
        break;
    case "11":
        nomeDaBanda = "Revoltados";
        break;
    case "12":
        nomeDaBanda = "Gigantes";
        break;
    default:
        alert("digite um mês válido")
}

switch(diaEscolhido) {
    case '1':
        nomeDaBandaComplementar = 'Do espaço';
        break;
    case "2" :
        nomeDaBandaComplementar = "Do inferno";
        break;
    case "3":
        nomeDaBandaComplementar = "Da galaxia";
        break;
    case "4":
        nomeDaBandaComplementar = "Da fazenda";
        break;
    case "5":
        nomeDaBandaComplementar = "Do diabo";
        break;
    case "6":
        nomeDaBandaComplementar = "Do Japão";
        break;
    case "7":
        nomeDaBandaComplementar = "Das trevosas";
        break;
    case "8":
        nomeDaBandaComplementar = "Do fundão";
        break;
    case "9":
        nomeDaBandaComplementar = "Dos iluminates";
        break;
    case "10":
        nomeDaBandaComplementar = "De copacabana";
        break;
    case "11":
        nomeDaBandaComplementar = "Das trevas";
        break;
    case "12":
        nomeDaBandaComplementar = "Caboclos";
        break;
    case "13":
        nomeDaBandaComplementar = "Da muralha";
        break;
    case "14":
        nomeDaBandaComplementar = "Voadores";
        break;
    case "15":
        nomeDaBandaComplementar = "Do tempo";
        break;
    case "16":
        nomeDaBandaComplementar = "Da esperança é a última que morre";
        break;
    case "17":
        nomeDaBandaComplementar = "Da morte";
        break;
    case "18":
        nomeDaBandaComplementar = "Abençoados";
        break;
    case "19":
        nomeDaBandaComplementar = "Infernais";
        break;
    case "20":
        nomeDaBandaComplementar = "Maloqueiros";
        break;
    case "21":
        nomeDaBandaComplementar = "Dos 7 pecados capitais";
        break;
    case "22":
        nomeDaBandaComplementar = "Mumificados";
        break;
    case "23":
        nomeDaBandaComplementar = "Amigos do Chimbinha";
        break;
    case "24":
        nomeDaBandaComplementar = "Posers";
        break;
    case "25":
        nomeDaBandaComplementar = "Do mosh pit";
        break;
    case "26":
        nomeDaBandaComplementar = "Valentões";
        break;
    case "27":
        nomeDaBandaComplementar = "Da ilha do demonio";
        break;
    case "28":
        nomeDaBandaComplementar = "Do segundo sol";
        break;
    case "29":
        nomeDaBandaComplementar = "Rebeldes sem causa";
        break;
    case "30":
        nomeDaBandaComplementar = "Grotescos";
        break;
    case "31":
        nomeDaBandaComplementar = "Do cemitério maldito";
        break;        
    

}

alert(`O nome da sua banda é ${nomeDaBanda} ${nomeDaBandaComplementar}`)
    
}