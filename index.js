let mes = prompt("Digite o mês do seu nascimento(ex: jan):");
let dia = prompt("Digite o dia do seu nascimento(ex:1-31):");
let nomeDaBanda = "";

switch(mes){
    case "jan":
        nomeDaBanda = "Capirotos";
        break;
    case "fev":
        nomeDaBanda = "Lendários";
        break;
    case "mar":
        nomeDaBanda = "Soldados";
        break;        
    case "abr":
        nomeDaBanda = "Faroestes";
        break;
    case "mai":
        nomeDaBanda = "Fodões";
        break;
    case "jun":
        nomeDaBanda = "Monstros";
        break;
    case "jul":
        nomeDaBanda = "Fanfarrões";
        break;
    case "ago":
        nomeDaBanda = "Baderneiros";
        break;
    case "set":
        nomeDaBanda = "Perturbados";
        break;
    case "out":
        nomeDaBanda = "Aliens";
        break;
    case "nov":
        nomeDaBanda = "Revoltados";
        break;
    case "dez":
        nomeDaBanda = "Gigantes";
        break;
}

alert(`O nome da sua banda é ${nomeDaBanda}`)