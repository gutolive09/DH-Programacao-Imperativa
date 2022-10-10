function podeSubir(altura, companhia) {
  if (altura >= 1.4 && altura <= 2.0) {
    console.log("Pode subir");
    return true;
  } else if (altura < 1.4) {
    if (companhia && altura > 1.2) {
      console.log("Subida com acompanhante");
      return true;
    } else {
      console.log("Subida negada");
      return false;
    }
  } else if (altura >= 1.2) {
    console.log("Altura negada");
    return false;
  }
}

console.log(podeSubir(1.39, true));
