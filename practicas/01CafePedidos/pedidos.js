const listaPedidos = [];

function nuevaOrden(pedido){
    const hora = new Date();
    listaPedidos.push({"id":listaPedidos.length, "pedido":pedido, "hora":hora.toLocaleDateString() + " a las " + hora.toLocaleTimeString()});
    return listaPedidos[listaPedidos.length-1];
}

function ordenTerminada(pedido, id){
    const horaFin = new Date();
    const regFinal = document.createElement("code");
    regFinal.innerHTML = horaFin.toLocaleDateString() + " a las " + horaFin.toLocaleTimeString() + "\t" 
        + "[Orden #" + id + "]\t" + "Entregado: " + pedido;
    return regFinal;
}

function prepararOrden(pedido, duracion){
    const orden = nuevaOrden(pedido);
    const reg = document.createElement("code");
    reg.innerHTML = "" + orden.hora + "\t" + "[Orden #" + orden.id +  "]\t" + " Pedido en Proceso: "+ pedido;
    document.getElementById("regOrdenes").appendChild(reg);
    setTimeout(() =>{
        document.getElementById("regOrdenes").appendChild(ordenTerminada(pedido, orden.id));
    },duracion);
}

function prepararCombo(){
    const ordenes = ["EXPRESO",2000,"CAPUCHINO",5000,"FRAPPE",7000,"LATTE",3000];
    for(let i = 0; i<ordenes.length-1; i+=2)
        prepararOrden(ordenes[i], ordenes[i+1]);
}