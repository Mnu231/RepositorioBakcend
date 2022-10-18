    class usuario {
        constructor ( nombre , apellido , libros , mascotas ){
            this.nombre = nombre ;
            this.apellido = apellido ;
            this.libros = libros ;
            this.mascotas = mascotas ;
        }
        getFullName = () => {
            const nombreCompleto = `${this.nombre} ${this.apellido}`
            return nombreCompleto;
        }
        addMascota = (mascotaNueva) => {
            this.mascotas.push(mascotaNueva)
        }
        addNewBook = (nombre , tittle) => {
            const newBook = {
                autor : nombre,
                titulo: tittle,
            }
            this.libros.push(newBook)
        }
        getBookNames = () => {
            let titulos = []
            titulos = this.libros.map(function(libros) {
                return libros.titulo
            })
            return titulos;
        }
    }
    const libro1 = {
        autor: "Tolkien",
        titulo: "El señor de los anillos",
        
    }
    const usuario1 = new usuario("ricky" , "ricon", [libro1] , ["loki" , "billy"] )

    const nombreCompleto = usuario1.getFullName()
    console.log(nombreCompleto)

    usuario1.addMascota("Frank")
    console.log(usuario1.mascotas)

    usuario1.addNewBook("Sun tzsu" , "El arte de la guerra")
    usuario1.addNewBook("Stevenson" , "La isla del tesoro")
    console.log(usuario1)

    const titulos = usuario1.getBookNames()
    console.log(titulos)