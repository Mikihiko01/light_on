class Lampa {
    constructor(elem, index) {
        this.elem = elem;
        this.allapot = false;
        this.index = index;
        this.setSzin();

        //esemény kezelő
        this.elem.on("click", () => {
            console.log(this);
            /*this.allapot = !this.allapot;
              this.setSzin();*/
            this.setAllapot();
            this.KattintasTrigger(); //ezzel váltjuk ki az eseményt
        });

        //ha rákattintunk az elemre
        //állapotot meg kell változtatni
        //meg hivni egy szint



    }
    setAllapot() {
        //állapot elenkezővé állitása
        this.allapot = !this.allapot;
        this.setSzin();
    }

    setSzin() {
        if (this.allapot) {
            this.elem.css("background-color", "green");
           // this.elem.css("transform", "perspective(400px) ","rotateX(140deg)");
        } else {
            this.elem.css("background-color", "yellow");
             // this.elem.css("transform",  "perspective(400px) ","rotateX(10deg)");
        }
    }

    //saját eseményt definiálunk
    KattintasTrigger() {
        let esemeny = new CustomEvent("lampaFelkapcsol", { detail: this.index });
        //úgy hozzunk létre eseményt hogy azt is meg mondjuk hogy
        // melyik objektum váltottaki      
        window.dispatchEvent(esemeny); //ez azért kell hog a script.js-ben lásuk
    }

}