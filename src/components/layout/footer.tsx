
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#102B1E] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold">
            Cabañas Don Augusto
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-green-100">
            Un espacio para conectar con la naturaleza,
            descansar y disfrutar de la tranquilidad.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Explorar</h3>
          <div className="flex flex-col gap-3 text-sm text-green-100">
            <Link href="#inicio">Inicio</Link>
            <Link href="#cabanas">Cabañas</Link>
            <Link href="#nosotros">Nosotros</Link>
            <Link href="#contacto">Contacto</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Ubicación</h3>
          <p className="text-sm leading-relaxed text-green-100">
            San Isidro, Peñas Blancas
            <br />
            Costa Rica
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6 text-center text-sm text-green-200">
        © {new Date().getFullYear()} Cabañas Don Augusto.
        Todos los derechos reservados.
      </div>
    </footer>
  );
}
