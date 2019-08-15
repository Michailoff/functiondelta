var a = parseInt(prompt("Digite valor a"));
var b = parseInt(prompt("Digite valor b"));
var c = parseInt(prompt("Digite valor c"));

function delta (a,b,c){
	return (b*b)-(4 * a * c);
}
document.body.append(delta(a,b,c))
