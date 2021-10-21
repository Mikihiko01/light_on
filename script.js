$(function () {
    // a szülö elem és a sablon elem meg határozása
    const szuloElem = $("article");
    const sablonElem = $(".lampa");
    const lampaTomb = [];
    const meret = 9;
    //a sablom elem clonozása és a szülö elem csatolása
    for (let index = 0; index < meret; index++) {
        const ujElem = sablonElem.clone().appendTo(szuloElem);
        //a példányositás
        const lampa = new Lampa(ujElem, index);
        //az objektumokat beleteszük egy tömbe
        lampaTomb.push(lampa);
    }
    // console.log(lampaTomb);
    sablonElem.remove();
    //feliratkozás az eseményre
    $(window).on("lampaFelkapcsol", (esemeny) => {
        //console.log(esemeny.detail);
        let elemID = esemeny.detail;
        //szomszedos elem:
        let meret = 3;
        if (elemID > meret - 1) {
            lampaTomb[elemID - meret].setAllapot();

        }
        if (elemID < meret * meret - meret) {
            lampaTomb[elemID + meret].setAllapot();

        }
        if (elemID % meret !== 0) {
            lampaTomb[elemID - 1].setAllapot();

        }
        if (elemID % meret !== meret - 1) {
            lampaTomb[elemID + 1].setAllapot();

        }


    });










});